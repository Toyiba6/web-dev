// Write a function that prints the lines of a poem to the console.
function poem(){
    console.log("Twinkle, twinkle, little star,");
    console.log("How I wonder what you are!");
    console.log("Up above the world so high,");
    console.log("Like a diamond in the sky.");
}
poem();


// Write a function that simulates rolling a six-sided dice and prints the result to the console. Call the function multiple times to see different results.
function rollDice(){
    let random= Math.floor(Math.random() * 6) + 1;
    console.log(random);
}
rollDice();
rollDice();
rollDice();
rollDice();


// Write a function that takes three numbers as parameters and prints their average to the console. Call the function with different sets of numbers.
function avg(a,b,c){
    let avg = (a+b+c)/3;
    console.log(avg);
}
avg(3,4,5);
avg(10,20,30);
avg(7,14,21);


// Write a function that takes a number as a parameter and prints the multiplication table for that number up to 10. Call the function with different numbers.
function table(num){
    for( let i=1; i<=10; i++){
        console.log(`${num} x ${i} = ${num*i}`);
    }
}
table(3);
table(5);

// Write a function that takes a number n as a parameter and returns the sum of all numbers from 1 to n. Call the function and print the result to the console.
function sumofN(n){
    let sum=0;
    for(let i=1; i<=n; i++){
        sum = sum+i;
    }
    return sum;
}
console.log(sumofN(5)); // 15

// Write a function that takes an array of strings as a parameter and returns a single string that is the concatenation of all the strings in the array. Call the function and print the result to the console.
let str =["apple", "banana", "cherry", "date", "elderberry"];
function concat(str){
let result ="";
for (let i=0; i<str.length; i++){
    result += str[i];
}
return result;
}
console.log(concat(str));