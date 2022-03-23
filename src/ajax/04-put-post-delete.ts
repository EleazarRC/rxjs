import { ajax  } from "rxjs/ajax";

const url = 'https://httpbin.org/delay/1';

ajax.post( url, {
    id: 1,
    nombre: 'Eleazar'
} , {
    'mi-token': 'ABCD'
})/* .subscribe(console.log); */

const peticion = {
    url,
    method: 'POST',
    headers: {
        'mi-token': 'ABCD123'
    },
    body: {
        id: 1,
        nombre: 'Fernando'
    }
};

ajax( peticion ).subscribe(console.log);