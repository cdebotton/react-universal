import webpack from 'webpack';
import config from './webpack/server.config';

const compiler = webpack(config);

export default compiler;
