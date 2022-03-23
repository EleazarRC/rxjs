import { fromEvent, interval, sample } from "rxjs";




const interval$ = interval(500);
const click$ = fromEvent( document, 'click');


interval$
    .pipe(
        sample(click$) // Emite cuando este emite
    )
.subscribe( console.log );