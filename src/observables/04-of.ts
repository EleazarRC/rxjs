import { of } from 'rxjs';


//const obs$ = of(1,2,3,4,5,6);
/* const obs$ = of([1,2,3,4,5,6]); */
const obs$ = of( [1,2], {a:1, b:2}, function(){}, true, Promise.resolve(true));

console.log('Inicio del Obs$');

obs$.subscribe (
    {
        next: (v) => console.log( 'Siguiente [next]:', v ),
        error: (e) => console.error('Error', e),
        complete: () => console.info('Terminamos la secuencia')
    }
)
    
console.log('Final Obs$');