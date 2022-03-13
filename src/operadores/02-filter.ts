import { Observer, of, range, from, fromEvent, map } from 'rxjs';
import { filter, pluck } from "rxjs/operators"


/* range(1,10).pipe(
        filter( val => val % 2 === 1 ) // si es verdadero pasará
).subscribe( console.log ); */

range(20,30).pipe(
        filter( (val, i) => {
            console.log('indice', i);
            return val % 2 === 1
            } ) // si es verdadero pasará
)//.subscribe( console.log );



interface Personaje {
    tipo: string;
    nombre: string;
}




const personajes: Personaje[] = [
    {
        tipo: 'heroe',
        nombre: 'Batman'
    },
    {
        tipo: 'heroe',
        nombre: 'Robin'
    },
    {
        tipo: 'villano',
        nombre: 'Joker'
    },
]

const observer: Observer<any> = {
    next: (v) => console.log( 'Siguiente [next]:', v ),
    error: (e) => console.error('Error', e),
    complete: () => console.info('complete') 
};

const myRange$ = from<Personaje[]>( personajes )
            .pipe(
                /* pluck('nombre') */
                filter( personaje => {
                    return personaje.tipo === 'heroe'
                }),
                /* pluck('nombre') */
            );


myRange$.subscribe( observer );


const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup' )
                .pipe(
                    map( event => event.code ),
                    filter( key => key === 'Enter')
                );


keyup$.subscribe( console.log );
