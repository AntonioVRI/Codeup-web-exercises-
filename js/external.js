"use strict";

console.log("Hello from external JavaScript");

alert("Welcome to my Website!");

let color= prompt("User, What is your favorite color?");

    if (color != null){
        alert("Great! My favorite color is " + color + " too!");
            }


        alert("Thanks!!");

/*You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it),
and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you
have to pay?*/

var rentalRate = Number(prompt("How much is daily rate"));

var mermaidDays = Number(prompt("How long are you renting the little mermaid? "));
var bearDays = Number(prompt("How long are you renting brother bear? "));
var herculesDays = Number(prompt("How long are you renting hercules? "));

var totalCost = (mermaidDays + bearDays + herculesDays) * rentalRate;
var alertMessage ="You owe: $" + totalCost.toFixed(2);
alert(alertMessage);


/*A student can be enrolled in a class only if the class is not full and
 the class schedule does not conflict with her current schedule.*/

//if class is not full (true) we can enroll
var classNotFull = confirm("Class is not full") //boolean

//if schedule does not conflict we can enroll - space in our schedule
var classScheduleOK = confirm("Schedules do not conflict");

//true && true = student can enroll
//true && false = student cannot enroll. conflict in schedule
//false && true = student cannot enroll. class is full
//false && false = student cannot enroll. class is full & schedule conflict
var studentEnrolled = classNotFull && classScheduleOK;

var alertMessage1 = "Student enrolled: " + studentEnrolled;
alert(alertMessage1);



/*A product offer can be applied only if a person buys more than 2 items, and the offer has not expired.
    Premium members do not need to buy a specific amount of products.*/

//1. Offer has to be valid no matter what
//2.a If they are a premium member, number of items doesn't matter
//2.b. If they are NOT a premium member, they must buy more than 2 items ==> have to use OR (||)

var numberOfItems = Number(prompt("How many items for checkout?")); //number

var offerIsValid = confirm("Is the offer valid?"); //boolean
var isPremiumMember = confirm("Are you a premium member?"); //boolean

var discountApplied = offerIsValid && (isPremiumMember || numberOfItems > 2);

alert("Product discount: " + discountApplied);