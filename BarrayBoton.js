
function accion(){
    let ancla = document.getElementsByClassName('nav-enlace');
    for(let i = 0; i < ancla.length; i++){
      ancla [i].classList.toggle('desaparece');
    }
  }
  
let txtOculto_btn = document.getElementById('txtOculto_btn');

let txtOculto = document.getElementById('txtOculto');

txtOculto_btn.addEventListener('click', toggleTxt);

function toggleTxt() {
    txtOculto.classList.toggle ('mostrar');
    if (txtOculto.classList.contains('mostrar')) {
        txtOculto_btn.innerHTML = 'No mostrar';
}
    else {txtOculto_btn.innerHTML = 'Mostrar';
    }
}
