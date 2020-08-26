const ClientService = require('./services/ClientService');

const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');

const app = express(feathers());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.configure(express.rest());
app.use('/clients', new ClientService());
app.use(express.errorHandler());

app.listen(8000).on('listening', () =>
  console.log('Feathers server listening on localhost:8000')
);