import { ShowDatabase } from "../database/ShowDatabase";
import { EmptyField } from "../errors/EmptyField(s)";
import { InvalidBandName } from "../errors/InvalidBandName";
import { ICreateInputDTO, IPurchaseInputDBDTO, IPurchaseInputDTO, IShowsDB, ITicketsDB } from "../model/Show";
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
            throw new Error("Invalid token");
        }

        if (payload.role !== USER_ROLES.ADMIN) {
            throw new Error("Insuficcient permission");
        }

        const dateS = starts_at.split("/");
        if (dateS.length < 3) {
            throw new Error("Invalid Date");
        }

        const date = new Date(`${dateS[2]}/${dateS[1]}/${dateS[0]}`);

        const startDate = new Date("2022/12/05").getTime();
        const endDate = new Date("2022/12/11").getTime();

        if (date.getTime() < startDate || date.getTime() > endDate) {
            throw new Error("Invalid show date");
        }

        const isDateBusy = await this.showDatabase.findByDate(date);

        if (isDateBusy) {
            throw new Error("There already is a show in this day");
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
            throw new Error("Invalid show_id");
        }

        const payload = this.authenticator.getTokenPayload(token);

        if (!payload) {
            throw new Error("Invalid token");
        }

        const showExists = await this.showDatabase.findShowById(show_id);

        if (!showExists) {
            throw new Error("Show id does not exist");
        }

        const inputDB: IPurchaseInputDBDTO = {
            show_id,
            user_id: payload.id
        }

        const userAlreadyBought = await this.showDatabase.findTicketsById(inputDB);

        if (userAlreadyBought) {
            throw new Error("A user can only buy 1 ticket");
        }

        const countTickets = await this.showDatabase.countTickets(show_id);
        const ticketsSold = countTickets["count(*)"];

        if (ticketsSold >= 500) {
            throw new Error("Tickets sold out");
        }

        const id = this.idGenerator.generate();

        const finalInput: ITicketsDB = {
            id,
            show_id,
            user_id: payload.id
        }

        await this.showDatabase.purchase(finalInput);
    }
}