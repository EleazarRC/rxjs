import { fromEvent, map, tap, mergeMap, catchError, of, switchMap, exhaustMap } from 'rxjs';
import { ajax } from 'rxjs/ajax';

// API
// https://reqres.in/

// Helper
const peticionHttpLogin = ( userPass ) => 
            ajax.post('https://reqres.in/api/login?delay=1', userPass ).pipe(
                map( ev => ev.response['token']),
                catchError( err => of('x'))
            );

// Formulario
const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPass = document.createElement('input');
const submitBtn = document.createElement('button');

// Configuraciones
inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';

inputPass.type = 'password';
inputPass.placeholder = 'Password';
inputPass.value = 'cityslicka';

submitBtn.innerHTML = 'Ingresar';

form.append( inputEmail, inputPass, submitBtn );

document.querySelector('body').append( form );

// Streams
const submintForm$ = fromEvent<SubmitEvent >( form, 'submit').pipe(
                                      tap(
                                          ev => ev.preventDefault()
                                      ),
                                      map( ev => ({
                                          email: ev.target[0].value,
                                          password: ev.target[1].value,
                                      })),
                                      /* mergeMap( peticionHttpLogin )  TODAS LAS PETICIONES*/ 
                                      /* switchMap( peticionHttpLogin )  Si hay una activa la cancela y pasa a la siguiente */
                                      exhaustMap( peticionHttpLogin ) // La mejor opción en este caso si hay una activa la acaba 
                                    ); // Comprobar en herramientas navegador (red)


submintForm$.subscribe( token => {
    console.log( token );
    
});