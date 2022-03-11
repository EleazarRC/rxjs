import { interval, Observer, timer } from "rxjs";

const observer: Observer<any> = {
    next: (v) => console.log( 'Siguiente [next]:', v ),
    error: (e) => console.error('Error', e),
    complete: () => console.info('complete') 
};

const hoyEn5 = new Date();
hoyEn5.setSeconds( hoyEn5.getSeconds() + 5 )

/* const interval$ = interval(1000); */ // Emite cada segundo
/* const timer$ = timer(2000); a los dos segundos emite */
/* const timer$ = timer(2000, 1000); */ // Así es un interval que inicia en 2 segundos.
/* const timer$ = timer(0); */ // Lo hace al finalizar la cola de tareas
const timer$ = timer(hoyEn5); // A la fecha indicada

console.log('Inicio');

/* interval$.subscribe( observer ); */

timer$.subscribe( observer );

console.log('Fin');