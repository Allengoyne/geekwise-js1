var f = prompt(document.getElementById('first'));
var m = document.getElementsByTagName('li')[1];
var l = document.querySelector('.last');
if(f){
  console.log(f);

} else if (m) {
  console.log(m);
} else {
  console.log(f + " "  +  m  + " " + l);
}
