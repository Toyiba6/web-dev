//question 1.
let start = ["january", "july", "march", "august"];
console.log(start);
start.splice(0,1);
start.splice(1,0,"june");
console.log(start);

//question 2.
let lang = ["c", "c++", "html", "javascript", "python", "java", "c#", "sql"];
console.log(lang.reverse());
console.log(lang.indexOf("javascript"));


//tic-tac-toe game state.
let game = [['X', null, 'O'],[null, 'X', null], ['O', null, 'X']];
console.log(game);
game[0][1] ="O";
console.log(game);