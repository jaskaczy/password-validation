const pass = document.querySelector('#password');
const p = document.querySelector('.passinfo');
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10;

// /^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2,3}$/1

const checkPass =()=>{
    if(pass.value.length>minValue&&pass.value.match(letters)&&pass.value.match(numbers)&&pass.value.match(special)){
        p.textContent='ur pass is the best!!'
        p.style.color='lime'
    } else if (pass.value.length>minValue&&pass.value.match(letters)&&pass.value.match(numbers)){
        p.textContent='good but not best'
        p.style.color='blue'
    }else{
        p.textContent='try more'
        p.style.color='brown'
    }
}
pass.addEventListener('keyup',checkPass)