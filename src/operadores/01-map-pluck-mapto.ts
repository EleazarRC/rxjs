import { fromEvent, mapTo, Observer, pluck, range } from "rxjs";
import { map } from "rxjs";

//Ejemplo map 1
/* const obs$ = range(1, 5).pipe(
    map<number, string>( resp => (resp * 10).toString() )
);

const observer: Observer<any> = {
    next: (v) => console.log( 'Siguiente [next]:', v ),
    error: (e) => console.error('Error', e),
    complete: () => console.info('complete') 
};

// Esto estaría inyectado con el servicio...
obs$.subscribe( observer ); */

const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup')
                            .pipe(
                                map(
                                    event => event.code
                                )
                            );

keyup$.subscribe( code => console.log('tecla: ', code));


const keyup2$ = fromEvent<KeyboardEvent>( document, 'keyup');


const keyupPluck$ = keyup2$.pipe(
    pluck('target', 'baseURI') // Navegar por un objeto
);

const keyupMapTo$ = keyup2$.pipe(
    mapTo(
        'tecla presionada'
    )
);


keyupPluck$.subscribe( code => console.log('pluck: ', code));
keyupMapTo$.subscribe( code => console.log('pluck: ', code));