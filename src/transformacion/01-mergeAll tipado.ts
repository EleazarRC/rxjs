import { fromEvent, debounceTime, map, pluck, mergeAll, mergeMap, Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { GithubUser } from '../interfaces/github-user.interface';
import { GithubUsersResponse } from '../interfaces/github-users.interface';



// Referencias
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append( textInput, orderList );

// Helpers
const mostrarUsuarios = ( usuarios: GithubUser[] ) => {
    orderList.innerHTML = '';

    for( const usuario of usuarios ) {

      const li  = document.createElement('li');
      const img = document.createElement('img');
      img.src = usuario.avatar_url;

      const anchor  = document.createElement('a');
      anchor.href   = usuario.html_url;
      anchor.text   = 'Ver página';
      anchor.target = '_blank';

      li.append( img );
      li.append( usuario.login + ' ' );
      li.append( anchor );

      orderList.append(li);

    }
}


// Streams
const input$ = fromEvent<KeyboardEvent>( textInput, 'keyup' );

// https://app.quicktype.io/
input$.pipe(
    debounceTime<KeyboardEvent>(500),
    map<KeyboardEvent, string>(event => (event.target as HTMLInputElement).value),
    map<string, Observable<GithubUsersResponse>>(text => ajax.getJSON(
      `https://api.github.com/search/users?q=${text}`
    )),
    mergeAll<Observable<GithubUsersResponse>>(),
    map<GithubUsersResponse, GithubUser[]>(item => item.items)
  ).subscribe(users => {
    /* console.log('users', users);
    console.log( 'user[0]: ', users[0].score ); */

    mostrarUsuarios(users);
  });