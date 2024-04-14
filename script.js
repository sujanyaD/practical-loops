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
let n= 11;
for (let j = n; j < j+1 ; j++) {

    if (isPrime(j+1)){
        console.log(j+1 + " is prime");
        break;
    }
        
}









