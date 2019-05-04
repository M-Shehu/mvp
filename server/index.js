const express = require('express');
const cors = require('cors');
const path = require('path');
const graphqlHTTP = require('express-graphql');
const morgan = require('morgan');
var { buildSchema } = require('graphql');

const app = express();
const port = process.env.PORT || 3456;

app.use(cors());
app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/../public/dist')));

app.listen(port, () => {
  console.log(`Server is now listening on port: ${port}`);
});