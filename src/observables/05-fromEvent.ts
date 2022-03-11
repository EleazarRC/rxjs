import { fromEvent } from "rxjs";


/* 
    Eventos del DOM
*/
// En la consola se ve el evento que es imprimiendo el evento en consola.
const src1$ = fromEvent<PointerEvent>( document, 'click');
const src2$ = fromEvent<KeyboardEvent>( document.querySelector('body'), 'keyup');

const observer = (
    {
        next: (v) => console.log( 'Siguiente [next]:', v ),
        error: (e) => console.error('Error', e),
        complete: () => console.info('Terminamos la secuencia')
    }
)

src1$.subscribe( ( { x, y} ) => {
    console.log( x, y );

    
} );
src2$.subscribe( evento => {
    console.log(evento.key);
    
} );