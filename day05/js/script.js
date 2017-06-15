// // if
// //
// var age;
// var gender =  prompt('are you male or female?')
// // console.log(!age);
// // var age = parseInt(prompt('what is your age?'));
//
// if(age > 21 && gender == 'female'){
//   console.log("Welcome!");
// }
// else if(age < 21) {
//   console.log("too young");
// }
// else {
//   // console.log('exactly');
// }
// if(!age){
//   console.log(parseInt(prompt('enter your age')));
// }

// switch statement
// var today = new Date().getDay();
// switch(today){
//   case 0:
//     console.log("it's not friday yet");
//     case 1:
//       console.log('bad case of mondays');
//       break;
// default:
//   console.log("at least it's not monday");

//  ternary operator
// var name = prompt('what is your name?');
// var age = prompt('what year car?')
// age >= 21 ? console.log('welcome') : console.log('nope');;

// let and const ES6

// var dog = 2;
//
// if(dog > 1) {
//   let dogyears = 7;
//   console.log(dogyears * dog);
// }

// Functions

// function myName(name, age){
//   // alert(name + ' is ' + age + ' years old');
//   alert(`${name} is ${age * 2} years old`);
// }
//
// myName('chuck', age);

// ''
// ""
// ``

// var myCar= function(car, year){
//   alert(car)
// }('mini cooper JCW', 2009);
// alert(`?{name} is buying a ${age} car`);


// let getFirst = prompt('what is your first name');
// let  getLast = prompt('what is your last name');

// var showName = function(f, l){
// alert(`welcome ${f} ${l}`)
// }('john', 'paul', 'george', 'ringo');


// arguments object

function welcome(){
  var msg = 'Welcome';
  for(var arg of arguments){
    msg += ' ' + arg;
  }
  alert(msg);
}
// welcome('john', 'paul', 'george', 'ringo');


// 
