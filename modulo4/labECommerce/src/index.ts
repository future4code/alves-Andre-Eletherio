import { app } from "./app"
import {registerUser} from './endpoints/registerUser'
import { registerProduct } from "./endpoints/registerProduct";
import { searchProducts } from "./endpoints/searchProducts";
import { searchUsers } from "./endpoints/searchUsers"
import { purchases } from "./endpoints/purchases";
import { searchPurchases } from "./endpoints/searchPurchases";

app.post("/users", registerUser);
app.get("/users", searchUsers);
app.post("/products", registerProduct);
app.get("/products", searchProducts);
app.post("/purchases", purchases);
app.get("/users/:user_id/purchases", searchPurchases);