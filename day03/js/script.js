var sodas = ['Pepsi', 'Coke', 'Yazoo Springs IPA'];

// console.log(sodas);
// console.log(Array.isArray(sodas));

var colors = ['red', 'orange', 'purple'];
var arrLength = colors.push('green');
// console.log('the new array is ', colors);

// console.log('the array length is ', arrLength);

arrlength = colors.unshift('pink');
// console.log('New array', colors);
// console.log('array length is ', arrlength);
// console.log('the new array of colors ', colors);

// console.log("the length of array", colors.length);

var item = colors.pop();
// console.log('Item is ', item);

item = colors.shift();
// console.log('Item is ', item);

console.log(colors);

console.log(colors.indexOf('red'));

// var myName = "Allen";
//
// console.log(myName);
// console.log(myName.length);
// // charAt()
//
// console.log(myName.charAt());
//
// // .indexOf
// // lastIndexOf
// .splice() remove or add items
var removeItem = colors.splice(1, 2);
console.log(colors);
console.log(removeItem);
console.log(colors);

var addItems = colors.splice(1, 0, 'green', 'blue');
console.log(colors);
console.log(addItems);

var newColors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
console.log(newColors);
var remGreen = newColors.indexOf('green');
console.log(remGreen);
newColors.splice(remGreen, 1, 'indigo');
console.log(newColors);

var moColors = newColors.splice();
console.log(moColors);

// .reverse()

var revColors = newColors.reverse();
console.log(newColors);
console.log(revColors);

newColors.sort();
console.log(newColors);

var names = ['Matt', 'matt', 'david', 'higley', 'Higley', 'David'];
names.sort();
console.log(names);

// bubble sort
var points = [4, 2, 5, 1, 3];
points.sort(function(a, b){
  return a - b;
});
console.log(points);

// for (var i = 0; i < newColors.length; i++) {
//   console.log(newColors[i]);
// }

var modColors = newColors.map(function(e, i){
  console.log(e);
  // console.log(i);
  console.log('my fav colors', e);
});
console.log(modColors);

var modPoints = points.map(function(e){
  return e * 2;
});
console.log(points);
console.log(modPoints);
//
// console.log(myName.lastIndexOf('l',));
// console.log(myName.indexOf('e'));
// console.log(myName.concat(' Peanuts'));
// console.log(myName.substring(0, 3));
// // .substring() up to but not including the second argument
// console.log(myName.substring(2));
// // substr() total caracters
//
// console.log(myName.substr(0, 3));
// console.log(myName.substring(0, 3));
//
// // toUpperCase()
// console.log(myName.toUpperCase());
// console.log(myName.toLowerCase());
//
// var newUser = '                   Yoda      ';
// console.log(newUser);
// // .trim()
// console.log(newUser.trim());
//
//
//
//
// // var randNum1 = Math.ceil(Math.random() * 100);
// // var rand1Prompt =
