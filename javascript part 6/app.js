//arrow fuctions
const sum =(a,b)=> {
    console.log(a+b);
};
sum(3,4);

const cube = (n) => {
    return n*n*n;
};
console.log(cube(2));

const pow=(a,b)=>{
    return a**b;
}
console.log(pow(2,4));


//arrow functions (implicit return)
const mul =(a,b)=> (
    a*b
);
console.log(mul(2,3));


//set timout
console.log("hello");
setTimeout(()=>{
    console.log("Toyiba");
},5000);
console.log("My name is");


//set interval
console.log("hi there!");
let id = setInterval (() =>{
    console.log("apna college");
},2000);
console.log(id);


let id2 = setInterval (() =>{
    console.log("Eidgah");
},2000);
console.log(id2);
clearInterval(3);
