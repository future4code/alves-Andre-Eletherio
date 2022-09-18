import { app } from "./app";
import { RecipeController } from "./endpoints/RecipeController";
import { UserController } from "./endpoints/UserController";

const userController = new UserController();

app.post("/signup", userController.signUp);
app.post("/login", userController.login);
app.get("/user/profile", userController.selfInformations);
app.get("/user/:id", userController.userInformation);
app.post("/follow/:followedId", userController.followUser);
app.get("/followeesRecipes", userController.followeesRecipes);

const recipeController = new RecipeController();
app.post("/recipe", recipeController.createRecipe);
app.get("/recipe/:id", recipeController.recipeById);