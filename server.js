const request = require('request');
const cheerio = require('cheerio');

let ipAddresses = [];
let portNumbers = [];

// https://zenscrape.com/how-to-build-a-simple-proxy-rotator-in-node-js/

request('https://sslproxies.org/', (error, response, html) => {
  if (!error && response.statusCode === 200) {
    const $ = cheerio.load(html);

    $("td:nth-child(1)").each(function(index, value) {
      ipAddresses[index] = $(this).text();
    });

    $("td:nth-child(2)").each(function(index, value) {
      portNumbers[index] = $(this).text();
    });
  } else {
    console.log('Error loading proxy, please try again');
  }

  ipAddresses.join(', ');
  portNumbers.join(', ');

  /*console.log('IP Addresses: ', ipAddresses);
  console.log('Port Numbers: ', portNumbers);*/
  
  const randomNumber = Math.floor(Math.random() * 100);
  
  console.log(ipAddresses[randomNumber]);
  console.log(portNumbers[randomNumber]);
});
