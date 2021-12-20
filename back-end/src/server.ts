import express from 'express';
import 'reflect-metadata';
import createConnection from './database';

const app = express();

createConnection().then(() => {
    console.log('Conexão com o banco de dados efetuada com sucesso')
    app.listen(3333, () => console.log('Server is running 3333'));
})
.catch(e => console.log('Falha de conexão com o banco de dados -> ',e.message || e))