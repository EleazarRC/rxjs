import { ajax } from "rxjs/ajax";


const url = 'https://httpbin.org/delay/1';



const obs$ = ajax.getJSON( url, {
    'content-Type': 'application/json',
    'mi-token': 'ABCD'
} );

obs$.subscribe( data => console.log('data: ', data ));