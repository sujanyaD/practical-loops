//console.log("practical loops");

// Part 1: Fizz Buzz

for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
        console.log("fizz")
    }

    if (i % 5 == 0) {
        console.log("buzz")
    }
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("fizz buzz")
    }
    if (i % 3 != 0 && i % 5 != 0) {
        console.log(i)
    }
}
console.log("=======================================");

// Prime Time

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i < num; i++) {
        if (num % i == 0)
            return false;
    }
    return true;
}
// let n = 11;
// for (let j = n; j < j + 1; j++) {

//     if (isPrime(j + 1)) {
//         console.log(j + 1 + " is prime");
//         break;
//     }
// }
let n = 10;
let j = n;
while (j < j + 1) {

    if (isPrime(j + 1)) {
        console.log(j + 1 + " is prime");
        break;
    }
    j++;
}
console.log("================================================")

// Feeling Loopy

let id = ["42", "57", "63", "98"];
let name = ["Bruce", "Bob", "Blaine", "Bill"];
let Occupation = ["Knight", "Fry Cook", "Quiz Master", "Doctors Assistant"];
let age = ["41", "19", "58", "26"];
let str4 = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";


let cell1 = "";
let data = [];

for (let i=0; i<str4.length;i++) {
    if (str4[i] != ',' && str4[i]!='\n') {
        cell1 = cell1 + str4[i];
        if(i==str4.length-1){
            data.push(cell1);
            break;
        }
    }
    else if (str4[i] == '\n')
    {
        data.push(cell1);
        cell1 = "";
    }
    else
    {
        data.push(cell1);
        cell1 = "";
    }

}
console.log(data[0],data[1],data[2],data[3]);
console.log(data[4],data[5],data[6],data[7]);
console.log(data[8],data[9],data[10],data[11]);
console.log(data[12],data[13],data[14],data[15]);
console.log(data[16],data[17],data[18],data[19]);










