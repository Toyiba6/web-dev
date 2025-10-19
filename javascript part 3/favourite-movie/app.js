let fav ="jab we met";
let guess =prompt("guess my fav movie!");
while(guess!=fav){
if(guess==="quit"){
    console.log("you quit");
    break;
}
    guess= prompt("wrong guess. try again");
}
if(guess===fav){
    console.log("you won!");
}