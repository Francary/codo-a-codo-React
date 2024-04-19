/* Ejercicio  arrays */

/* 1)Declarar un array que vamos a llamar “clasificaciones” con los siguientes valores:
Marcos, Franco, Agostina, Leon, Juan Cruz,Eduardo */

/* (vamos a suponer que esa es la orden de clasificación de un concurso) */


let clasificaciones = ["Marcos", "Franco", "Agostina", "Leon", "Juan Cruz,Eduardo"]

/* 2)recorre el array (clasificaciones) e Imprime la clasificación actual.
 (realizar una funcion "mostrarClasificacion()" esa funcion debe recorrer el array con un bucle for y mostrar la clasificacion) */
 //modo Correcto ForEach (puedo usar tambien document.write)

 const mostrarClasificacion = () => {
    clasificaciones.forEach((concursante, index) => {
        document.write(`${index+1} . ${concursante} ` )
        document.write("<br>")
    })
 }
 document.write(`<h2>Clasificación inicial: </h2>`);
 mostrarClasificacion();




/* 3)El concurso continua, y se van modifican esas posiciones anteriores. Debemos cambiar en el array: */
document.write(`<h2>Actualizacion de Clasificación : </h2>`);
/* a)Leon adelanta a Agostina */
const indexLeon = clasificaciones.indexOf("Leon");
const indexAgostina = clasificaciones.indexOf("Agostina");
clasificaciones.splice(indexLeon, 1); // Eliminar a Leon
clasificaciones.splice(indexAgostina, 0, "Leon"); // Insertar a Leon en la posición de Agostina
mostrarClasificacion();


/* b)Eduardo es descalificado y se elimina del concurso */

document.write(`<h2>Actualizacion de Clasificación : </h2>`);
const indexEduardo = clasificaciones.indexOf('Eduardo');
clasificaciones.splice(indexEduardo,1)
mostrarClasificacion();
/* c)Detrás de Marcos y antes de Franco se clasifican dos nuevas concursantes: Julieta y Martina, en ese orden */

document.write(`<h2>Actualizacion de Clasificación : </h2>`);
const indexMarcos = clasificaciones.indexOf('Marcos');
clasificaciones.splice(indexMarcos + 1, 0 , 'Julieta', 'Martina')

mostrarClasificacion();


/* d)Hay una nueva participante que pasa a encabezar la clasificación: Alicia */

document.write(`<h2>Actualizacion de Clasificación : </h2>`);
clasificaciones.unshift("Alicia")

mostrarClasificacion();

/* e) Ingresa el participante Pepito que va en el ultimo puesto 
 
/* f)muestra la clasificación actualizada (mostrarClasificacion())y comprueba que se ha hecho correctamente  */

document.write(`<h2>Clasificación Final : </h2>`);

clasificaciones.push('Pepito')

mostrarClasificacion();