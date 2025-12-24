//question 1
let greet = "hello";
function changeGreet(){
    let greet = "namaste";
    console.log(greet);
    function innerGreet(){
        console.log(greet);
    }
}
console.log(greet);
changeGreet();


//question 2
let arr = [1,3,5,6,7];
let num = 6;
function getElements(arr,num){
    for(let i = 0; i<= arr.length; i++){
        if(arr[i]>num){
            console.log(arr[i]);
        }
    }
}
getElements(arr,num);


//question 3
let str = "abcdabcdefgggh";
function getUnique(str){
    let ans = "";
    for(let i = 0; i < str.length; i++){
        let currchar = str[i];
        if(ans.indexOf(currchar)== -1){
            ans += currchar;
        }
    }
    return ans;

}
console.log(getUnique(str));


//question 4
let country =["United States of America", "Germany", "Australia"];
function longestName(country){
    let ansIdx= 0;
    for(let i=1; i< country.length; i++){
        let ansLen = country[ansIdx].length;
        let currLen = country[i].length;
        if(currLen > ansLen){
          ansIdx = i;
        }        
     }
    return country[ansIdx];
}
console.log(longestName(country));


//question 5
let string = "Toyiba";
function countVowels(string){
    let count = 0;
    for(let i=0; i< string.length; i++){
        if(string.charAt[i] == "a"||
            string.charAt[i] == "e"||
            string.charAt[i] == "i"||
            string.charAt[i] == "o"||
            string.charAt[i] == "u"){
            count++;
        }
    }
    return count;
}
console.log(countVowels(string));


//question 6
let start = 100;
let end = 200;
function generateRandom(start,end){
    let diff = end - start;
    return Math.floor(Math.random()*diff)+ start;
}
console.log(generateRandom(start,end));