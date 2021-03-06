const Hapi = require('hapi');
const api = require('./src/yahooApi');

function runServer(){
  const server = new Hapi.Server();

  let data = {};
  let counter = 0;

  // api.fetchAuthData();
  api.requestAuthData();

  setInterval(function(){
    counter = counter + 1;
    data = api.getYahooData();
  }, 2000)

  server.connection({
    host: 'localhost',
    port: 3000
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
      reply({
        timer: counter + ' seconds',
        pek: data
      });
    }
  })

  server.start((err) => {
    if(err) throw err;
    console.log('Server running at:', server.info.uri);
  });
}

runServer();