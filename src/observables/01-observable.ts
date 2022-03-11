import { Observable, Observer } from 'rxjs'


const observer: Observer<any> = {
    next: (v) => console.log( 'Siguiente [next]:', v ),
    error: (e) => console.error('Error', e),
    complete: () => console.info('complete') 
};



/* const obs$ = Observable.create(); */
const obs$ = new Observable<string>( subscriber => {

    subscriber.next('Hola');
    subscriber.next('Mundo');

    // Forzar un error
    /* const a = undefined;
    a.nombre = 'Fernando'; */

    subscriber.complete(); // Le digo a los subscribers que no emito más

    subscriber.next('Hola');
    subscriber.next('Mundo');
});

obs$.subscribe( observer );

/* obs$.subscribe( resp => console.log(resp)) */
/* obs$.subscribe( console.log ); */
/* obs$.subscribe( 
    {
        next: (v) => console.log(v),
        error: (e) => console.error('Error', e),
        complete: () => console.info('complete') 
    }  
); */
