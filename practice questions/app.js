//create a random dice number between 1 to 6
const diceRoll = 6;
const random = Math.floor(Math.random() * diceRoll) + 1;
console.log(random);


//create an object car with properties name, model, color and print the name of the car
const car = {
    name: "Maruti Suzuki",
    model: "Swift",
    color: "white",
};
console.log(car.name);


//create an object person with properties name, age, city. Update the city property and add a new property country
const person = {
    neme: "Sheikh",
    age: 22,
    city: "Hyderabad",
};
person.city ="New York";
person.country ="United States";
console.log(person);