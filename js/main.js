function login(log, users) {
    let getPass = users.get(log.userName)
    if (getPass.count === 3) {
        return `Urinishlar soni 3 ta dan oshdi`;
    }
    if (!users.has(log.userName)) {
        return `${log.userName} foydalanuvchi yo'q`;
    }
    if (getPass.password !== log.pas) {
        getPass.count += 1;
        return "Parol yoki Username xato";
    }
    getPass.count = 0;
    return `${log.userName} tizimga kirdi`
}
function register(users,allusers) {
    if (allusers.has(users.userName)) {
        return `${users.userName} foydalanuvchi bor!`
    }
    allusers.set(users.userName, users)
    return `${users.userName} foydalanuvchi ro'yhatdan o'tdi!`
}
function findAll(users){
    console.log(users);
}

let auth = new Map()
let obj3 = {
    id: 1,
    fullName: "Sharipov Alisher",
    userName:"Alisher",
    password: "12345678",
    group:"N22"
}
let obj1 = {
    id: 1,
    fullName: "Solihov Alisher",
    userName: "Adham",
    password: "qwerty",
    group: "N22"
}
let obj2 = {
    id: 1,
    fullName: "Ergashiv Xurshid",
    userName: "Alisher",
    password: "qwerty1111",
    group: "N22",
    count:0,
}
let log1 = {
    userName: "Alisher",
    pas:"12345678"
}
let log2 = {
    userName: "Yoldosh",
    pas: "12345678"
}
let log3 = {
    userName: "Alisher",
    pas: "qwerty1111"
}
// console.log(register(obj1, auth));
console.log(register(obj2, auth));
// console.log(register(obj3, auth));
// console.log(login(log1, auth));
// console.log(login(log2, auth));
console.log(login(log3, auth));
// findAll(auth);
