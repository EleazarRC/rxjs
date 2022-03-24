import { ajax } from 'rxjs/ajax';
import { startWith } from 'rxjs';



// Referencias
const loadingDiv = document.createElement('div');
loadingDiv.classList.add('loading');
loadingDiv.innerHTML = 'Cargando...';

const body = document.querySelector('body');

// Stream
ajax.getJSON('https://reqres.in/api/users/2?delay=3')
    .pipe(
        startWith(true) // ¿está cargando? Sí por que ha entrado aquí y contesto con un true...
    )
    .subscribe( resp => {

        if( resp === true ) {
            body.append( loadingDiv )
        } else {
            document.querySelector('.loading').remove();
        }
        console.log(resp);
    });