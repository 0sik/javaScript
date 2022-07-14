'use strict';

//1.대입 연산 : 오른쪽 값을 왼쪽 변수에 대입
const strawberry = 200;
const kiwi =800;
const banana =500;

//2.문자열 덧셈 : 문자열을 연결
console.log("딸기 개당 가격 :"+strawberry+"원");
console.log(`키위 : ${kiwi}원`);

//3. 산술 연산 ,기초 산수
const result1 = strawberry+kiwi;
console.log(result1); 

//4. 연산자 우선쉰위, 뭐를 먼저 연산?
// 구글링 => site:developer.mozilla.org 자바 스크립트 연산 우선순위
console.log(500+2+"3"); //5023 (string)
console.log("3"+500+2); // 35002 (string)