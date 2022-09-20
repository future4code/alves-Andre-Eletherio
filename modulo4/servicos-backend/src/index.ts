import { app } from "./app"; 
import {getCep} from './endpoints/getCep'
import { insertUser } from "./endpoints/insertUser";

app.get("/cep", getCep)

app.post("/users", insertUser)