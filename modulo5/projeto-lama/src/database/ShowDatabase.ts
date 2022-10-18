import { IPurchaseInputDBDTO, IShowsDB, ITicketsDB } from "../model/Show";
import { BaseDatabase } from "./BaseDatabase";

export class ShowDatabase extends BaseDatabase{
    public static TABLE_SHOWS = "lama_shows";
    public static TABLE_TICKETS = "lama_tickets";

    public findByDate = async (starts_at: Date): Promise<IShowsDB | undefined> => {
        const showDB: IShowsDB[] = await BaseDatabase
            .connection(ShowDatabase.TABLE_SHOWS)
            .select()
            .where({starts_at})
        return showDB[0];
    }

    public create = async (show: IShowsDB) => {
        await BaseDatabase
            .connection(ShowDatabase.TABLE_SHOWS)
            .insert(show)
    }
    
    public get = async () => {
        const shows: IShowsDB[] = await BaseDatabase
                .connection(ShowDatabase.TABLE_SHOWS)
                .select()

        return shows;
    }

    public findShowById = async (id: string): Promise<IShowsDB | undefined> => {
        const show: IShowsDB[] = await BaseDatabase
                .connection(ShowDatabase.TABLE_SHOWS)
                .select()
                .where({id})
        return show[0];
    }

    public findTicketsByShowAndUser = async (input: IPurchaseInputDBDTO): Promise<ITicketsDB | undefined> => {
        const {show_id, user_id} = input;
        const user: ITicketsDB[] = await BaseDatabase
                .connection(ShowDatabase.TABLE_TICKETS)
                .select()
                .where({show_id})
                .andWhere({user_id})
        return user[0];
    }

    public countTickets = async (show_id: string) => {
        const ticketsSold = await BaseDatabase
                .connection(ShowDatabase.TABLE_TICKETS)
                .count()
                .where({show_id})
        return ticketsSold[0];
    }

    public purchase = async (input: ITicketsDB) => {
        await BaseDatabase
            .connection(ShowDatabase.TABLE_TICKETS)
            .insert(input);
    }

    public findTicketById = async (id: string): Promise<ITicketsDB | undefined> => {
        const ticket: ITicketsDB[] = await BaseDatabase
                .connection(ShowDatabase.TABLE_TICKETS)
                .select()
                .where({id})
        return ticket[0];
    }

    public sellTicket = async (id: string) => {
        await BaseDatabase
            .connection(ShowDatabase.TABLE_TICKETS)
            .delete()
            .where({id})
    }

}