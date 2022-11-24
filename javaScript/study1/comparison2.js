//switch 문
const color = "green";

switch(color){
    case "red" :
        console.log("멈추시오");
        break;
    case "red" :
        console.log("주의");
        break;
    case "red" :
        console.log("이동");
        break;  
    default:
        console.log("잘못된 색상");
        break;  
}

//삼항 연산자

let result = undefined;

if(weight<100){
    result = "ok"
}else{
    result="nope"
}
//이것을 삼항 연산자로 표현하면?
let result2 = (weight<100)?"ok":"nope"