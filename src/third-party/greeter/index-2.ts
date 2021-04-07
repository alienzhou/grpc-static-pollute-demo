import * as services from '../../rpc/hello_grpc_pb';
import * as grpc from '@grpc/grpc-js';

let client;
export default function request(req) {
    if (!client) {
        client = new services.GreeterClient('localhost:50051', grpc.credentials.createInsecure());
    }
    
    return new Promise((resolve, reject) => {
        client.sayHello(req, function(err, response) {
            if (err) {
                reject(err);
                return;
            }
            resolve(response.getMessage());
        });
    });
}