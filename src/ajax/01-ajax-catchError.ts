import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError, of, pluck } from 'rxjs';

const url = 'https://api.github.com/users?per_page=5';

const manejaErrores = ( response: Response ) => {

    if( !response.ok ) {
        throw new Error( response.statusText )
    }
    
    return response;
}


const atrapaError = ( err: AjaxError ) => {
    console.log('error en: ', err.message );
    return of([]);
}

const fetchPromesa = fetch( url );

//Forma sin rxjs con Fetch Api
/* fetchPromesa.then(manejaErrores)
            .then( resp => resp.json() )
            .then( data => console.log( data ) )
            .catch( err => console.warn('error del catch', err)) */

// Lo mismo pero con AJAX y rxjs 
// Para cualquier error no solo HTTP
ajax( url ).pipe(
    pluck('response'),
/*     catchError( err => { 
        console.warn('error en: ', err);
        return of([]); // para retornar un observable con un array vacío
    }) */
    catchError( atrapaError )
).subscribe( users => console.log('usuarios', users ))