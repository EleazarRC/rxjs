import { concat, interval, take, of } from 'rxjs';



const interval$ = interval(1000);

// Pone observables en cola, cuando acaba uno va a por el siguiente.
concat(
    interval$.pipe( take(3) ),
    interval$.pipe( take(2) ),
    [1,2,3,4,5,],
    of(1),
    of({nombre:  'pepe'})

).subscribe( console.log )