import request from './rpc/index';
import utils from './utils';
import { HelloRequest } from './rpc/hello_pb';

utils();

console.log('会触发异常');

setTimeout(() => {
    const req = HelloRequest.deserializeBinary(Buffer.from('CglBbGllblpIT1U=', 'base64'));
    request(req).then(console.log).catch(console.log);
}, 1000);