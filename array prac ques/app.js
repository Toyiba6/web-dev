//question: Remove all occurrences of a specific number from an array.
let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 3;
for(let i =0; i< arr.length; i++){
    if(arr[i]==num){
        arr.splice(i,1);
    }
}
console.log(arr);


//question: Count the number of digits in a given number.
let number = 287152;
let count =0;
let copy = number;
while(copy>0){
    count++;
    copy = Math.floor(copy/10);
}
console.log(count);


//question: Calculate the sum of digits of a given number.
let nums = 287152;
let sum =0;
let temp = nums;
while(temp>0){
    let digit = temp % 10;
    sum += digit;
    temp = Math.floor(temp/10);
}
console.log(sum);


//question: Calculate the factorial of a given number.
let n = 7;
let factorial =1;
for(let i=1; i<=n; i++){
    factorial *=i;  
}
console.log(`factorial of ${n} is ${factorial}`);


//question: Find the largest number in an array.
let array = [1,2,3,4,5,9,33,21,11,6];
let largest = 0;
for(let i=0;i<array.length;i++){
    if(array[i]> largest){
        largest = array[i];
    }
}
console.log(`largest number in array is ${largest}`);