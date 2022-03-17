import { from, map, reduce, scan } from 'rxjs';



const numbers = [1,2,3,4,5];

/* const accumulatedTotal = ( acc, cur ) => {
    return acc + cur;
} */
const accumulatedTotal = (acc:number, cur:number) => acc + cur;

// Reduce
from( numbers ).pipe(
                    reduce( accumulatedTotal )
                    )
                    .subscribe( console.log );

// Scan
from( numbers ).pipe(
    scan( accumulatedTotal )
    )
    .subscribe( console.log );


// Redux (Manejar el estado real de mi aplicación en un único objeto)
interface User {
    id?: string,
    authenticated?: boolean,
    token?: string,
    age?: number
};

const users: User[] = [
    {
        id: '1',
        authenticated: false,
        token: null
    },
    {
        id: '1',
        authenticated: true,
        token: 'ABC'
    },
    {
        id: '1',
        authenticated: true,
        token: 'ABC123'
    }

];

const state$ = from<User[]>( users ).pipe(
    scan<User, User>( (acc, cur) => {
        return {...acc, ...cur}
    }, { age: 33 })
)

const id$ = state$.pipe(
    map( state => state )
)

id$.subscribe( console.log );