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

