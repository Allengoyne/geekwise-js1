// var myAlert = alert('I hope you are having a nice day!');
// var confirmInput = confirm("Yes or No");
// console.log(myAlert);
// console.log(confirmInput);
// var firstName = prompt('Enter First Name');
// console.log(firstName);
// var userAge = prompt("How old are you?");
// console.log(userAge);
// var userAge = parseInt(prompt("How old are you?"));
// console.log(userAge + 10);
//
// var num = 7;
// var numObj = new Number(7);
// console.log(numObj);
// var float =  5.09876;
// console.log(float);
// console.log(typeof float);
// console.log(typeof num);
// var bool = true;
// console.log(bool);
// var arr = ['red', 'orange', 'green'];
// console.log(arr);

// var numArr = [1, 2, 3]
// // console.log(numArr[1] + numArr[2]);
// var myCar = {
// make: "Toyota",
// model: "Tundra",
// year:  "2014"
// };
// console.log(myCar.year);
//
// var num1 = 5.99999999999;
// console.log(Math.ceil(num1));

// console.log(Math.round( (Math.random() * 10) ));

// var theDate = new Date();
// console.log(theDate.getFullYear());

// if (theDate.getDay() === 0) {
//   console.log('Sunday');
// } else if (theDate.getDay() === 1) {
//   console.log('Monday');
// } else if (theDate.getDay() === 2) {
//   console.log('Tuesday');
// } else if (theDate.getDay() === 3) {
//   console.log('Wednesday');
// }
// var myBday = new Date(1999, 10, 02);
// var myDate = theDate.toLocaleString('en-us', {day: '2-digit'});
// console.log(myBday);

// var myBdate = myBday.toLocaleString('en-us', {day: 'numeric'});
// var myBmon = myBday.toLocaleString('en-us', {month: 'long'});
// var myByear = myBday.toLocaleString('en-us', {year: 'numeric'});

// console.log(myBdate + ' ' + myBmon + ' ' + myByear);

// var monthPrompt = parseInt(prompt('What month were you born? Use numeric format')) - 1;
// var dayPrompt = parseInt(prompt('What day of the month were you born'));
// var yearPrompt = parseInt(prompt('Give the full year you were born'));
//
// var userBday = new Date(yearPrompt, monthPrompt, dayPrompt);
//
// var m = userBday.toLocaleString('us-en', {month: 'short'});
// var d = userBday.toLocaleString('us-en', {day: 'numeric'});
// var y = userBday.toLocaleString('us-en', {year: '2-digit'});
//
//
// console.log(m + ' ' + d + ' ' + y);

// var y, m, d, monthPrompt, dayPrompt, yearPrompt;
//
// function getBday(y, d, m){
// if (y) {
//   yearPrompt = parseInt(prompt('what year were you born?' ) );
// }else if (d) {
//   dayPrompt = parseInt(prompt('what day of the month were you born? ') );
// } else {
//   monthPrompt = parseInt(prompt('what month were you born? Use 2 digit numeric format') ) - 1;
// }
// var userBday = new Date(yearPrompt, monthPrompt, dayPrompt);
//
// y = userBday.toLocaleString('us-en', {year: '2-digit'});
// m = userBday.toLocaleString('us-en', {month: 'short'});
// d = userBday.toLocaleString('us-en', {day: '2-digit'});
//
// console.log(y + " " + m + " " +  d);
// };





var rando = Math.random(0-100);
console.log(rando);
