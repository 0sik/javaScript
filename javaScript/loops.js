// JavaScript 관련 구글링
// 👉 site:developer.mozilla.org {연관_키워드}
'use strict';
// 1. for 문
// - 반복 횟수가 명확할 때 좋은 반복문
// - 구성요소는 다음과 같음
// (a) 초기화: 반복 시작시 단 한번 실행
// (b) 조건식: 참이면 반복구문을 수행
// (c) 반복코드: 반복할 명령들
// (d) 갱신: 반복코드의 실행이 끝난 뒤, 수행
// 상황설정: 술래잡기 시작 전, 숫자세기!
function countUpNumbers() {
    console.log("1부터 10까지 세고 시작한다~");
    for (let num = 1; num <= 10; num += 1) {
        console.log(num);
    }
    console.log("찾는다~");
}
countUpNumbers();
// 상황설정: 술래잡기 시작 전, 숫자세기!
function countUpNumbers() {
    console.log("1부터 10까지 세고 시작한다~");
    for (let num = 1; num <= 10; num += 2) {
        console.log(num);
    }
    console.log("찾는다~");
}

countUpNumbers();
// 상황설정: 누리호, 카운트다운!
function countdown() {
    console.log("카운트다운을 시작합니다..");
    for (let count = 5; count >= 0; count -= 1) {
        console.log(count);
    }
    console.log("발사!!");
}
countdown();

// 상황설정: 업다운, 숫자게임! 1~10 중 임의의 정수 찾기!
// - 정답이 입력값보다 크면 UP, 작으면 DOWN 멘트가 나옴
// - q 입력 시, 종료
function playUpdownGame() {
    // 시작 멘트
    console.log("### START ###");
    // 난수 생성(1~10 사이 정수)
    const randIntNum = Math.trunc(Math.random() * 10 + 1); // 1 ~ 10
    // 사용자 입력 받기
    let inputStr = prompt("랜덤 정수 X(1~10)를 맞춰주세요:");
    // 정답 확인
    while (inputStr !== "q") {
        let inputNum = parseInt(inputStr); // "3" => 3
        if (inputNum === randIntNum) { // 정답!
            console.log(`X = ${randIntNum}, 정답입니다 ⭕️`);
            break;
        } else if (inputNum < randIntNum) {
            console.log("UP 👍");
        } else {
            console.log("DOWN 👎");
        }
        // 다음 입력 받기
        inputStr = prompt("랜덤 정수 X(1~10)를 맞춰주세요:");
    }
    // 종료 멘트
    console.log("### END ###");
}
playUpdownGame();

// 4. continue
// - 반복 흐름을 강제로 다음으로 넘김
// 상황설정: 369 게임
// - 숫자에 3,6,9가 들어가면 박수소리 "짝"을 출력
// - 코드 단순화를 위해 1부터 10까지 숫자를 출력
function play369Game() {
    // 시작
    console.log("### START ###");
    // 진행
    for (let i = 1; i <= 10; i += 1) {
        if (i === 3 || i === 6 || i === 9) {
            console.log("짝");
            continue;
        }
        console.log(i);
    }
    // 종료
    console.log("### END ###");
}
play369Game();

// 5. 중첩 반복문(nested loop)
// - 반복문 속에 반복문이 들어올 수 있음
// 상황설정: 구구단, 2~9단 출력하기!
function printDan(dan) {
    for (let j = 1; j <= 9; j += 1) {
        console.log(`${dan} x ${j} = ${dan * j}`);
    }
}
function printGuGuDan() {
    for (let i = 2; i <= 9; i += 1) {
        printDan(i);
    }
}
