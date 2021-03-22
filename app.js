// 웹 서버
const express = require('express')
const app = express();

// 포트를 지정해서 server라는 변수에 저장
const server = app.listen(8000, a)
function a(){
    console.log('server has started')
}
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);

app.use('/main',b)

function b(req,res){
    console.log('server has started')
    console.log(req)
    res.render("./b.ejs")
}
