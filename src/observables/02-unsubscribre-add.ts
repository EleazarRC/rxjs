import { Observable, Observer } from 'rxjs'


const observer: Observer<any> = {
    next: (v) => console.log( 'Siguiente [next]:', v ),
    error: (e) => console.warn('Error', e),
    complete: () => console.info('complete') 
};

const intervalo$ = new Observable<number>( subscriber => {

    let contador: number = 0;
    // Crear un contador cada segundo 1, 2, 3, 4 ...
    const interval = setInterval( () => {
        subscriber.next(contador + 1);
        contador ++;
        console.log(contador);
        
    }, 1000 );

    setTimeout(() => {
        subscriber.complete();
    }, 2500 );

    // Lo que se retorna al hacer unsubscribe
    // Sino no finalizamos el interval
    return () => {
        clearInterval( interval ) 
        console.log('Intervalo Destruido');
        
    }   

});

const subscription1 = intervalo$.subscribe( observer );
const subscription2 = intervalo$.subscribe( observer );
const subscription3 = intervalo$.subscribe( observer );

subscription1.add( subscription2 );
subscription1.add( subscription3 );

setTimeout(() => {
    subscription1.unsubscribe();
    /* subscription2.unsubscribe();
    subscription3.unsubscribe(); */

    console.log('completado timeout');
    
}, 6000)