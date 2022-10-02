import { ShowDatabase } from "../database/ShowDatabase";
import { BuyLimit } from "../errors/BuyLimit";
import { DateBusy } from "../errors/DateBusy";
import { EmptyField } from "../errors/EmptyField(s)";
import { InsufficientPermission } from "../errors/InsufficientPermission";
import { InvalidBandName } from "../errors/InvalidBandName";
import { InvalidDateFormat } from "../errors/InvalidDateFortmat";
import { InvalidDatePeriod } from "../errors/InvalidDatePeriod";
import { InvalidShowId } from "../errors/InvalidShowId";
import { InvalidTicket } from "../errors/InvalidTicket";
import { InvalidToken } from "../errors/InvalidToken";
import { ShowDoesNotExist } from "../errors/ShowDoesNotExist";
import { TIcketSellAuth } from "../errors/TIcketSellAuth";
import { TicketsSoldOut } from "../errors/TicketsSoldOut";
import { ICreateInputDTO, IDeleteTicketInputDTO, IPurchaseInputDBDTO, IPurchaseInputDTO, IShowsDB, ITicketsDB } from "../model/Show";
import { USER_ROLES } from "../model/User";
import { Authenticator, ITokenPayload } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export class ShowBusiness {
    private showDatabase: ShowDatabase;
    private authenticator: Authenticator;
    private idGenerator: IdGenerator;
    constructor(showDatabase: ShowDatabase, authenticator: Authenticator, idGenerator: IdGenerator) {
        this.showDatabase = showDatabase;
        this.authenticator= authenticator;
        this.idGenerator = idGenerator;
    }

    public create = async (input: ICreateInputDTO) => {
        const { band, starts_at, token } = input;

        if (!band || !starts_at || !token) {
            throw new EmptyField();
        }

        if (typeof (band) !== "string") {
            throw new InvalidBandName();
        }

        const payload = this.authenticator.getTokenPayload(token);

        if (!payload) {
            throw new InvalidToken();
        }

        if (payload.role !== USER_ROLES.ADMIN) {
            throw new InsufficientPermission();
        }

        const dateS = starts_at.split("/");
        if (dateS.length < 3) {
            throw new InvalidDateFormat();
        }

        const date = new Date(`${dateS[2]}/${dateS[1]}/${dateS[0]}`);

        const startDate = new Date("2022/12/05").getTime();
        const endDate = new Date("2022/12/11").getTime();

        if (date.getTime() < startDate || date.getTime() > endDate) {
            throw new InvalidDatePeriod();
        }

        const isDateBusy = await this.showDatabase.findByDate(date);

        if (isDateBusy) {
            throw new DateBusy();
        }

        const id = this.idGenerator.generate();

        const showDB: IShowsDB = {
            id,
            band,
            starts_at: date
        }

        await this.showDatabase.create(showDB);

        return `${band} show created`;
    }

    public get = async () => {
        const shows: IShowsDB[] = await this.showDatabase.get();

        return shows;
    }

    public purchase = async (input: IPurchaseInputDTO) => {
        const {show_id, token} = input;

        if (!show_id || !token) {
            throw new EmptyField();
        }

        if (typeof(show_id) !== "string") {
            throw new InvalidShowId();
        }

        const payload = this.authenticator.getTokenPayload(token);

        if (!payload) {
            throw new InvalidToken();
        }

        const showExists = await this.showDatabase.findShowById(show_id);

        if (!showExists) {
            throw new ShowDoesNotExist();
        }

        const inputDB: IPurchaseInputDBDTO = {
            show_id,
            user_id: payload.id
        }

        const userAlreadyBought = await this.showDatabase.findTicketsByShowAndUser(inputDB);

        if (userAlreadyBought) {
            throw new BuyLimit();
        }

        const countTickets = await this.showDatabase.countTickets(show_id);
        const ticketsSold = countTickets["count(*)"];

        if (ticketsSold >= 500) {
            throw new TicketsSoldOut();
        }

        const id = this.idGenerator.generate();

        const finalInput: ITicketsDB = {
            id,
            show_id,
            user_id: payload.id
        }

        await this.showDatabase.purchase(finalInput);

        return "Ticket purchased"
    }

    public deleteTicket = async (input: IDeleteTicketInputDTO) => {
        const {id, token} = input;

        if (!id || !token) {
            throw new EmptyField();
        }

        const payload = this.authenticator.getTokenPayload(token);

        if (!payload) {
            throw new InvalidToken();
        }

        const ticket = await this.showDatabase.findTicketById(id);

        if (!ticket) {
            throw new InvalidTicket();
        }

        if (ticket.user_id !== payload.id) {
            throw new TIcketSellAuth();
        }

        await this.showDatabase.sellTicket(id);

        return "Ticket sold";
    }
}