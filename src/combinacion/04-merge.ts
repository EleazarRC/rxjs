import { fromEvent, merge, map } from 'rxjs';

const keyup$ = fromEvent( document, 'keyup');
const click$ = fromEvent( document, 'click');


merge( 
    keyup$.pipe( 
        map<Event, string>( ev => ev.type)
    )
    , 
    click$.pipe( 
        map( ev => ev.type)
    ) 
).subscribe(console.log)


   