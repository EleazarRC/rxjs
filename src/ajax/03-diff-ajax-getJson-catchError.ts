import { catchError, of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";


const url = 'https://httpbin.org/delay/1';


const atrapaError = ( err: AjaxError ) => {
    console.warn('error en: ', err.message );
    return of({
        ok: false,
        usuarios: []
    });
}


/* const obs$ = ajax.getJSON( url ).pipe(
    catchError( atrapaError ));
const obs2$ = ajax( url ).pipe(
    catchError( atrapaError ));
 */
const obs$ = ajax.getJSON( url );
const obs2$ = ajax( url );

/* obs2$.subscribe( data => console.log('ajax: ', data )); */
obs$.pipe(
    catchError( atrapaError )
).subscribe( {
    next: (v) => console.log( 'Siguiente [next]:', v ),
    error: (e) => console.error('Error', e),
    complete: () => console.info('complete') 
} );