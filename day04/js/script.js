// for (var i = 0; i < 10; i++) {
//   console.log(i + 1);
// }

// // while
// var j = 0;
// while (j < 10) {
//   console.log(j+1);
//   j++;
// }

// var k = 0;
// do{
//   console.log(k);
// }while (false) {
// }

names = [ "allen", "matt", "irma", "jeff", "ruth"];

// names.forEach(function(element, index){
  // console.log(index + ':' + element);
// });

for (var l = 0; l < names.length; l++) {
  if (names[l] === 'irma'){
    break;
  }
  console.log(names[l]);
}
