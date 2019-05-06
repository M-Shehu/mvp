require('es6-promise').polyfill();
require('isomorphic-fetch');
require('dotenv').config();
var firebase = require('firebase/app');
require("firebase/functions");
const bodyParser = require('body-parser');
import fetchPonyfill from 'fetch-ponyfill';
import express from 'express';
import cors from 'cors';
import path from  'path';
import graphqlHTTP from  'express-graphql';
import morgan from 'morgan';
import { buildSchema } from 'graphql';
import renderer from './renderer.js';
import Sprises from '../database/Sprise.js';
import db from '../database/index.js';

const app = express();
app.use( bodyParser.json() ); 
const port = process.env.PORT || 3456;
const {fetch, Request, Response, Headers} = fetchPonyfill('Promise');


const accountSid = process.env.TWILLIO_SID;
const authToken = process.env.TWILLIO_AUTH;
const client = require('twilio')(accountSid, authToken);


app.use(cors());
app.use(morgan('tiny'));

app.get('/spriseBundle.js', (req, res) => res.sendFile('/Users/muhammadshehu/Desktop/SHEHU/Hack_Reactor/MVP/hrsf114-mvp/public/dist/spriseBundle.js'));

app.get('/api/sprisedirect/:id', (req, res) => {
  Sprises.init()
  .then(() => {
    Sprises.findOne({ '_id': req.params.id })
    .then(result => res.send(result));
  })
});

app.post('/sprisedirect', (req, res) => {
  Sprises.init()
  .then(() => {
    Sprises.create(req.body)
    .then((result) => {
      client.messages
      .create({
        body: `You have a surprise waiting for you from a special someone. Follow this link at https://localhost:3456/${result._id} to find it`,
        from: '+18722105558',
        to: `${result.phoneNumber}`
      }).then(message => console.log(message.sid))
      .catch(e => console.log(e));
      res.send(`Successfully sent Sprise to ${result.phoneNumber}`);
      db.close()
    })
    .catch((e) => {
      console.log('\n \n \n THERE WAS AN ERROR IN THE DATABASE: \n \n \n', e.message);
    }).then(() => db.close());
  })
})

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