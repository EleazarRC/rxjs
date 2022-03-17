import { fromEvent, map, takeWhile } from 'rxjs';

const click$ = fromEvent<PointerEvent>(document , 'click');

click$.pipe(
    map( ({x, y}) => ({x, y}) ),
    /* takeWhile( ({ y }) => y <= 150 ) */
    /* para que lo incluya el último movimiento */
    takeWhile( ({ y }) => y <= 150, true )
)
.subscribe({
    next: val => console.log('Next:', val), 
    complete: () => console.log('Complete')    
})