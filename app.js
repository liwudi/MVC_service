const Koa = require("koa");

const app = new Koa();

var cors = require('koa-cors');

app.use(cors());


const controller = require('./controller.js');

const bodyParser = require("koa-bodyparser");
app.use(bodyParser());
app.use(controller());
app.listen(3000);

console.log(`the port 3000 is opened!`);

