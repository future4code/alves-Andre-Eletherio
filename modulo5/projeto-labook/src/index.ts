import express from 'express'
import cors from 'cors'
import { userRouter } from './router/userRouter'
import { postRouter } from './router/postRouter';

const app = express();
app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 3003, ()=> {
    console.log(`Server is running in port:${process.env.PORT || 3003}`);
})

app.use("/users", userRouter);
app.use("/posts", postRouter);