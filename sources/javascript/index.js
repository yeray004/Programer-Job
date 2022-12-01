const ingreso = document.getElementById('btn1')
const acceder = document.getElementById('btn')
const boton = document.getElementById('pop');
const registro = document.getElementById('reg');
const reg = document.getElementById('overlay');

ingreso.addEventListener('click', function(){
    boton.classList.add('active')
});

acceder.addEventListener('click', function(){
    window.location='.retos-aliados.html'
});

registro.addEventListener('click', function(){
    reg.classList.add('active')
});
registro.addEventListener('click', function(){
    reg.classList.add('overlay')
});