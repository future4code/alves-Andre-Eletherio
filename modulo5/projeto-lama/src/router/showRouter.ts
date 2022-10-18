import { Router } from "express";
import { ShowBusiness } from "../business/ShowBusiness";
import { ShowController } from "../controller/ShowController";
import { ShowDatabase } from "../database/ShowDatabase";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export const showRouter = Router();

const showController = new ShowController(
    new ShowBusiness(
        new ShowDatabase(),
        new Authenticator(),
        new IdGenerator()
    )
);

showRouter.post("/create", showController.create);
showRouter.get("/", showController.get);
showRouter.post("/purchase/:show_id", showController.purchase);
showRouter.delete("/delete/:ticket_id", showController.deleteTicket);