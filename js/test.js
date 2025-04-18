// TASK-1
//1 
function findNumber(array) {
    let res = array.some((val) => val >= 10)
    if (res == true) {
        return `Ichida 10 dan katta son bor: ${res}`
    } else {
        return `Ichida 10 dan katta son yo'q: ${res}`
    }
}
// ----------------------------------------------------------------
//2
function musbatFind(array) {
    let res = array.every((val) => val > 0)
    if (res == true) {
        return `Barchasi musbat: ${res}`
    } else {
        return `Barchasi musbat emas: ${res}`
    }
}
// ----------------------------------------------------------------
//3
function flat(arr, res = []) {
    arr.forEach((val) => {
        if (!Array.isArray(val)) {
            res.push(val)
        } else {
            return flat(val, res)
        }
    });
    return res
}
// ----------------------------------------------------------------
//4
let obj = {}
function groupCatagory(array) {
    let res = array.forEach((val) => {
        obj[val.catagory] = obj[val.catagory] ?
           [...obj[val.catagory],{name:val.name}]:[]    
        
    })
    return obj
}
// ----------------------------------------------------------------
//5
function groupBy(obj,array, type) {
    let res=obj.filter((val)=>)
}
// ----------------------------------------------------------------
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let arr2 = [1, 2, [3], [4, [5, [[6], 7], 8], 9], 10, 11];
const products = [
    { name: "Non", catagory: "Oziq ovqat" },
    { name: "Telefon", catagory: "Texnika" },
    { name: "Sut", catagory: "Oziq ovqat" },
    { name: "Televizor", catagory: "Texnika" },
]
const employee = [
    { age: 25, price: 1200, department: "IT" },
    { age: 32, price: 1500, department: "HR" },
    { age: 29, price: 1700, department: "Finance" },
    { age: 28, price: 1600, department: "IT" },
    { age: 35, price: 1800, department: "HR" }
]
// console.log(findNumber(arr));
// console.log(musbatFind(arr));
// console.log(flat(arr2));
// console.log(groupCatagory(products));
groupBy(employee,"IT","price")


