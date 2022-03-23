import { auditTime, fromEvent, interval, map, sample, tap } from "rxjs";




const click$ = fromEvent<PointerEvent>( document, 'click');


click$
    .pipe(
        map( ({x}) => x ),
        tap( x => console.log('tap ' + x)),
        auditTime(2000) // Después de los dos segundos se emite el valor más reciente del observable
    )
.subscribe( console.log );