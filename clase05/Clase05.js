// Desestructuración 

let seleccion = ["Messi", "De Paul", "Banini"];

// Accedemos  
console.log (seleccion[2])

// Copiar un dato SIN 
let estefania = seleccion[2];

// Copiar un dato CON Desestructuración

let [leo, rodrigo, estefania2] = seleccion

console.log(leo);
console.log(rodrigo);
console.log(estefania);
console.log(seleccion);

// Desestructuración Objetos

let auto = {
    marca: 'Toyota',
    modelo: 'Corolla',
    año: 2024,
};

// Copiar un dato SIN Desestructuración

let miModelo =  auto.modelo
console.log(`Que Modelo es el Auto: ${miModelo}`)

// Copiar un dato CON Desestructuración

let {marca: miMarca, modelo, año} = auto

console.log(miMarca);
console.log(modelo);
console.log(año);

//Tanto ARRAYS como OBJETOS no se modifican , sino que copio su información en nuevas variables

// SPREAD OPERATOR ARRAY
console.log('SPREAD OPERATOR ARRAY');
let rocky = [ 'Rocky I ', 'Rocky II ', 'Rocky III ']
let creed = [ 'Creed I ', 'Creed II ']

let peliculasBox = [...rocky, ...creed]

console.log( `Array Peliculas de Box -> ${peliculasBox}`)

// SPREAD OPERATOR OBJETO


console.log('SPREAD OPERATOR OBJETO');
let generoAventura = {
    nombreGenero: 'Aventura',
    popularidad: 100
}

let volverAlFuturo = {
    titulo: 'Volver al Futuro',
    ranking: 1 ,
    ...generoAventura

}

console.log(volverAlFuturo);


let volverAlFuturoDos = {
    ...volverAlFuturo,
    año: 1989

}

console.log(volverAlFuturoDos);