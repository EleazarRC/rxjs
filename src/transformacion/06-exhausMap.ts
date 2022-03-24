import { interval, take, fromEvent, switchMap, concatMap, exhaustMap } from 'rxjs';



const interval$ = interval(500).pipe( take(3));

const click$ = fromEvent( document, 'click');


click$.pipe(
/*   switchMap( () => interval$ ), */
  exhaustMap( () => interval$ ), // ignora cualquier suscripción si tiene una activa.
).subscribe( console.log );