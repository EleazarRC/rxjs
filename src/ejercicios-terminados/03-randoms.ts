import { interval, Observer, Subject } from 'rxjs';
import { take, map } from 'rxjs/operators';
/**
 * Ejercicio: Realizar que los dos observables finales, 
 * emitan exactamente el mismo valor
 * 
 * Tip: Hot Observable? subjects?
 */

(() =>{

  // == NO TOCAR este bloque ====================
  const reloj$ = interval(1000).pipe(
    take(5),
    map( val => Math.round(Math.random() * 100) )
  );
  // No tocar la creación del observable
  // ============================================

  const observer: Observer<any> = {
    next: (v) => console.log( 'Siguiente [next]:', v ),
    error: (e) => console.error('Error', e),
    complete: () => console.info('complete') 
  };
  
  
  // Estos dos observables deben de emitir exactamente los mismos valores
/*   reloj$.subscribe( val => console.log('obs1', val) );
  reloj$.subscribe( val => console.log('obs2', val) ); */

  const subject$ = new Subject();
  reloj$.subscribe( subject$ );

  /* const subs1 = subject$.subscribe( observer );
  const subs2 = subject$.subscribe( observer ); */

  subject$.subscribe( val => console.log('obs1', val) );
  subject$.subscribe( val => console.log('obs2', val) );
  


})();

		