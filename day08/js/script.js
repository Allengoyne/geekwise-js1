//
// // var myForm;
// // var go;
// // myForm = document.querySelector("nav.form");
// // go = function(){
// //   for (var i = 0; i < go.length; i++) {
// //     go[i] = go.push
// //     console.log(go);
// //   }
// // }
//
//
// var form = document.querySelector('form');
// form[2].addEventListener('click', getInputs);
//
// function getInputs(evt){
//   evt.preventDefault();
//
//
//   // var inputArr = [];
//   // for(let i = 0; i < form.elements.length; i++){
//   //   // console.log(form.elements[i].value);
//   //   inputArr.push(form.elements[i].value);
//   // }
//   // console.log(inputArr);
// document.body.innerHTML += sticky;
// var stickySubmit = document.querySelector('#sticky');
// console.log(stickySubmit);
// }
//
// var sticky =
// `
//   <form id="sticky">
//     <button>+</button>
//     <input type="text" placeholder="sticky">
//   </form>`;
// function stickySetup(){
//   var todo = document.createElement('input');
//   var stickySubmit= document.querySelector('#sticky');
//   stickySubmit[0].addEventListener('click', function(evt){
//     evt.preventDefault();
//     stickySubmit.appendChild(todo);
//   });
//
// }
var sForm = document.createElement('form'),
    sBtn = document.createElement('button'),
    sInput = document.createElement('input');

sForm.id = 'sticky';
sBtn.id = 'add';
sBtn.texContent = '+';
sInput.type = 'text';
sInput.placeholder = 'todo';
// sForm.appendChild(sBtn);
// sForm.appendChild(sInput);
sForm.append(sBtn, sInput);
document.body.appendChild(sForm);

sBtn.addEventListener('click', addTodo);

function addTodo() {
  evt.preventDefault();
  var newTodo = document.createElement('input');
  newTodo.type = 'text';
  newTodo.placeholder = 'todo';
  sForm.appendChild(newTodo);
}
