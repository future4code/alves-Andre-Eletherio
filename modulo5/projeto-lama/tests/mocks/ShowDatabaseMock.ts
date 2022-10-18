import { BaseDatabase } from "../../src/database/BaseDatabase";
import { IPurchaseInputDBDTO, IShowsDB, IShowsWithTickets, ITicketsDB } from "../../src/model/Show";

export class ShowDatabaseMock extends BaseDatabase {
  public static TABLE_SHOWS = "lama_shows";
  public static TABLE_TICKETS = "lama_tickets";

  public findByDate = async (starts_at: Date): Promise<IShowsDB | undefined> => {
    if (starts_at.getTime() == new Date("2022/12/05").getTime()) {
      const show: IShowsDB = {
        id: "001",
        band: "Coldplay",
        starts_at: new Date("2022/12/05")
      }
      return show;
    }
    return undefined;
  }

  public create = async (show: IShowsDB): Promise<void> => { }

  public get = async (): Promise<IShowsWithTickets[]> => {
    const shows: IShowsWithTickets[] = [
      {
        "id": "002",
        "band": "Bruno Mars",
        "starts_at": new Date("2022-12-06T03:00:00.000Z"),
        "ticketsAvaiable": 0
      },
      {
        "id": "001",
        "band": "Coldplay",
        "starts_at": new Date("2022-12-05T03:00:00.000Z"),
        "ticketsAvaiable": 499
      },
    ]

    return shows;
  }

  public findShowById = async (id: string): Promise<IShowsDB | undefined> => {
    if (id === "001") {
      const show: IShowsDB = {
        "id": "001",
        "band": "Coldplay",
        "starts_at": new Date("2022-12-05T03:00:00.000Z")
      }
      return show;
    } else if (id == "002") {
      const show: IShowsDB = {
        "id": "002",
        "band": "Bruno Mars",
        "starts_at": new Date("2022-12-06T03:00:00.000Z")
      }
      return show;
    }

    return undefined;
  }

  public findTicketsByShowAndUser = async (input: IPurchaseInputDBDTO): Promise<ITicketsDB | undefined> => {
    const { show_id, user_id } = input;
    if (show_id == "001" && user_id == "id-normal-mock") {
      const ticket: ITicketsDB = {
        id: "01",
        show_id: "001",
        user_id: "user-id"
      }
      return ticket;
    }
    return undefined;
  }

  public countTickets = async (show_id: string) => {
    if (show_id == "002") {
      return { "count(*)": 500 };
    }
    return { "count(*)": 1 };
  }

  public purchase = async (input: ITicketsDB): Promise<void> => { }

  public findTicketById = async (id: string): Promise<ITicketsDB | undefined> => {
    if (id === "01") {
      const ticket: ITicketsDB = {
        id: "01",
        show_id: "001",
        user_id: "id-admin-mock"
      }
      return ticket;
    }

    return undefined;
  }

  public sellTicket = async (id: string): Promise<void> => { }

}