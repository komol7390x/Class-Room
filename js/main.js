// function add(a, b) {
//     console.log(this);
//     return a + b+this.x+this.y;
// }
// // add(1,2)
// const obj = {
//     x: 12,
//     y:5
// }
// console.log(add.call(obj, 1, 2));

// const person = {
//     firstName: "Ali",
//     lastName:"Valiyev"
// }
// const info = {
//     firstName: "Komol",
//     lastName:"Parpixo'djayev"
// }
// function greet(greeting) {
//     console.log(`${greeting},${this.firstName} ${this.lastName}!`);
// }
// greet.call(person, "Salom")
// greet.call(info,"Godentak")

// const personName = {
//     firstName: "Taylor",
//     lastName:"Micheal"
// }
// function greet(wish, message) {
//     return `${this.lastName},${wish} !\n${message}`
// }
// let res = greet.apply(personName, ["Good morning", "How are you?"])
// console.log(res);

const student1 = {
    name: "Jack",
    garde: "5",
    introduction: function () {
        console.log(`${this.name} studies in grade ${this.garde}.`);
    }
}
const student2 = {
    name: "Jimmy",
    garde:"6"
}
let res = student1.introduction.bind(student2);
console.log(res());

console.log();

