// exercise 1

// let user = (prompt) => {
//     let str1 = prompt("First fruit");
//     let str2 = prompt("Second fruit");
//     let str3 = prompt("Thrird fruit");
//     let str4 = prompt("Fourth fruit");

//     let result = [
//         str1,
//         str2,
//         str3,
//         str4
//     ]
//     return result;
// }
// console.log(user(prompt));

// exercise 2

// let arr1 = ["Hello"];
// let arr2 = [" world"];

// let array = (user) => {
//     newArr = arr1 + arr2;
//     return newArr.split();
// }
// console.log(array());

// exercise 3

// let array = (array) => {
//     array = [18,"name"];

//     let stringCollector = [];
//     let numberCollector = [];

//     for(let i = 0; i < array.length; i++){
//         if(typeof array[i] === "string"){
//             stringCollector = array[i];
//         } else if(typeof array[i] === "number"){
//             numberCollector = array[i];
//         }
//     }
//     console.log(stringCollector);
//     return numberCollector;
// }
// console.log(array());

// exercise 4

// let company1 = (users) => {
//     users = [
//         ['Asliddin', 18],
//         ['Kamoliddin', 14],
//         ['Baxtiyor', 16]
//     ]

//     for (let i = 0; i < users.length; i++){
//         let company = prompt("Enter the company name");
//         users[i][2] = company;
//     }
//     console.log(users);
// }
// console.log(company1());