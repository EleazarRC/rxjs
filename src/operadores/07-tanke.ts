import { of, take, tap } from 'rxjs';


const numbers$ = of(1,2,3,4,5)
                .pipe(
                    tap( t=> {
                        console.log('tap of', t) // para demostrar que se acaba el observable tmb
                        
                    })
                );


numbers$.pipe(
    tap( t=> {
        console.log('tap', t) // para demostrar que se acaba el observable tmb
        
    }),
    take(3)
)
    .subscribe({
        next: val => console.log('next: ' + val),
        complete: () => console.log('Completado')   
    });
