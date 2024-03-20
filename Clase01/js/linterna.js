let estado_linterna = false;

let sonido_batman =  document.querySelector("#bati_encendido")

let sonido_click = document.querySelector("#bati_click")

let batman = document.querySelector(".batman")

let bati_boton = document.querySelector(".bati_boton")

// const controlar_linterna = () => {
//     if (estado_linterna == false){
//         estado_linterna = true;
//         sonido()
//         batman.classList.add("batman_activo")
//     }
//     else{
//         estado_linterna = false
//         sonido()
//         batman.classList.remove("batman_activo")
//     }
// }


const controlar_linterna = () => {
    estado_linterna = !estado_linterna;
    estado_linterna ? (batman.classList.add("batman_activo") ,sonido()) : (batman.classList.remove("batman_activo") ,sonido())
};

const sonido =  () => {
    if(sonido_batman.paused){
        sonido_click.play()
        sonido_batman.play()
    }
    else{
        sonido_click.play()
        sonido_batman.pause()
    }

}
bati_boton.addEventListener("click", controlar_linterna);