import app from './app'

const PORT = process.env.PORT || '8080';
const HOST = process.env.HOST || '0.0.0.0';

export function start() {
  app.listen(PORT, HOST);
}
