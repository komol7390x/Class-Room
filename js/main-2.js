const map = new Map()
//Setting value
map.set("name", "Alice");
map.set("age", 25);
map.set("isStudent", true);

// Getting value
console.log(map.get("name"));//Alice
console.log(map.get("age"));//25

// Checking existence
console.log(map.has("isStudent"));//true
console.log(map.has("grade"));//false

//Deleting a key
map.delete("age");
console.log(map.has("age"));

//Size of the map
console.log(map.size);//2

//Iterating over MAp
map.forEach((val, key) => {
    console.log(`${key}: ${val}`);
})
// ----------------------------------------------------
const capitals = new Map([
    ["USA", "Washington D.C."],
    ["Canada", "Ottawa"],
    ["UK","London"]
])
console.log("-------------------------");
//Using for ... of with entrise()
for (const [country, capital] of capitals.entries()) {
    console.log(`${country}: ${capital}`);
}
console.log("-------------------------");

//Using for ...of directly on MAp()
for (const [country, capital] of capitals) {
    console.log(`${country}: ${capital}`);
}
console.log("-------------------------");
//Using forEach()
capitals.forEach((capital, country) => {
    console.log(`${country}: ${capital}`);
})
// ----------------------------------------------------
const set = new Set()

//Adding values
set.add("Banana")
set.add("apple")
set.add("cherry")
set.add("Banana")

//Checking existence
console.log(set.has("Banana"));
console.log(set.has("date"));

//Deleting a value
console.log(set.has("cherry"));
set.delete("cherry")
console.log(set.has("cherry"));

//Size of the set
console.log(set.size);

//Iterating over Set
set.forEach((val) => {
    console.log(val);
})

console.log(set);
// ----------------------------------------------------

