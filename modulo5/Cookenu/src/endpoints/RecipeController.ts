import { Request, Response } from "express";
import { RecipeData } from "../data/RecipeData";
import { IdNotFound } from "../error/IdNotFound";
import { MissingFields } from "../error/MissingFields";
import { RecipeModel } from "../model/RecipeModel";
import { Authenticator } from "../services/Authenticator";

export class RecipeController {
    public createRecipe = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization;
            const { title, description, preparation_mode } = req.body;

            if (!title || !description || !preparation_mode || !token) {
                throw new MissingFields();
            }

            const authenticator = new Authenticator();
            const user = authenticator.getTokenData(token);

            const recipe = new RecipeModel(title, description, preparation_mode, user.id, new Date());

            const recipeData = new RecipeData();
            await recipeData.create(recipe);

            res.status(201).send("Created");

        } catch (error: any) {
            res.status(res.statusCode || 500).send({ message: error.message });
        }
    }

    public recipeById = async (req: Request, res: Response) => {
        try {
            const id = req.params.id;

            if (!id) {
                throw new IdNotFound();
            }

            const recipeData = new RecipeData();
            const recipe = await recipeData.getById(+id);

            res.send(recipe);

        } catch (error: any) {
            res.status(res.statusCode).send({ message: error.message });
        }
    }
}