const saldo = 1000
const pagar = 1200
const tarjeta = false

/**
 * Logical Or y Logical And
 * || Or - Al menos una se cumple
 * && And - Revisa que todas se cumplan
 */

if(saldo > pagar || tarjeta) {
    console.log('Puedes Pagar')
}  else {
    console.log('No no puedes pagar')
}