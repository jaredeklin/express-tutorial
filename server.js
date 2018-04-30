const express = require('express');
const app = express();
const myName = require('./myName')

const urlLogger = (request, response, next) => {
  console.log('Request URL', request.url);
  next();
}

const timeLogger = (request, response, next) => {
  console.log('Time', new Date(Date.now()).toString());
  next();
}

app.use(urlLogger, timeLogger);
app.use(express.static('public'));

app.get('/json', (request, response) => {
  response.status(200).json(myName)
});

// app.get('/sunsets', (request, response) => {
//   // console.log(response)
// })

app.listen(3000, () => {
  console.log('Express intro running on localhost:3000');
});

app.use((request, response) => {
  response.status(404).send('you are a very bad boy....');

});


