//localStorage
let text_name = document.querySelector('.text_name');
let inps = document.querySelectorAll('.inp1');

inps.forEach(inp => {
    inp.addEventListener('input', function() {
        inp.setAttribute("value", inp.value);
        localStorage.setItem("default", container.innerHTML);
    });
});

document.querySelectorAll('textarea').forEach(element=>{
  element.addEventListener('input', function(){
    element.innerHTML=element.value
  })
})


//Skill ()
const container = document.querySelector('.container_rating');
const btnAdd = document.querySelector('.btnAdd');

btnAdd.addEventListener('click', function() {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  container.insertBefore(cell, btnAdd);

  const element = document.createElement('div');
  element.classList.add('element');
  cell.appendChild(element);

  const btnRemove = document.createElement('button');
  btnRemove.classList.add('btnRemove');
  btnRemove.innerHTML = 'x';
  element.appendChild(btnRemove);

  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.classList.add('inp1');
  input.setAttribute('placeholder', 'Rating');
  input.style.width = '100px';
  input.style.height = '30px';
  input.style.marginLeft = '10px';
  input.style.marginRight = '90px';
  input.style.fontFamily = "'Yeseva One', cursive";
  input.style.fontSize = '1.1em';
  element.appendChild(input);

  const rating = document.createElement('div');
  rating.classList.add('rating');
  rating.setAttribute('data-total-value', '5');
  element.appendChild(rating);

  for (let i = 5; i >= 1; i++) {
    const ratingItem = document.createElement('div');
    ratingItem.classList.add('rating_item');
    ratingItem.setAttribute('data-item-value', i);
    ratingItem.innerHTML = '✦';
    rating.appendChild(ratingItem);
  }

  btnRemove.addEventListener('click', function() {
    cell.remove();
  });

  input.addEventListener('input', function() {
    input.setAttribute("value", input.value);
    localStorage.setItem("default", container.innerHTML);
  });
});


//Rating star
const ratingItemsList= document.querySelectorAll('.rating_item');
const ratingItemsArray=Array.prototype.slice.call(ratingItemsList);

ratingItemsArray.forEach(item=>{
  item.addEventListener('click',()=>{
    const{itemValue}=item.dataset;
    item.parentNode.dataset.totalValue=itemValue;
    ratingItemsArray.forEach(innerItem => {
      if (innerItem.dataset.itemValue <= itemValue) {
        innerItem.classList.add('active');
      } else {
        innerItem.classList.remove('active');
      }
    });
  });
});


//Регулярные выражения 
// let inputs = document.querySelectorAll('.inp1');
// let patterns = ["^[А-ЯЁ][а-яё]{0,7}$", "^[А-ЯЁ][а-яё]{0,8}$", "^[А-ЯЁ][а-яё]+$", "^\+?(\d{1,2})?(\()?(\d{3})(?(2)\))(\d{3})-?(\d{2})-?(\d{2})$", "^[\\w.-]+@[a-zA-Z]+\\.[a-zA-Z.]+$"];
// let regexArr = patterns.map(pattern => new RegExp(pattern));

// inputs.forEach((input, index) => {
//   input.addEventListener('input', function(){
//     if(regexArr[index].test(input.value)){
//       input.classList.add('int1_true');
//       input.classList.remove('int1_false');
//       /*inp1.value = inp1.value.replace +('\u2714')*/
//     }
//     else{
//       input.classList.remove('int1_true');
//       input.classList.add('int1_false');
//       /*inp1.value = inp1.value.replace +('\u2716')*/
//     }
//   });
// });
function valid(patt, target){ 
  let reg = new RegExp(patt) 
  if(reg.test(target.value)){ 
    target.classList.add('int1_true'); 
    target.classList.remove('int1_false'); 
    inp1.value = inp1.value.replace +('\u2714'); 
  } 
  else{ 
    target.classList.remove('int1_true'); 
    target.classList.add('int1_false'); 
    inp1.value = inp1.value.replace +('\u2716');
  } 
} 
let inputs = document.querySelectorAll('.inp1'); 
 
inputs.forEach(input=>{ 
  input.addEventListener('input', function(){ 
    if(input.getAttribute('data-name') === 'name'){ 
      valid("^[А-ЯЁ][а-яё]{0,7}$", input) 
    } 
    if(input.getAttribute('data-surname') === 'surname'){ 
      valid("^[А-ЯЁ][а-яё]{0,8}$", input) 
    }
    if(input.getAttribute('data-post') === 'post'){ 
      valid("^[А-ЯЁ][а-яё]+$", input) 
    }
    if(input.getAttribute('data-numberst') === 'numberst'){ 
      valid("^[\+]?[(]{0,1}[78]?[09][0-9]{2}[)]{0,1}[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{2}[-\s\.]?[0-9]{2}$", input) 
    }
    if(input.getAttribute('data-mail') === 'mail'){ 
      valid("^[\\w.-]+@[a-zA-Z]+\\.[a-zA-Z.]+$", input) 
    }
  }) 
})