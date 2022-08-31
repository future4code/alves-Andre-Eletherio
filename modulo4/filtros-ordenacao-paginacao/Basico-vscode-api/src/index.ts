import { app } from './app'
import {getAllUsersByName, getAllUsersByType} from "./endpoints/ex1"
import {getAllUsersOrdered} from "../src/endpoints/ex2"
import {getAllUsersPages} from '../src/endpoints/ex3'
import {getAllUsersAll} from '../src/endpoints/ex4'

app.get("/users", getAllUsersByName)

app.get("/users/type", getAllUsersByType)

app.get("/users/order", getAllUsersOrdered)

app.get("/users/pages", getAllUsersPages)

app.get("/users/all", getAllUsersAll)