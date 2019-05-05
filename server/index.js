import renderer from './renderer.js';
import express from 'express';
import cors from 'cors';
import path from  'path';
import graphqlHTTP from  'express-graphql';
import morgan from 'morgan';
import { buildSchema } from 'graphql';

const app = express();
const port = process.env.PORT || 3456;

app.use(cors());
app.use(morgan('tiny'));
app.use(express.static('public/dist'));

app.get('*', (req, res) => {
  const result = renderer(req);
  const context = result.context;
  if(context && context.status !== undefined) {
    res.status(context.status);
  }
  res.send(result.jsx);
});

app.listen(port, () => {
  console.log(`Server is now listening on port: ${port}`);
});