//엄격 모드 적용 : 초창기 자바 스크립트의 단범을 보완하는 설정
//(좀 더 엄격한 검증 적용!)
'use strict';
//1.변수,열린 상자 만들기
let openBox = "망고";
console.log(openBox);

openBox = "바둑이";
console.log(openBox);

//2.이름이 같은 변수, 생성 불가!
//let openBox="도넛츠";
openBox = "도넛츠";
console.log(openBox);

//3. 상수, 잠긴 상자 만들기!
const cookieBox = "쿠키";
console.log(cookieBox);

cookieBox = "과일";
