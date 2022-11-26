const superman = {
    name : 'clark',
    age : 30,
}
superman.hairColor = 'black';
superman['hobby'] ='football';
console.log(superman)
delete superman.age;
console.log(superman)

function makeObject(name,age){
    return{
        name,//name : name,
        age,//age : age,
        hobby : 'football'
    }
}

const Mike = makeObject("Mike",30);
console.log(Mike);

console.log('age'in Mike) // ture
console.log('birthday' in Mike) // false
//위에는 실용적이지 않음

function isAdult(user){
    if(!('age' in user) || // user에 age가 없거나
     user.age <20){ // 20살 미만이거나
        return false;
    } 
    return true;
}

const Mike1 = {
    name : 'Mike',
    age : 30
};

const Jane = {
    name : 'jane'
};

console.log(isAdult(Mike1)) // true
console.log(isAdult(Jane)) // false

//객체 for .. in
const Mike3 = {
    name : "Mike",
    age :30
}

for (x in Mike){
    console.log(Mike[x]) // Mike가 가지고 있는 key 값 출력
}

let boy = {
    name : "mike",
    showName:function(){
        console.log(boy.name)
    }
};

let man = boy;
man.showName(); // mike
man.name = "tom"
console.log(boy.name ) // tom
boy = null;
man.showName(); // error 객체가 null이 됐기때문

//위에 showName 함수를 this.name 으로 바꾼다면
man.showName(); // mike


 