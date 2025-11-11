//example 1
function printName(){
    console.log("Toyiba Hameed");
}
printName();
printName();

//example 2
function print1to5(){
    for(let i = 1; i<=5; i++){
        console.log(i);
    }
}
print1to5();
print1to5();

//example 3
function isAdult(){
    let age = 17;
    if(age >=18){
        console.log("You are an adult");
    }else{
        console.log("You are not an adult");
    }
}
isAdult();
isAdult();


//functions with parameters/arguments
function printInfo(name, agr){
    console.log(`${name} is ${agr} years old.`);
}
printInfo("Toyiba", 20);
printInfo("Hameed", 25);


//example 2
function sum(a,b){
    console.log(a+b);
}
sum(40, 10);
sum(100, 200);
sum(5, 15);

//returning values from functions
function mature(age){
    if(age>=18){
        return "adult";
    } else{
        return "not an adult";
    }
}
console.log(mature(17));