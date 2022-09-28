import { RecipeModel } from "../model/RecipeModel";
import { BaseDatabase } from "./BaseDatabase";

export class RecipeData extends BaseDatabase {

    public create = async (recipe: RecipeModel) => {
        try {
            await BaseDatabase.connection("recipes").insert(
                {
                    title: recipe.getTitle(),
                    description: recipe.getDescription(),
                    preparation_mode: recipe.getPrepMode(),
                    user_id: recipe.getUserId()
                });
        } catch (error: any) {
            throw new Error(error.sql || error.message);
        }
    }

    public getById = async (id: number) => {
        try {
            const [recipe] = await BaseDatabase.connection.raw(`
                SELECT * FROM recipes WHERE id = ${id}
            `);
            return recipe[0] && RecipeModel.toRecipeModel(recipe[0]);
        } catch (error:any) {
            throw new Error(error.sql || error.message);
        }
    }
}