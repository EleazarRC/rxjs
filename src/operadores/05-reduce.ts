


const numbers = [1,2,3,4,5];
const totalReduce = ( acumulador: number, valorActual: number ) => {
    return acumulador + valorActual;
}
const total = numbers.reduce( totalReduce, 0 );
/* console.log(total); */

import { interval, reduce, take, tap } from 'rxjs';


interval(1000).pipe(
        take(3), // Coge las emisiones especificadas
        tap( console.log ), // Vemos las emisiones
        reduce( totalReduce ) // Hacemos un reduce (podemos poner directamente lo de la función aquí)
    )
    .subscribe({
        next: val => console.log('next: ' + val),
        complete: () => console.log('Completado')   
    })