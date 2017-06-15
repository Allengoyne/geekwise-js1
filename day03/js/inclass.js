var usernameArray = [];
var usernames = prompt('please enter a username');
usernameArray.push(usernames);

console.log(usernameArray);

// var more = confirm('Any More');
// console.log(more);
// if (more) {
// }else {
//   alert(usernames);
// };

function getUser(){
  usernames = prompt('please enter another username');
  usernameArray.unshift(usernames);
  console.log(usernameArray);

}

function removeUser(){
  usernames = prompt('who do we want to get rid of');
  usernameArray.pop(usernames);
  console.log(usernameArray);

}
