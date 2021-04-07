# 《记一次 Node gRPC 静态生成文件引发的问题排查》配套 Demo

对应文章：

## 安装依赖

```bash
npm i
```
## 运行

### 1、运行异常case

```bash
npm run start:error
```

### 2、运行四种正常case

```bash
npm run start:correct-1
```

```bash
npm run start:correct-2
```

```bash
npm run start:correct-3
```

```bash
npm run start:correct-4
```

## 简单示例

同时 demo 还配套了一个极简版示例。在 `simple-demo` 目录下。

代码创建了如下一个对象：

```javascript
global.exampleObj = {
    name: 'AlienZHOU',
    setName: function (params) {
        global.exampleObj.name = 'Modified';
    },
};
```

预计调用 `.setName` 后会改变该对象的 name 值。

运行正确代码：

```bash
node simple-demo/correct.js

# 输出：Modified
# 符合预期
```

运行错误代码：

```bash
node simple-demo/error.js

# 输出：AlienZHOU
# name 未修改，不符合预期
```
