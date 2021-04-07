import request from './rpc/index';
import utils from './utils';
import { HelloRequest } from './rpc/hello_pb';

utils();

console.log('[不触发异常] 2、不使用 .deserializeBinary 方法');

setTimeout(() => {
    const req = new HelloRequest();
    req.setName('AlienZHOU');
    request(req).then(console.log).catch(console.log);
}, 1000);