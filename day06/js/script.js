// // var name = "";
// //
// // function getNames(){
// //   var namePrompt = prompt("what is your name?");
// //   var fullName = namePrompt + " " + more;
// //   alert('your full name is ' + fullName);
// // }
// //
// // function moreNames(){
// //   var more = confirm("do you have any more names?");
// //   if (more) {
// //     more = prompt('what is your other name?');
// //   }
// // }
// //
// // function somefunc(str) {
// //   name += str + ' ';
// // }
//
// function getName(){
//   var user = prompt('enter a name');
//   alertName( getMore( properCap(user) ) );
// }
// getName();
//
// function properCap(str1){
//   return str1.charAt(0).toUpperCase() + str1.substr(1).toLowerCase();
// }
//
// function getMore(str2){
//   fullName += `${str2}`;
//   // confirm('more names?') ? getName() : return fullName;
//   if(confirm('more names?')){
//     getName();
//   } else {
//   return fullName;
//   }
// }
//
// function alertName(str3){
//   if(str3 !== 'undefined'){
//     alert(str3);
//   }
// }
var myH1 = document.getElementById('hdr1');
var myP = document.getElementsByTagName('p')[0];

// Query selector
var h1 = document.querySelector('#hdr1');

console.log(myH1);
console.log(myP[0]);

myH1.addEventListener('click', function(){
  console.log(this);
  // this.style.color = 'red';
  // this.style.paddingTop = '50xpx';
  // this.style.fontSize = '100px';
  // myP.style.color = 'magenta';
  myP.classList.toggle('red');
})
