import utils from './utils';
import request from './rpc/index';
import { HelloRequest } from './rpc/hello_pb';

utils();

console.log('[不触发异常] 3、修改模块引入顺序');

setTimeout(() => {
    const req = HelloRequest.deserializeBinary(Buffer.from('CglBbGllblpIT1U=', 'base64'));
    request(req).then(console.log).catch(console.log);
}, 1000);