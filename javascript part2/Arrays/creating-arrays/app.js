let marks = [99, 85, 93, 88, 66];
let names = ["adam", "bob", "catlyn"];
let info = ["aman", 25, 6.1];
console.log(marks, names, info);


//arrays are mutable.
let fruits = ["Banana", "Apple", "Orange"];
console.log(fruits);
fruits[0] = "Grapes";
console.log(fruits);
fruits[3] = "Strawberry";
console.log(fruits);


//push poop array method.
let cars = ["maruti", "bmw", "xuv"];
console.log(cars);
cars.push("audi");
console.log(cars);
cars.pop();
console.log(cars);


//unshift shift methods.
let car =["maruti", "bmw", "xuv"];
console.log(car);
car.unshift("toyota","ferrari");
console.log(car);
car.shift();
console.log(car);


//practice question.
let months = ["january", "july", "march", "august"];
console.log(months);
months.shift();
months.shift();
console.log(months);
months.unshift("july","june");
console.log(months);


//indexOf.
console.log(cars.indexOf("bmw"));

//includes.
console.log(months.includes("march"));
console.log(months.includes("may"));


//concatenation and reverse method.
//concat.
let primary = ["red", "yellow", "blue"];
let secondary = ["orange", "green", "voilet"];
console.log(primary.concat(secondary));

//reverse.
primary.reverse();
console.log(primary);

//slice.
let color = ["red", "yellow", "blue", "orange", "pink", "white"];
console.log(color.slice());
console.log(color.slice(2));
console.log(color.slice(2,3));
console.log(color.slice(-2));

//splice.
let colors = ["red", "yellow", "blue", "orange", "pink", "white"];
console.log(colors);
console.log(colors.splice(4));           //from index 4.
console.log(colors);                     //remaining except pink and white.
console.log(colors.splice(0,1));         //start from 0, delete only 1.(red dlt).
console.log(colors);                     //yellow, blue, orange
console.log(colors.splice(0,1,"black","grey"));     //start from 0, dlt one, after that black gets add in position yellow, and grey after that .
console.log(colors);
console.log(colors.splice(1,0,"voilet"));   //add in between the array.
console.log(colors);


//array references.
let arr = ['a', 'b'];
let arrCopy = arr;
console.log(arrCopy);
arrCopy.push('c','d');
console.log(arrCopy);
console.log(arr);

//nested arrays.
let num = [[2,4], [3,6], [4,8]];
console.log(num);
console.log(num.length);     //3
console.log(num[0]);         //[2,4]
console.log(num[0].length);   //2
console.log(num[0][0]);       //2  
console.log(num[2][1]);       //8