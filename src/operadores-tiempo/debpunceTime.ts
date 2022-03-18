import { debounceTime, fromEvent, pluck, distinctUntilChanged } from 'rxjs';



const click$ = fromEvent( document, 'click');
click$.pipe(
    debounceTime(3000) // cada evento reinicia los 3000ms cuando no hay evento en los últimos 3000ms se emite el último evento.
)                       //Ej. Si algo deja de emitir Xms me envía la última emisión
/* .subscribe(console.log); */

//Ejemplo 2
const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent >(input , 'keyup');

input$.pipe( // Para hacer peticiones HTTP ideal
    debounceTime(500), // Ultima emisión en los últimos 500ms
    pluck('target', 'value'),
    distinctUntilChanged() // Y que sea diferente a la anterior.
).subscribe( console.log )