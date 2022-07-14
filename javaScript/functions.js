'use strict';

//선언부
function sayHi(username){
    console.log(`안녕하세요,${username}입니다`);
    return undefined; // return 생략하면 ? ==> undefined를 자동 반환
}

//호출부
sayHi("박");
sayHi("영");
sayHi("식");

//스코프 : 변수의 활동 범위
//1.프로그램은 실행 흐름에 따라 변수를 관리함
//함수 호출 -> 파라미터와 지역변수를 만듦
//함수 종료 -> 파라미터와 지역변수를 제거
function changeParameterX(x){
    x= x+3;
    console.log(`x=${x}`);
}

changeParameterX(30);
console.log(x);//error

//이름이 같지만 스코프가 다른 경우.
function changeZ(n){
    let z = n;
    console.log(`local z =${z}`);
}
let z=7;
console.log(`global z = ${z}`); //7
changeZ(3); //3
console.log(`global z =${z}`); //7
