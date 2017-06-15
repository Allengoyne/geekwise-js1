function getName(){
  var userFirst = prompt("'What is your first name?'").trim();
  userFirst = userFirst.charAt(0).toUpperCase() + userFirst.substr(1).toLowerCase();
  welcome(userFirst);
};

function properCap(uf){
  uf.charAt(0).toUpperCase() + uf.substr(1).toLowerCase();
  return uf;
  alert ("it's done");
}

function welcome(uf){
  alert(`welcome ${uf}.`);
}
