//forward loop
for(let i=1; i<=10; i++){
    console.log(i);
}
//backward loop
for(let i=10; i>=1; i--){
    console.log(i);
}
//nested for loops
for(i=1; i<=3; i++){
    console.log(`outer loop${i}`);
    for(j=1; j<=3; j++){
console.log(j)
    }
}

//while loop
console.log("while loop");
let l=1;
while(l<=10){
    console.log(l);
    l++;
}

//break keyword
console.log(" break keyword usage");
let d = 1;
while(d <=5){
    if(d==3)
    {
        break;
    }
    console.log(d);
    d++;
}

//loops in arrays
let fruits =["mango", "apple", "banana", "litchi", "orange"];
for(n =0; n<fruits.length; n++){
    console.log(n, fruits[n]);
}

//backward order
let fruit =["mango", "apple", "banana", "litchi", "orange"];
for(m=fruit.length -1; m>=0; m--){
    console.log(m, fruit[m]);
}

//nested loops in nested arrays
console.log("example 1");
let heroes = [["ironman", "spiderman", "thor"],["superman", "wonder women", "flash"]];
for(let i = 0; i < heroes.length; i++){
    console.log(`${i} ${heroes[i]}`);
    for( let j = 0; j < heroes[i].length; j++){
        console.log(`j =${j} ${heroes[i][j]}`);
    }
}

//example 2
console.log("example 2");
let student = [["aman", 95],["shradha",94], ["karan", 100]];
for( i = 0; i < student.length; i++){
    console.log(`info of student #${i+1}`)
        for(let j = 0; j < student[i].length; j++){
        console.log(`${student[i][j]}`);
    }
}

//for of loop
let fru =["mango","apple", "banana", "litchi", "orange"];
for(fruit of fru){
    console.log(fruit);
}

//for of loop for character access
for(char of "apnaCollege"){
    console.log(char);      //char is variable name
}

//nested for of loop
let h =[["ironman", "spiderman", "thor"],["superman", "wonder women", "flash"]];
for(hero of h){
    for(list of hero){
        console.log(list);
        for(char of list){
        console.log(char); 
        }
    }
}