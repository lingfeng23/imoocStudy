
//******************** nodejs 安装************//
// 读取系统的cpu信息
const os = require('os');
const cpu = os.cpus();
console.log(cpu.length);

// 获取内存的信息
const total = os.totalmem();    //bytes
console.log(total / 1024 / 1024 / 1024);  // GB

// 剩余内存
const free = os.freemem();
console.log(free / 1024 / 1024 / 1024);

// web服务
// ajax -> api -> web server
const http = require('http')
const server = http.createServer((req, res) => {
    res.end('hello hello')
})
server.listen(3000, '127.0.0.1', () => {
    console.log("服务启动成功")
})

// 配置 nodemon
// 1.npm install nodemon -D
// 2.修改 package.json
// 3.增加 nodemon.json 配置指定特殊 watch 的文件
// 4.

//***************** express 应用************//
const express = require('express')
// 一个 express 实例
const app = express();

app.use((req, res)=>{
    res.json({
        name:"张三"
    })
})

// http://127.0.0.1:1000/name
/*app.get('/name', (req, res)=>{
    res.send("get send")
})*/
// http://127.0.0.1:1000/name/123
app.get('/name/:age', (req, res)=>{
    let {age} = req.params;
    res.json({
        name:'Bob',
        age
    })
})
app.post('/name', (req, res)=>{
    res.send("post send")
})
app.listen(1000, '127.0.0.1', ()=>{
    console.log("启动能够成功")
})
