import { asyncScheduler, observeOn, of, range } from "rxjs";

/* const src$ = of(1,2,3,4,5); */
/* const src$ = range(1,5); SINCRONO*/
/* const src$ = range(1,5, asyncScheduler);  OBSOLETO*/
const src$ = range(-5,10).pipe(observeOn(asyncScheduler)); /* Asincrono */


console.log('inicio');

src$.subscribe( console.log );


console.log('fin');