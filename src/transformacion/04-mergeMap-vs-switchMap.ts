import { fromEvent, interval, mergeMap, switchMap } from 'rxjs';




const click$ = fromEvent( document, 'click' );
const interval$ = interval(1000);

click$.pipe(
  /* mergeMap( () => interval$ ) add more intervals*/
  switchMap( () => interval$ ) /* close after add new */
  ).subscribe( console.log );