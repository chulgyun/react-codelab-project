import express from 'express';
import path from 'path';
import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';
import morgan from 'morgan';
import bodyParser from 'body-parser';

const devPort = 4000;
const app = express();
const port = 3000;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, '../../public')));
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something's Wrong!");
});

app.get('/hello', (req, res) => {
  return res.send('Hello CodeLab');
});

app.listen(port, () => {
  console.log('Express is listening on port ', port);
});

if (process.env.NODE_ENV == 'development') {
  console.log('Server is running on development mode');

  const config = require('../webpack.dev.config');
  const compiler = webpack(config);
  const devServer = new WebpackDevServer(compiler, config.devServer);
  devServer.listen(
    devPort, () => {
      console.log('webpack-dev-server is listening port ', devPort);
    }
  );
}
