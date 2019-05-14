'use strict'
const http=require ('http');
const router = require ('./router/router');
const modelPag1=require('./Data/data.json') //agregado
const search = require ('./search');

http.createServer(router).listen(3000);

