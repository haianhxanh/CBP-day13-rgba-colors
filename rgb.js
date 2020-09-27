'use strict';

const changeColor = () => {
  let red = document.getElementById('input1').value;
  let green = document.getElementById('input2').value;
  let blue = document.getElementById('input3').value;
  let alpha = document.getElementById('input4').value;

  let rgbaColor;
  
  if (red > 255 || green > 255 || blue > 255) {
    alert('The number cannot be higher than 255');
  } else if (red < 0 || green < 0 || blue < 0) {
    alert('The number cannot be lower than 0');
  } else if (alpha < 0 || alpha > 1) {
    alert('Alpha has to be between 0 and 1');
  } else {
    rgbaColor = 'rgba(' + red + ', ' + green + ', ' + blue + ', ' + alpha + ')';
  }

  document.querySelector('.wrapper').style.background = rgbaColor;  
  document.querySelector('#color').innerHTML = rgbaColor;

  if (red >= 160 || green >= 120 || blue >= 120 || alpha < 0.5) {
    document.querySelector('.wrapper').style.color = "black";
  }


}

const elmBtn = document.querySelector('#btn');
elmBtn.addEventListener('click', changeColor);

