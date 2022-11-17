const movimientos = [-500, +200, -300, 800]

// con for

// con foreach

let total = 0
movimientos.forEach((mov, i) => {
    total += mov
    console.log(total, `contador: ${i}`)
 } );

 // con for of
 
 total = 0
for (const mov of movimientos) {
    total += mov
    console.log(total)
}

const suma = movimientos.reduce((acc, mov) => acc + mov, 0)
// acc es el acumulador, el 0 es para que éste empiece en 0, y mov es el movimiento

console.log(suma)

const ingresos = movimientos.filter(mov => mov > 0)
console.log(ingresos)
const suma2 = ingresos.reduce((acc, mov) => acc + mov, 0)
console.log(suma2)

const ingresosTotales = movimientos.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0)
console.log(ingresosTotales)

const movimientosEnEuros = [-500, +200, -300, 800]
const eurToDolar = 1.02
const movimientosEnDolares = movimientosEnEuros.map(mov => mov * eurToDolar)
console.log(movimientosEnDolares)