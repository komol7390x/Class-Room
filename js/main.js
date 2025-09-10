function returnVowel(...str) {
    let unli = "aeuioAEUIO"
    unli = unli.split("")
    // console.log(unli);
    let text = []
    for (let i = 0; i < str.length; i++) {
        let soz = []
        for (let k = 0; k < str[i].length; k++) {
            a = str[i][k]
            if (unli.includes(a)) {
                soz.push(a)
            }
        }
        text.push(soz.join(""))
    }
    return text
}
console.log(returnVowel("AssualumuI", "aleykom", "Najot ta'lim"));

