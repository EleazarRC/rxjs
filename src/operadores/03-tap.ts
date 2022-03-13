import { range, tap, map } from 'rxjs';




const numeros$ = range(1, 5);

numeros$.pipe(
    
    tap( x => {
        console.log('antes', x )
    }),
    map( val => (val * 10).toString() ),
    tap( {
        next: (v) => console.log('después', v),
        complete: () => console.log('Se termino todo')
        
        
    })
    
    

).subscribe( val => console.log('subs', val));
