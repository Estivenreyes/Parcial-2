const input = document.querySelector(".movieName");
const btn = document.querySelector(".subir")
const db = firebase.database();




btn.addEventListener("click",()=>{

    let reference = db.ref("Movies").push()

    let pelicula = {

        nombre: input.value,
        id : reference.key
    }

    reference.set(pelicula)


})