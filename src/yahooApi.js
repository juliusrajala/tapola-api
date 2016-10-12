const fetch = require('node-fetch');
const request = require('request');

const yahooApiKey = process.env.YAHOO_KEY || false;
const yahooApiSecret = process.env.YAHOO_SECRET || false;

const authURL = 'https://api.login.yahoo.com/oauth2/request_auth';
const requestUri = `${authURL}?client_id=${yahooApiKey}`;

function fetchAuthData(){
  fetch(requestUri)
    .then(response => {
      console.log('auth response', response);
    })
}

function requestAuthData(){
  console.log(yahooApiKey, yahooApiSecret)
  console.log('fetch uri:', requestUri);
  request({
    url: requestUri,
    method: 'GET'
/*,    auth: {
      'client_id': yahooApiKey
    }*/
  }, function(err, res){
    if(err){
      console.log('Error', err);
    }
    console.log('request response', res.body);
  })
}

function fetchData(requestKey){
  return({
    [requestKey]: 0,
    a: 1,
    b: 2,
    c: 3
  })
}

function getYahooData(){
  const first = fetchData('first');
  const second = fetchData('second');
  const third = fetchData('third');
  return {
    first,
    second,
    third
  }
}

module.exports = {
  getYahooData,
  fetchAuthData,
  requestAuthData
};