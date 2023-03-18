const events = require('events');

// 이벤트 관련 메소드를 사용할 수 있는 EventEmitter 객체를 만든다.
const eventEmitter = new events.EventEmitter()

const connectHandler = function () {    // 3 실행
    console.log('연결 성공!');
    eventEmitter.emit('data_received'); // data_received 발생   4 실행
}

// connection 이벤트와 connectHandler 핸들러와 연결
eventEmitter.on('connection', connectHandler)   // 2 실행

eventEmitter.on('data_received', () => {    // 5 실행
    console.log('데이터 수신!');
})

eventEmitter.emit('connection'); // connection 발생 1 실행

console.log('프로그램을 종료합니다.');
