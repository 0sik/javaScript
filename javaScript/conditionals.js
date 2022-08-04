// JavaScript 관련 구글링
// 👉 site:developer.mozilla.org {연관_키워드}
'use strict';
// 1. if 문, 하거나 말거나!
// - 조건식이 참(true)일 때 동작을 수행
// - 조건식이 거짓(false)인 경우, 수행하지 않음
// 상황 설정:
// - 소개팅 상대가 맘에들면, 라떼를 주문하기로!
function orderBeverage(isAttractive) {
    if (isAttractive === "yes") {
        console.log("라떼 주세요💕");
    }
}
orderBeverage("yes");
// 2. else 문, 거짓이라면?
// - if 문의 조건식이 거짓인 경우, 수행할 구문
// - if 문과 함께 연결되어 동작 함
// 상황 설정:
// - 소개팅 상대가 맘에들면, 라떼를 주문하기로!
// - 맘에 들지 않으면, 아이스 아메리카노..
function orderBeverage(isAttractive) {
    if (isAttractive === "yes") {
        console.log("라떼 주세요💕");
    } else {
        console.log("아이스 아메리카노, 얼음 팍팍..🧊");
    }
}
orderBeverage("yes");
orderBeverage("no")
// 3. else-if 문, 추가 조건을 처리하려면?
// - else 문에 if 문을 연결하면 됨
// - 이전 조건이 거짓인 경우, 새로운 조건을 처리하는 방식
// 상황 설정:
// - 소개팅 상대가 맘에들면, 라떼를 주문하기로!
// - 아직 모르겠다면, 레몬 에이드..!
// - 맘에 들지 않으면, 아이스 아메리카노..
function orderBeverage(isAttractive) {
    if (isAttractive === "yes") {
        console.log("라떼 주세요💕");
    } else if (isAttractive === "not yet") {
        console.log("레몬 에이드 주세요🍋");
    } else {
        console.log("아이스 아메리카노, 얼음 팍팍..🧊");
    }
}
orderBeverage("yes");
orderBeverage("no")
orderBeverage("not yet");
// 4. 비교 연산자, 두 값을 비교하여 참 또는 거짓을 반환!
// 👉 === (같은가?),!== (다른가?),
// 👉 > (큰가?), >= (크거나 같은가?),
// 👉 < (작은가?), <= (작거나 같은가?)
// 상황 설정: 나이에 따른 버스 요금 계산하기
function calculateBusFare(age = 20) { // 나이(기본값: 20)
    // 요금(지역변수)
    let fare = 0;
    // 나이에 따른 요금 계산
    if (age > 18) {
        fare = 1200; // 일반: 1200원
    } else if (age > 12) {
        fare = 720; // 청소년: 720원
    } else {
        fare = 450; // 어린이: 450원
    }
    // 값 반환
    return fare;
}
console.log(`20세 => ${calculateBusFare()} 원`);
console.log(`17세 => ${calculateBusFare(17)} 원`);
console.log(`11세 => ${calculateBusFare(11)} 원`);
// 5. 논리 연산자, 풍부한 조건식 만들기!
// - AND(&&): 두 조건이 모두 참이면, 참(true)
// - OR(||): 둘 중 하나라도 참이면, 참(true)
// - NOT(!): 참을 거짓으로, 거짓을 참으로 변경
// 상황 설정: 소개팅 어플, 등급 계산
// - 평가 속성: 외모(0~100), 대화(0~100), 재력(0~100)
// - 결과 등급: S(최상), A(상), B(중), C(하)
function calculateAwesomeTier(looking, talking, rich) {
    // 등급(지역변수) 생성
    let tier = null;
    // 점수에 따른 등급 계산
    if (looking >= 90 && talking >= 90 && rich >= 90) {
        tier = "S"; // 모두 90점 이상
    } else if (rich >= 90 && (looking + talking) >= 160) {
        // 재력이 90점 이상이면서, 외모와 대화 총점이 160 이상
        tier = "A"; 
    } else if (looking > 90 || talking > 90 || rich > 90) {
        tier = "B"; // 적어도 하나가 90점 초과
    } else {
        tier = "C";
    }
    // 값 반환
    return tier;
}
console.log(`${calculateAwesomeTier(92, 90, 94)} 등급`);
console.log(`${calculateAwesomeTier(85, 84, 91)} 등급`);
console.log(`${calculateAwesomeTier(77, 92, 73)} 등급`);
console.log(`${calculateAwesomeTier(80, 88, 79)} 등급`);
// 6. switch 문, 조건이 일치하면 처리하기!
// 상황 설정: 각 월별 계절을 계산
function calculateSeason(month) {
    // 계절(지역변수) 생성
    let season = undefined;
    // 입력 월에 따른 계절 계산
    switch (month) {
        case 3:
        case 4:
        case 5:
            season = "봄";
            break;
        case 6:
        case 7:
        case 8:
            season = "여름";
            break;
        case 9:
        case 10:
        case 11:
            season = "가을";
            break;
        case 12:
        case 1:
        case 2:
            season = "겨울";
            break;
        default:
            season = null;
            break;
    }
    // 값 반환
    return season;
}
console.log(`4월 => ${calculateSeason(4)}`);
console.log(`10월 => ${calculateSeason(10)}`);
console.log(`13월 => ${calculateSeason(13)}`);
// 7. 삼항 연산자, 조건에 따른 결과 반환!
// - 조건식이 참이면 왼쪽, 거짓이면 오른쪽 값을 반환!
// 상황 설정: 운전면허 시험! 80점 이상은 통과, 아니면 실패..
function calcDriverLicense(score) {
    return (score >= 80) ? "👍 PASS" : "😱 FAIL";;
}
console.log(calcDriverLicense(100));
console.log(calcDriverLicense(78));