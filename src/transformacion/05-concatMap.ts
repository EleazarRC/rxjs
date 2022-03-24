import { interval, take, fromEvent, switchMap, concatMap } from 'rxjs';



const interval$ = interval(500).pipe( take(3));

const click$ = fromEvent( document, 'click');


click$.pipe(
/*   switchMap( () => interval$ ), */
  concatMap( () => interval$ ), // Cuando acaba uno va a por el otro.
).subscribe( console.log );