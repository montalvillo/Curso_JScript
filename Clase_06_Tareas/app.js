var uno = require('./datos');


//La propiedad con el valor original
console.log("La propiedad con el titulo original:   " + (uno.libroFavorito));

// La propiedad manipulada

uno.libroFavorito = "La preseguida hasta el catre"

console.log("Cambio de titulo:  " + uno.libroFavorito);

//La func

uno.libroespañol();
uno.libroruso();





