import { distinct, of, from } from 'rxjs';

const numbers$ = of(1,'1',1,3,3,2,2,4,4,5,3,1)

numbers$.pipe(
    distinct() // usa la triple equidad ===
).subscribe(console.log);

interface Personaje {
    nombre: string;
}

const personajes: Personaje[] = [
    {
        nombre: 'A'
    },
    {
        nombre: 'B'
    },
    {
        nombre: 'B'
    },
    {
        nombre: 'B'
    },
    {
        nombre: 'C'
    },
    {
        nombre: 'C'
    },
    {
        nombre: 'C'
    },
    {
        nombre: '1'
    },
    {
        nombre: '1'
    },
    {
        nombre: '2'
    },
    {
        nombre: '2'
    },
]

from( personajes ).pipe(
    distinct( p => p.nombre ) // porque cada objeto aunque tenga el mismo nombre es un objeto completamente diferente.
).subscribe( console.log );