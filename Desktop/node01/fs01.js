const fs = require('fs'); // 파일을 다루는 모듈
// 비동기식
fs.readFile('text1.txt', 'utf-8', (err,data) => {   // (err,data) => {     -> 미들웨어 함수
    if (err) {     // err가 발생한다면
            console.log(err)    // err를 띄운다.
    } else {
        console.log(`비동기식으로 읽음 : ${data}`)
    }
})

// 동기식
const text = fs.readFileSync('text1.txt', 'utf-8');
console.log(`동기식으로 읽음 : ${text}`);