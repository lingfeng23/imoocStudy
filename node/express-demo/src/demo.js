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
