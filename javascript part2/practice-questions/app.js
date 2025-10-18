//question 1
let array = [7,9,0,-2];
let n =3;
let ans = array.slice(0,n);
console.log(ans);

//question 2
let arr = [7,9,0,-2];
let n2 = 3;
let answer = arr.slice(arr.length -n);
console.log(answer);

//question 3
let string = ("not empty");
if(string === ("")){
    console.log("string is empty");
}else{
    console.log("string is not empty");
}

//question 3
//let str = prompt("enter the string");
//if(str.length == 0){
    //console.log("string is empty");
//}else{
    //console.log("string is not empty");
//}

//question 4
let msg = "CharActer";
let i = 4;
if(msg[i]===msg[i].toLowerCase()){
    console.log("character is in lowercase");
}else{
    console.log("character is not in lowercase");
}

//question 5
//let str = prompt("enter the string");
//console.log(`original string =${str}`);
//console.log(`string without spaces =${str.trim()}`);

//question 6
let arra =["toyiba","sheikh","hashim"];
let item ="";
if(arra.indexOf(item) != -1){
    console.log("element exists");
}else{
    console.log("element doesnot exist");
}