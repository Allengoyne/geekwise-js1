// var btn = document.QuerySelector('mouseleave', function(){
//   console.log(evt);
//   evt.target.style.color = 'black';
// });
//
//
//
//
//
// window.addEventListener('scroll', function(evt){
//   console.clear();
//   console.log(evt.pageY);
//   if(evt.pageY , 200){nav.classList.add('vis');}else {
//     nav.classList.remove('vis');
//   }
// });


// keydown, keyup, keypress



//
// setDiv.innerHTML = '<p>Here is a line</p>';
//
// var getDiv = document.querySelector('div#get');
//
// console.log(getDiv.innerHTML);

var submitBtn = document.querySelector('input[type="submit"]');
var form = document.querySelector('form');
// var inputText = document.querySelector('input[type="text"]');
// var inputPass = document.querySelector('input[type="password"]');
submitBtn.addEventListener('click', function(evt){
  evt.preventDefault();
  var tex = inputText.value;
  var pass = inputPass.value;
  alert(text + " " + pass);
});
