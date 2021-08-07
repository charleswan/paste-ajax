import express from 'express';

const app = express();

app.get('/server', (request, response) => {
    // 设置响应
    response.setHeader('Access-Control-Allow-Origin', '*'); // 设置允许跨域
    response.send("HELLO AJAX");
})

app.get('/ie', (request, response) => {
    // 设置响应
    response.setHeader('Access-Control-Allow-Origin', '*'); // 设置允许跨域
    response.send("HELLO IE3");
})

app.all('/delay', (request, response) => {
    // 延时响应
    response.setHeader('Access-Control-Allow-Origin', '*'); // 设置允许跨域
    response.setHeader('Access-Control-Allow-Headers', '*');
    setTimeout(() => {
        response.send('延时响应')
    }, 3000)
    // response.send("HELLO timeout");
})

app.all('/jquery', (request, response) => {
    // 延时响应
    response.setHeader('Access-Control-Allow-Origin', '*'); // 设置允许跨域
    response.setHeader('Access-Control-Allow-Headers', '*');
    const data = {name:"123"}
    response.send(JSON.stringify(data));
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
        name: "1234"
    }
    let str = JSON.stringify(data)
    response.send(str);
})

//axios
app.all('/axios',(request,response)=>{
    //设置响应头
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    const data = {name:'张三'};
    response.send(JSON.stringify(data));
});

//fetch
app.all('/fetch',(request,response)=>{
    //设置响应头
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    const data = {name:'张三'};
    response.send(JSON.stringify(data));
});

app.listen(8000, () => {
    console.log("服务已经启动，8000 端口监听中...");
})
