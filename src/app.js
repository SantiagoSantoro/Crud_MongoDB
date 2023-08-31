import express from "express";
import usersRouter from './routes/users.js';
import mongoose from 'mongoose';

const app = express();

const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', usersRouter);

mongoose.connect('mongodb+srv://santiagosantoro:Milo2017@clustercursobackend.mg6v7fe.mongodb.net/');


const server = app.listen(PORT, () => {
    console.log(`Servidor ON en puerto ${PORT}`)
});
