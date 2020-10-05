"use strict";


//#2

// function showMultiplicationTable(input){
//     for(i = 0; i <= 10; i++){
//         var i = 0;
//
//         console.log(input + " x " + i + " = " + (input * i));
//
//
//     }
// }


//#3


    // for (var i = 0; i < 10; i++){
    //     var luckyNumber = Math.floor((Math.random() * (200 - 20 + 1)) + 20);
    //
    //     if (luckyNumber % 2 === 0) {
    //         console.log(luckyNumber + " is even");
    //     }else {
    //         console.log(luckyNumber + " is odd");
    //     }
    //
    // }




//#4

// function numberPyramid() {
//
//
//     var emptyString = '';
//
//     for (var i = 1; i <= 9; i++) {
//
//         for (var x = 1; x <= i; x++) {
//
//             emptyString += i + ' ';
//         }
//         console.log(emptyString);
//         emptyString = '';
//     }
// }
// numberPyramid()


//#5

for(var i = 100; i > 0; i--){
    if(i % 5 === 0){
        console.log(i);
    }
}
