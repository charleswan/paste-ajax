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

app.get('/home', (request, response)=>{
    //响应一个页面
    response.sendFile(__dirname + '/index.html');
});

app.get('/data', (request, response)=>{
    //防止出现跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    response.send('用户数据');
});

//jsonp服务
app.all('/jsonp-server',(request, response) => {
    // response.send('console.log("hello jsonp")');
    const data = {
        name: '尚硅谷atguigu'
    };
    //将数据转化为字符串
    let str = JSON.stringify(data);
    //返回结果
    response.end(`handle(${str})`);
});

//用户名检测是否存在
app.all('/check',(request, response) => {
    // response.send('console.log("hello jsonp")');
    const data = {
        exist: 1,
        msg: '用户名已经存在'
    };
    //将数据转化为字符串
    let str = JSON.stringify(data);
    //返回结果
    response.end(`handle(${str})`);
});

app.all('/jquery-jsonp',(request, response) => {
    // response.send('console.log("hello jsonp")');
    const data = {
        name:'尚硅谷',
        city: ['北京','上海','深圳']
    };
    //将数据转化为字符串
    let str = JSON.stringify(data);
    //接收 callback 参数
    let cb = request.query.callback;

    //返回结果
    response.end(`${cb}(${str})`);
});

app.all('/cors-server', (request, response)=>{
    //设置响应头
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Headers", '*');
    response.setHeader("Access-Control-Allow-Method", '*');
    // response.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
    response.send('hello CORS');
});

app.listen(8000, () => {
    console.log("服务已经启动，8000 端口监听中...");
})
