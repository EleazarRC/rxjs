import { of, from, Observer } from "rxjs";

/* 

of = toma argumentos y genera una secuencia
from = array, primise, iterable, observable

*/

const observer: Observer<any> = {
    next: (v) => console.log( 'Siguiente [next]:', v ),
    error: (e) => console.error('Error', e),
    complete: () => console.info('complete') 
};

// El asterisco es para decir que es una función generadora.
const miGenerador = function*(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const miIterable = miGenerador();

/* for( let id of miIterable ){
    console.log(id);   
} */

from( miIterable ).subscribe( observer );


/* const source$ = from([1,2,3,4,5]);
const source2$ = of(...[1,2,3,4,5]); */
/* const source$ = from('Eleazar'); */

// No se recomienda fetch con rjx hay otra forma
const source$ = from( fetch('https://api.github.com/users/klerith'));

/* source$.subscribe( async(resp) => {

    console.log( resp );

    const dataRespuesta = await resp.json();

    console.log(dataRespuesta);
    
}); */

/* source$.subscribe( observer ); */
