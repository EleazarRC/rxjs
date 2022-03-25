import { of, from, map } from 'rxjs';
/**
 * Ejercicio: 
 * El objetivo de es realizar la misma impresión, pero usando observables
 * Nota: NO hay que usar el ciclo "FOR OF", usar un observable y llamar la función capitalizar
 */

/**
 * Salida esperada:
 * Batman
 * Joker
 * Doble Cara
 * Pingüino
 * Hiedra Venenosa
 */
 (() =>{


    const nombres$ = from(['batman', 'joker', 'doble cara', 'pingüino', 'hiedra venenosa']);
  
    //const capitalizar = (nombre: string) => nombre.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
    const capitalizar = (nombre: string) => nombre.charAt(0).toUpperCase() + nombre.slice(1);
  
    // Cambiar este FOR OF, por un observable y capitalizar las emisiones
   /*  for( let nombre of nombres ) {
      console.log( capitalizar(nombre) )
    } */
  
    nombres$.pipe(
        map( capitalizar )
    ).subscribe( console.log )
  
  
  
  
  
  })();
  
  