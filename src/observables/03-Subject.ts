import { Observable, Observer, Subject } from 'rxjs'


const observer: Observer<any> = {
    next: (v) => console.log( 'Siguiente [next]:', v ),
    error: (e) => console.error('Error', e),
    complete: () => console.info('complete') 
};

// Cold observable
const intervalo$ = new Observable<number>( subs => {

   const intervalID = setInterval( 
            () => subs.next( Math.random() ), 1000)


    return () => {
        clearInterval( intervalID );
        console.log('Intervalo Destruido');
        
    };

});

/* 
1- Casteo múltiple
2- También es un observer
3- Next, error, complete...
*/
const subject$ = new Subject();

const intervalSubject = intervalo$.subscribe( subject$ );


/* const subs1 = intervalo$.subscribe( rnb => console.log('sub1', rnb));
const subs2 = intervalo$.subscribe( rnb => console.log('sub2', rnb)); */
const subs1 = subject$.subscribe( observer );
const subs2 = subject$.subscribe( observer );


setTimeout( () => {

    // Hot Observable
    subject$.next(10);

    subject$.complete();

    intervalSubject.unsubscribe();

}, 3500)