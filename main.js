import express from 'express';

const app = express();

app.get('/server', (request, response) => {
    // 设置响应
    response.setHeader('Access-Control-Allow-Origin', '*'); // 设置允许跨域
    response.send("HELLO AJAX");
})

app.post('/server', (request, response) => {
    // 设置响应
    response.setHeader('Access-Control-Allow-Origin', '*'); // 设置允许跨域
    response.send("HELLO AJAX POST");
})

// 获取接收任何类型的请求
app.all('/server', (request, response) => {
    // 设置响应
    response.setHeader('Access-Control-Allow-Origin', '*'); // 设置允许跨域
    response.setHeader('Access-Control-Allow-Headers', '*'); // 允许前端自定义头
    response.send("HELLO AJAX POST");
})

app.all('/json-server', (request, response) => {
    // 设置响应
    response.setHeader('Access-Control-Allow-Origin', '*'); // 设置允许跨域
    response.setHeader('Access-Control-Allow-Headers', '*'); // 允许前端自定义头
    const data = {
        name: "123"
    }
    let str = JSON.stringify(data)
    response.send(str);
})

app.listen(8000, () => {
    console.log("服务已经启动，8000 端口监听中...");
})
