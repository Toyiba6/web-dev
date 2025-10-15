//if statement
console.log("Before if statement");
let age=14;
if(age>=18){
    console.log("You are eligible to vote");
}
if(age>=18){
    console.log("You are eligible to vote");
    console.log("You can also run for office");
}
if(age<18){
    console.log("You are not eligible to vote");
}
console.log("After if statement");

//else if statement
let marks = 65;
if(marks>=90){
    console.log("You got A+ grade");    
}else if(marks>=80){
    console.log("You got A grade");
}   else if(marks>=70){
    console.log("You got B+ grade");
}   else if(marks>=60){
    console.log("You got B grade");
}
    else if(marks>=50){
    console.log("You got C grade");
}
    else if(marks>=40){
    console.log("You got D grade");
}
    else{
    console.log("You got F grade");
}

//switch statement
let color="green";
switch(color){
    case "red":
        console.log("stop");
        break;
    case "yellow":
        console.log("get ready");
        break;
    case "green":
        console.log("go");
        break;
    default:
        console.log("invalid color");
}