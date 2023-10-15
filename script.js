let botonAnt= document.getElementById('left')
let botonSig= document.getElementById('right')
let contenedorPuntos= document.getElementById('puntitosContainer')
let imagen = document.getElementById('imagenView')

let coleccion = ["./Dental.png","./Implantes.png","./Limipeza.jpg"]

let puntero=0;

window.addEventListener('load', ()=>{
    imagen.src= coleccion[puntero]
    cargarPuntitos()
    actualizarPuntos()
})

function cargarPuntitos(){
    coleccion.forEach(()=>{
        let p = document.createElement('div')
        p.classList.add('punto')
        contenedorPuntos.appendChild(p)
    })
}


botonSig.addEventListener('click',()=>{
    puntero++

    if(puntero>=coleccion.length){
        puntero=0
    }
    imagen.src= coleccion[puntero]
    actualizarPuntos()

})

botonAnt.addEventListener('click',()=>{
    puntero--
    if(puntero<0){
        puntero=coleccion.length-1
    }

    imagen.src= coleccion[puntero]
    actualizarPuntos()
})

function actualizarPuntos(){
    let pts= document.querySelectorAll('.punto')
    
    pts.forEach(p=>{
        p.classList.remove('puntoActual')
    })

    pts[puntero].classList.add('puntoActual')

}