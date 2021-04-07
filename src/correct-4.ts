import request from './rpc/index';
import utils from './utils-2';
import { HelloRequest } from './rpc/hello_pb';

utils();

console.log('[不触发异常] 4、引用同一个 _pb.js 文件');

setTimeout(() => {
    const req = HelloRequest.deserializeBinary(Buffer.from('CglBbGllblpIT1U=', 'base64'));
    request(req).then(console.log).catch(console.log);
}, 1000);