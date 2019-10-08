import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import express from 'express';
import next from 'next';
import responseTime from 'response-time';
import helmet from 'helmet';
import tracer from 'dd-trace';

import pkgJson from '../package.json';

import routes from './routes';

const { NODE_ENV, PORT = 3000, VERSION = pkgJson.version } = process.env;

if (NODE_ENV !== 'development') {
  tracer.init();
}

const twentyFourHoursInSeconds = 86400;
const server = express();
const app = next({ dev: NODE_ENV !== 'production', dir: __dirname });
const handle = routes.getRequestHandler(app);

server.use(bodyParser.json());
server.use(cookieParser());
server.disable('x-powered-by');
server.use(helmet.hsts({ maxAge: twentyFourHoursInSeconds }));
server.use(helmet.ieNoOpen());
server.use(helmet.noSniff());
server.use(helmet.xssFilter());
server.use(helmet.dnsPrefetchControl());
server.use(helmet.frameguard({ action: 'deny' }));
server.use(helmet.referrerPolicy({ policy: 'no-referrer-when-downgrade' }));
server.use(
  helmet.contentSecurityPolicy({
    directives: {
      blockAllMixedContent: true,
      upgradeInsecureRequests: false, // Warning: Demo only, should be true.
    },
  })
);
server.use(responseTime());
server.get('/ping', (req, res) => res.send('OK!'));
server.get('/version', (req, res) => res.send(VERSION));

server.get('/robots.txt', (req, res) =>
  res.status(200).sendFile('robots.txt', {
    root: `${__dirname}/static/`,
    headers: {
      'Content-Type': 'text/plain;charset=UTF-8',
    },
  })
);

server.get('*', handle);

app.prepare().then(() => server.listen(PORT));
