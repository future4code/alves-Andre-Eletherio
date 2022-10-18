import { Request, Response } from "express";
import { ShowBusiness } from "../business/ShowBusiness";
import { ICreateInputDTO, IDeleteTicketInputDTO, IPurchaseInputDTO } from "../model/Show";

export class ShowController {
    private showBusiness: ShowBusiness;
    constructor(showBusiness: ShowBusiness){
        this.showBusiness = showBusiness;
    }

    public create = async (req: Request, res: Response) => {
        try {
            const input: ICreateInputDTO = {
                band: req.body.band,
                starts_at: req.body.starts_at,
                token: req.headers.authorization as string
            }

            const response = await this.showBusiness.create(input);

            res.status(201).send(response);

        } catch (error) {
            if (error instanceof Error){
                return res.status(res.statusCode).send({message: error.message});
            }
            res.status(500).send({message: "Unexpected error"});
        }
    }

    public get = async (req: Request, res: Response) => {
        try {
            const response = await this.showBusiness.get();

            res.send(response);
        } catch (error) {
            if (error instanceof Error){
                return res.status(res.statusCode).send({message: error.message});
            }
            res.status(500).send({message: "Unexpected error"});
        }
    }

    public purchase = async (req: Request, res: Response) => {
        try {
            const input: IPurchaseInputDTO = {
                show_id: req.params.show_id,
                token: req.headers.authorization as string
            }

            await this.showBusiness.purchase(input);

            res.send(`Ticket bought`);

        } catch (error) {
            if (error instanceof Error){
                return res.status(res.statusCode).send({message: error.message});
            }
            res.status(500).send({message: "Unexpected error"});
        }
    }

    public deleteTicket = async (req: Request, res: Response) => {
        try {
            const input: IDeleteTicketInputDTO = {
                id: req.params.ticket_id,
                token: req.headers.authorization as string
            }

            await this.showBusiness.deleteTicket(input);

            res.send("Ticket sold");

        } catch (error) {
            if (error instanceof Error){
                return res.status(res.statusCode).send({message: error.message});
            }
            res.status(500).send({message: "Unexpected error"});
        }
    }
}