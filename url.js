//allows you to access the different parts of the url

const url = require('url');

const address ="http://localhost:4000/default.html?year=2020&month=june";

const parsedUrl = url.parse(address, true);

console.log(parsedUrl.host);
console.log(parsedUrl.pathname);
console.log(parsedUrl.query);
