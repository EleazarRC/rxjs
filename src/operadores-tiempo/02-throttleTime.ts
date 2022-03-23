import { debounceTime, fromEvent, pluck, distinctUntilChanged, throttleTime, asyncScheduler } from 'rxjs';



const click$ = fromEvent( document, 'click');
click$.pipe(
    throttleTime(1000) //Emitirá el evento y no emitirá nada más hasta que no pasen los ms
)                       
//.subscribe(console.log);

//Ejemplo 2
const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent >(input , 'keyup');

input$.pipe( // Para hacer peticiones HTTP ideal
    /* throttleTime(500), */ //Primera emisión y no otra asta 500ms
    throttleTime(500, asyncScheduler, {
        leading: true,
        trailing: true
    }),
    pluck('target', 'value'),
    distinctUntilChanged() // Y que sea diferente a la anterior.
).subscribe( console.log )