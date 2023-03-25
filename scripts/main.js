let miImage=document.querySelector('img');
miImage.onclick=funtion()
{
    let miSrc=miImage.getAttribute('src');
    if(miSrc==='images/campo-de-higgs-1200-amp.png'){
        miImage.setAttribute('src','images/campo-de-higgs-1200-amp2.png');
    }else{

        miImage.setAttribute('src','images/campo-de-higgs-1200-amp.png');

        }
}
let miBoton=document.querySelector('button');
let miTitulo=document.querySelector('h1');

function estableceNombreUsuario()
{
    let miNombre=prompt('introduzaca Nombre: ');
    if(!miNombre){
        estableceNombreUsuario();
    }else{
    localStorage.setItem('nombre',miNombre);
    miTitulo.innerHTML='Boson De Higgs'+ miNombre;
    }
}

if(!localStorage.getItem('nombre')){

    estableceNombreUsuario();
}
else{
    let nombreAlmacenado=localStorage.getItem('nombre');
    miTitulo.textContent='Boson De Higgs,'+nombreAlmacenado;
}
miBoton.onclick = function()
{
    estableceNombreUsuario();
}