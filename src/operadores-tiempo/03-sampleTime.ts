import { fromEvent, map, sampleTime } from 'rxjs';



const click$ = fromEvent<PointerEvent>( document, 'click');


click$.pipe(
    sampleTime(2000), //Arriba para que no procese innecesariamente.
    map( ({x, y}) => ({x, y}) ),

    ).subscribe( console.log );