


// Combina las últimas emisiones de los observables.
// última salida del obs$1 y última del obs$2

import { fromEvent, map, combineLatest } from 'rxjs';

/* const keyup$ = fromEvent( document, 'keyup');
const click$ = fromEvent( document, 'click');


combineLatest( 
   [ keyup$.pipe( 
        map<Event, string>( ev => ev.type)
    )
    , 
    click$.pipe( 
        map( ev => ev.type)
    ) ]
).subscribe(console.log) */

const input1 = document.createElement('input');
const input2 = document.createElement('input');

input1.placeholder = 'email@gmail.com';
input2.placeholder = '***************';
input2.type = 'password';

document.querySelector('body').append( input1, input2 );

// Helper
const getInputStream = ( elem: HTMLElement ) => {
    return fromEvent<KeyboardEvent>(elem, 'keyup').pipe(
        map( ev => ev.target['value'] )
    )
}

combineLatest(
    [getInputStream( input1),
    getInputStream( input2)]
).subscribe(console.log)