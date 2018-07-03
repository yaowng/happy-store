import Hapi from 'hapi';

// define some constants to make life easier
const DEFAULT_HOST = "localhost";
const DEFAULT_PORT1 = 3000;
const DEFAULT_PORT2 = 3001;
const RADIX = 10;

const httpServer = Hapi.server({
    host: process.env.HOST || DEFAULT_HOST, 
    port: parseInt(process.env.PORT, RADIX) || DEFAULT_PORT1,
    app: {}
  });

const apiServer = Hapi.server({
    host: process.env.HOST || DEFAULT_HOST, 
    port: parseInt(process.env.PORT, RADIX) || DEFAULT_PORT2
});

// Add the route
apiServer.route({
    method:'GET',
    path:'/hello',
    handler: (request, reply) => {
        return'hello world';
    }
});

// Start the server
async function start() {

    try {
        await httpServer.start();
        await apiServer.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at:', httpServer.info.uri);
    console.log('Server running at:', apiServer.info.uri);
};

start();