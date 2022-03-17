import { first, fromEvent, take, tap, map } from 'rxjs';


const click$ = fromEvent<PointerEvent>( document, 'click');

click$.pipe(
    tap<PointerEvent>( () => console.log('tap')),
/*     map<PointerEvent, any>( event => ({
        ClientY: event.clientY,
        ClientX: event.clientX
    })), */
    map<PointerEvent, {clientY:number, clientX:number}>( ({clientY, clientX}) => ({
        clientY,
        clientX
    })),
    first<{clientY:number, clientX:number}>( e =>  e.clientY >= 150 )
    )
    .subscribe({
        next: val => console.log('next', val),
        complete: () => console.log('complete')   
    })