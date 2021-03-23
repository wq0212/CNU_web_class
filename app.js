// 웹 서버 구동 파일 express 가져오기 
const express = require('express')
// 웹 서버 구동 파일을 실행 시킴
const app = express();
// 포트를 지정해서 server라는 변수에 저장, 8000번 포트를 열어준다 
const server = app.listen(8000, a)

// 8000포트에서 서버를 연 이후에 실행할 작업 
function a(){
    console.log('server has started')
}

// html 파일을 이용해도 좋지만, 나중을 위해 
// b.html을 b.ejs로 변환
app.set('view engine','ejs'); // ejs를 사용가능하게 하는 명령어 
app.engine('html',require('ejs').renderFile);

// /main 페이지를 접속했을 때의 작업을 b함수에서 정의
app.use('/main',b)

function b(request,response){


    console.log('server has started')
    console.log(request)

    // 사용자에게 텍스트만 보여줄 땐
    // response.send("Welcome")

    // 사용자에게 html(ejs) 파일 보여주기
    response.render("./b.ejs")
}

