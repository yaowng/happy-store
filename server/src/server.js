import Hapi from 'hapi';
import Knex from './knex';
import jwt from 'jsonwebtoken';
import { JWT2Validate } from './jwt2_validate';
import Path from 'path';

// define some constants to make life easier
const DEFAULT_HOST = "localhost";
const DEFAULT_PORT1 = 3000;
const DEFAULT_PORT2 = 3001;
const RADIX = 10;
const PRIVATE_KEY = 'Zc4Rt356LokjMnTuiS9LpofDsAqzXc'

const httpServer = Hapi.server({
	host: process.env.HOST || DEFAULT_HOST,
	port: parseInt(process.env.PORT, RADIX) || DEFAULT_PORT1,
	app: {}
});

const apiServer = Hapi.server({
	host: process.env.HOST || DEFAULT_HOST,
	port: parseInt(process.env.PORT, RADIX) || DEFAULT_PORT2
});

const accounts = { // our "users database"
    9999: {
      id: 9999,
      name: 'Avengers'
    }
};

// Start the server
async function start() {

	try {
		await httpServer.register(require('inert'));
		await apiServer.register(require('hapi-auth-jwt2'));
		// console.log(Path.join(__dirname, 'client/dist/client'));
		// console.log(Path.resolve('./'));
		httpServer.route({
			method: 'GET',
			path: '/{param*}',
			handler: {
				directory: {
					path: Path.join(Path.resolve('./'), 'client/dist/client'),
					index: ['index.html']
				}
			}
		});

		apiServer.auth.strategy('jwt', 'jwt', {
			key: PRIVATE_KEY,
			validate: JWT2Validate,
			verifyOptions: { algorithms: ['HS256'] }
		});
		apiServer.auth.default('jwt');

		apiServer.route([
			{
				method: 'GET', path: '/birds', config: { auth: false },
				handler: (request, h) => {
					const getOperation = Knex('birds').where({ isPublic: true }).select(
						'name', 'species', 'picture_url'
					).then((results) => {
						if (!results || results.length === 0) {
							return ({
								error: true,
								message: 'no public bird found',
								dataCount: 0,
								data: []
							});
						}

						return ({
							error: false,
							message: '',
							dataCount: results.length,
							data: results
						});
					}).catch((err) => {
						return (err);
					});
					return getOperation;
				}
			},
			{
				method: 'GET', path: '/users', config: { auth: false },
				handler: (request, h) => {
					const getOperation = Knex('users').select(
						'username', 'guid'
					).then((results) => {
						if (!results || results.length === 0) {
							return ({
								error: true,
								message: 'no users found',
								dataCount: 0,
								data: []
							});
						}

						return ({
							error: false,
							message: '',
							dataCount: results.length,
							data: results
						});
					}).catch((err) => {
						return (err);
					});
					return getOperation;
				}
			},
			{
				method: 'GET', path: '/auth', config: { auth: false },
				handler: (request, h) => {
					const token = jwt.sign( { guid: 'g04aca6c-b001-3346-bcd7-120b7e87998e', username: 'pika100'}, PRIVATE_KEY, { algorithm: 'HS256', expiresIn: '1h'} );

					return ({ message: 'Authenticated! Here is the token: ' + token });
					// const { username, password } = request.payload;
					// const getOperation = Knex('users').where({ username }).select(
					// 	'guid', 'password'
					// ).then(([user]) => {
					// 	if (!user) {
					// 		return ({
					// 			error: true,
					// 			message: 'the specified user was not found'
					// 		});
					// 	}

					// 	if (user.password == password) {
					// 		const token = jwt.sign({ username, scope: user.guid }, PRIVATE_KEY, { algorithm: 'HS256', expiresIn: '1h' });
					// 		return ({ token, scope: user.guid });
					// 	} else {
					// 		return ('incorrect password');
					// 	}

					// 	return ({
					// 		error: false,
					// 		message: '',
					// 		dataCount: results.length,
					// 		data: results
					// 	});
					// }).catch((err) => {
					// 	return (err);
					// });

					// return getOperation;
				}
			},
			{
				method: 'GET', path: '/', config: { auth: false },
				handler: (request, h) => {
					return({ message: 'Token not required' });
				}
			},
			{
				method: 'GET', path: '/restricted', config: { auth: 'jwt' },
				handler: (request, h) => {
					const response = h.response('You used a Token!');
					response.type('text/plain');
					response.header("Authorization", request.headers.authorization);
					return response;
				}
			}
		]);

		await httpServer.start();
		await apiServer.start();
	}
	catch (err) {
		console.log('Found error:');
		console.log(err);
		process.exit(1);
	}

	console.log('Server running at:', httpServer.info.uri);
	console.log('Server running at:', apiServer.info.uri);
};

start();