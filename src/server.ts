import express from 'express';
import 'reflect-metadata';
import './database'

const app = express();

app.listen(3333, () => console.log('Server is running 3333'));