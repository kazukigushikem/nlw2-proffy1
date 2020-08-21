import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json()); //como padrao o express não reconhece o formato JSON
app.use(routes);

app.listen(3333);
