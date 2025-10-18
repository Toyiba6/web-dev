// trim method.
let str="    hello      ";
console.log(str.trim());            //"hello".


//uppercase and lowercase.
let msg = "Toyiba";
console.log(msg.toUpperCase());         //"TOYIBA".
console.log(msg.toLowerCase());         //"toyiba".


//methods with arguments.         // "(indexof)".
let string = "ILoveCoding";
console.log(string.indexOf("Love"));    //"1"
console.log(string.indexOf("j"));
console.log(string.indexOf("o"));        //"2"


//method chaining.
let message = "         morning      ";
console.log(message.trim().toUpperCase());


//slice.
let messg = "ILoveCoding";
console.log(messg.slice(5));     //"coding".
console.log(messg.slice(1,5));   //"Love".


//replace.
let word = "ILoveCoding";
console.log(word.replace("Love", "do"));   //"IdoCoding".
console.log(word.replace('o','x'));        //"ILxveCoding".


//repeat.
let stri ="Mango";
console.log(stri.repeat(5));               //"MangoMangoMangoMangoMango".