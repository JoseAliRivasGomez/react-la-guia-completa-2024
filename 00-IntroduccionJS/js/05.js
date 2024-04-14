// Objetos - Manipulación
const producto = {
    nombre : "Tablet",
    precio: 300,
    disponible: false
}

// Object.freeze(producto)
// Object.seal(producto)

// Reescribir un valor
producto.disponible = true

// Sino existe, lo va a añadir
producto.imagen = 'imagen.jpg'

// Eliminar propiedad
delete producto.precio

console.log(producto)