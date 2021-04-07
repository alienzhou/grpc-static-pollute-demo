#!/usr/bin/env bash

grpc_tools_node_protoc\
    --js_out=import_style=commonjs,binary:src/rpc\
    --grpc_out=grpc_js:src/rpc\
    --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin`\
    hello.proto

grpc_tools_node_protoc\
    --js_out=import_style=commonjs,binary:src/third-party/greeter\
    --grpc_out=grpc_js:src/third-party/greeter\
    --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin`\
    hello.proto

grpc_tools_node_protoc\
    --js_out=import_style=commonjs,binary:server\
    --grpc_out=grpc_js:server\
    --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin`\
    hello.proto