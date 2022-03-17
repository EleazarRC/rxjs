
/* Sigue recogiendo los eventos,
hasta que el segundo observable 
emita su valor */

import { fromEvent, interval, skip, takeUntil, tap } from 'rxjs';

const button = document.createElement('button');
button.innerHTML = 'Detener Timer';

document.querySelector('body').append(button);

const counter$ = interval(1000);

/* const clickBtn$ = fromEvent( button, 'click'); */
const clickBtn$ = fromEvent( button, 'click')
                    .pipe(
                        tap( () => console.log('tap antes de skip')),
                        skip(1), // Saltarse dicha cantidad de eventos.
                        tap( () => console.log('tap después de skip'))
                    );

counter$.pipe(
     takeUntil( clickBtn$ )
)
    .subscribe({
        next: val => console.log('next: ', val),
        complete: () => console.log('complete')  
    });
