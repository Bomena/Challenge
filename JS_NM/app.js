// Object
const player = {
    name: "spring",
    points: 10,
    fat: false,
}
//console.log(player);
//console.log(player.name);

// Change name -> 내부에 있는 것을 바꿈. 객체 자체를 바꾸는 것이 아님
player.name = "bom";
//console.log(player.name);

// Append lastName
player.lastName = "potato";
//console.log(player);

function sayHello(nameOfPerson, age) {
    console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}
//sayHello("spring", 22);
//sayHello("bom", 22);

function plus(a, b) {
    console.log(a + b);
}
//plus(3, 2);

function divide(a, b) {
    console.log(a / b);
}
//divide(4, 2);
