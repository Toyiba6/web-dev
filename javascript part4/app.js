//object literals
let student = {
    name : "Sheikh",
    age: 23,
    marks: 92
};
console.log(student);

//arrays inside object literals
const student2 ={
    name: "Toyiba",
    age: 23,
    marks: [98, 97, 96, 95]
};
console.log(student2);


//activity thread/twitter post example
const post ={
    Username: "@Sheikh_toyiba",
    Content: "Hello world, this is my first post!",
    Likes: 100,
    Reposts: 10,
    Tags: ["@toyiba", "@webdev", "@javascript"]
};
console.log(post);


//get values from object literals
console.log(post.Username);
console.log(post.Tags[1]);  
console.log(student2.marks[2]);
console.log(student["age"]);


//problem with dot operator
// post = "reposts"; //this will give error because we are trying to change the object itself
// console.log(post["reposts"]); //this will work because we are accessing the property of the object
// console.log(post.reposts); //this will give undefined because there is no property named repost in the object


//add/update properties
post.likes= 150; //update
console.log(post.likes);
post.gender="male"; //add
console.log(post);
//delete properties
delete post.Tags[1];
console.log(post["Tags"]); 


//nested objects
// const classInfo = {
//     aman: {
//         grade: "A",
//         city: "New York"
//     },
//     toyiba: {
//         grade: "A+",
//         city: "Los Angeles"
//     },
//     irqa :{
//         grade: "B",
//         city: "Chicago"

//     }
// };
// console.log(classInfo);
// console.log(classInfo.toyiba.city);
// console.log(classInfo.aman.grade);
// //update nested object
// console.log(classInfo.irqa.city="Srinagar");
// console.log(classInfo.irqa);

//array of objects
const classInfo = [
 {
    name: "aman",
        grade: "A",
        city: "New York"
    },
     {
        name: "toyiba",
        grade: "A+",
        city: "Los Angeles"
    },
    {
        name: "irqa",
        grade: "B",
        city: "Chicago"

    }
];
console.log(classInfo);
console.log(classInfo[1].name);
console.log(classInfo[0].city);
//update
classInfo[2].city="Srinagar";
console.log(classInfo[2]);