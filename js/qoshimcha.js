// // TASK - 1
// function changeNumber(num) {
//     text = []
//     num=String(num)
//     let len=num.length
//     for (let i = 0; i < len; i++){
//         text += num[i]
//         if (len - 1 !== i) {
//             text+="*"
//         }
//     }
//     return text
// }
// console.log(changeNumber(12345));

// example-2
// let number=123456
// let res = number.toString().split("").join("*")
// console.log(res);

// example-3
// let arr = number.toString().split("").map((val, index) => (index != len - 1 ? (val += "*") : (val = val))).join("")
// console.log(arr);
// -----------------------------------------------------
// TASK - 2
// function moveIndex(arr, num) {
//     num = num % arr.length;
//     let end = arr.splice(arr.length - num);
//     son=end.concat(arr)
//     return  son
// }
// console.log(moveIndex([1,2,3,4,5,6,7,8,9,10],13));
// -----------------------------------------------------
// // TASK - 3
// function checkUnli(str) {
//     let unli = "aeuioAEUIO"
//     let text=[]
//     for (let i = 0; i < str.length; i++){
//         if (unli.includes(str[i])) {
//             text.push(str[i])
//         }
//     }
//     return text
// }
// console.log(checkUnli("Hello world"));
// -----------------------------------------------------
// TASK-4
// function checkNum(n, m) {
//     let sum = 0
//     while (n > 0) {
//         let son = n % 10;
//         if (son % m == 0) {
//             sum+=1
//         }
//         n=Math.floor(n/10)
//     }
//     return sum
// }
// console.log(checkNum(24678,2));
// -----------------------------------------------------
// TASK-5
// let arr = [3, 2, 3, 5, 5, 3, 4, 5, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,];
// let obj = {};
// arr.forEach((val) => {
//     obj[val] = obj[val] ? obj[val] + 1 : 1;
// });
// let maxCount = 0;
// let k;
// for (let key in obj) {
//     if (maxCount < obj[key]) {
//         maxCount = obj[key];
//         k = key;
//     }
// }
// console.log(`Max qatnashgan son: ${k}\n${obj[k]} ta qatnashgan`);
// -----------------------------------------------------

