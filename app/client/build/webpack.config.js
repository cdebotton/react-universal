import { NODE_ENV, paths } from '../config';

const configFile = paths.build('webpack/%s.config', NODE_ENV);

export default require(configFile).default;
