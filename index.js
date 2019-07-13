// 1. Write a JavaScript program to display the current day and time in the following format. (Current time is : 10 PM : 30 : 38)

// Step 1 - Get the hours, minutes and seconds 
var date = new Date();
var hour = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();

// Step 2 - Find if it's AM or PM
if ()

console.log("Current time : " + hour + " PM : " + minutes + " : " + seconds);


// 2. Write a JavaScript program to print the contents of the current window.
function print() {
  window.print();
}


// 4. Write a JavaScript program to find the area of a triangle 
// where lengths of the three of its sides are 5, 6, 7. 

function myTriangle(side1, side2, side3) {
    var s = (side1 + side2 + side3)/2;
    var area = Math.sqrt(s*((s - side1)*(s-side2)*(s-side3)));
    console.log(area);
}
console.log(myTriangle(5,6,7))


// 6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar. 
function isLeapYear(currentYear) {
    if (currentYear % 4 === 0 || currentYear % 400 === 0) {
      console.log('It is a leap year');
    }  else {
      console.log('it is NOT a leap year');
    }
}
console.log(isLeapYear(2020));


// 9. Write a JavaScript program to calculate days left until next Christmas. 
    var today = new Date();
    var xmas = new Date(today.getFullYear(), 11, 25);

    if (today.getMonth()==11 && today.getDate() > 25) {
      xmas.setFullYear(xmas.getFullYear()+1);
    }
    var one_day = 1000 * 60 * 60 * 24;
    console.log(Math.ceil((xmas.getTime()-today.getTime()) / (one_day)) + " days left until Christmas!");

