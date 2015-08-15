import getBabelRelayPlugin from 'babel-relay-plugin';
import {data} from '../../build/schema.json';

export default getBabelRelayPlugin(data);
