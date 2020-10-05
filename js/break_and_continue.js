"use strict";


//Solution 1

// var userNumber = Number(prompt("User, please enter an odd number: "));
//
//     for (var i = 0; i < 50; i++){
//
//         if(i % 2 === 0){
//             continue;
//         }else if(userNumber === i){
//             console.log("Yikes! Skipping number: " + userNumber);
//         }else if(i % 2 !== 0){
//             console.log("Here is an odd number: " + i);
//         }
//
// }




// Solution 2

// do{
//     var userNumber = Number(prompt("Pick an odd number between 1 - 50"));
//
//     if(userNumber < 1 || userNumber > 50){
//         alert("Number is invalid. Please try another.");
//     }else if(userNumber % 2 === 0){
//         alert(userNumber + " is not odd, please try again.");
//     }else if(isNaN(userNumber)){
//         alert(userNumber + " is not a number, please try again.");
//     }
//     else {
//         alert("Number is valid! Thank you!");
//         break;
//     }
//
// }while(true)
//
// for (var i = 1; i <= 50; i++){
//
//     if(i % 2 === 0){
//         continue;
//     }
//
//     if(i === userNumber){
//         console.log("Yikes! Skipping number: " + i);
//     }else{
//         console.log("Here is an odd number: " + i);
//     }
//
// }