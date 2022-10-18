export class Show {
    private id: string;
    private band: string;
    private startsAt: Date;
    private tickets: number;
    constructor(id: string, band: string, startsAt: Date, tickets: number){
        this.id = id;
        this.band = band;
        this.startsAt = startsAt;
        this.tickets = tickets;
    }

    public getId = (): string => {
        return this.id;
    }
    public getBand = (): string => {
        return this.band;
    }
    public getStartsAt = (): Date => {
        return this.startsAt;
    }
    public getTickets = (): number => {
        return this.tickets;
    }
}

export interface IShowsDB {
    id: string,
    band: string,
    starts_at: Date
}

export interface ICreateInputDTO {
    band: string,
    starts_at: string
    token: string
}

export interface ITicketsDB {
    id: string,
    show_id: string,
    user_id: string
}

export interface IPurchaseInputDTO {
    show_id: string,
    token: string
}

export interface IPurchaseInputDBDTO {
    show_id: string,
    user_id: string
}

export interface IDeleteTicketInputDTO {
    id: string,
    token: string
}

export interface IShowsWithTickets {
    id: string,
    band: string,
    starts_at: Date,
    ticketsAvaiable?: number
}