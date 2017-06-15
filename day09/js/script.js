// var myCar = {
//   make: 'jeep',
//   model: 'wrangler',
//   year: 2014
// };
//
// var myOtherCar = {
//   make: 'jeep',
//   model: 'wrangler',
//   year: 1997
// };
//
// function Car(userMake, model, year, color) {
//   this.doors = 2;
//   this.make = userMake;
//   this.model = model;
//   this.year = year;
//   this.color = color;
// };
//
// var myJeep = new Car('jeep', 'wrangler', '2014', 'black');
// var myOtherJeep = new Car('jeep', 'wrangler', 1997, 'red');
// console.log(myCar);
// console.log(myJeep);
// console.log(myOtherJeep.make);
//
//
// function Person(firstName, lastName, age, interests, job) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
//   this.interests = interests;
//   this.job = job;
//
// };
// var allen = new Person('Allen', 'Goyne', 54, 'guitaring', 'avoiding work');
// // console.log(allen);
//
// var ruth = new Person('Ruth', 'Hill', 61, 'reading', 'journalist');
// // console.log(ruth);
//
// //setTimeout()
//
// function delay() {
//   setTimeout(sayHello(), 4000)
// }
//
// function sayHello(){
//   alert('Hello');
// }
//
// // setInterval
// // var greeting = setInterval(sayHi, 500);
// function sayHi(){
//   greet++;
//   // console.log('Hi ' + greet);
// }
//
//
// var btns = document.querySelectorAll('button');
// var timer;
// for(let btn of btns) {
//   btn.addEventListener('mouseover', function(evt) {
//     timer = setTimeout(function() {
//       getBtn(evt);
//     }, 1000);
//   });
//
//   btn.addEventListener('mouseout', function(evt) {
//     clearTimeout(timer);
//   });
// }
//
// function getBtn(evt) {
//   console.log(evt.target);
//   evt.target.style.color = 'magenta';
//   evt.target.style.fontSize = '200%';
// }


var fig = document.getElementsByClassName('ggPic');
// console.log(fig);

for(let fig){
  fig.addEventListener('mouseover', function(evt) {
    timer = setTimeout(function() {
      makeBig(evt);
    }, 1000);
}
