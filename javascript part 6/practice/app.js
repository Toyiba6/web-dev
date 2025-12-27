//write an arrow function that returns the square of a number 'n'
const square =(n)=>(n*n);
console.log(square(4));


//write a function that prints "Hello World" 5 times at intervals of 2s each
let id = setInterval(()=>{
    console.log("Hello World");
},2000);
setTimeout(()=>{
    clearInterval(id);
    console.log("cleared interval");
},10000);


//w.a arrow function named arrayAverage that accepts an array of numbers and returns the average of those numbers
const arrayAverage =(arr) => {
   let total=0;
   for(let number of arr){
    total += number;
   }
   return total/arr.length;
};
let arr =[1,2,3,4,5,6];
console.log(arrayAverage(arr));


//w.a arrow function named isEven() that takes a single argument and returns if it is even or not
let num =2;
const isEvenn=(num)=>(num%2==0);
console.log(isEvenn(num));


//what is the output of the following code
const object ={
    message: "hello world!",
    logMessage(){
        console.log(this.message);
    }
};
setTimeout(object.logMessage,1000);


//what is the output of the following code
let length = 4;
function callback(){
    console.log(this.length);
}
const objectt ={
    length:5,
    method(callback){
        callback();
    },

};
objectt.method(callback,1,2);
