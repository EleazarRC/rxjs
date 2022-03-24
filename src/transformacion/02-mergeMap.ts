import { of, mergeMap, interval, take, map, fromEvent, takeUntil } from 'rxjs';




const letras$ = of('a', 'b', 'c');

letras$.pipe(
    mergeMap( (letra) => interval(1000).pipe(
      map( i => letra + i),
      take(3)
    ))
)
/* .subscribe({
  next: (v) => console.log( 'Siguiente [next]:', v ),
  error: (e) => console.error('Error', e),
  complete: () => console.info('complete') 
}) */

const mouseDown$ = fromEvent( document, 'mousedown');
const mouseUp$   = fromEvent( document, 'mouseup');
const interval$  = interval();  

mouseDown$.pipe(
  mergeMap( () => interval$.pipe(
    takeUntil( mouseUp$)
  ))
).subscribe( console.log );