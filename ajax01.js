import express from 'express';

const app = express();

app.get('/server', (request, response) => {
    // 设置响应
    response.setHeader('Access-Control-Allow-Origin','*'); // 设置允许跨域
    response.send("HELLO AJAX");
})


app.listen(8000, ()=> {
    console.log("服务已经启动，8000 端口监听中...");
})
