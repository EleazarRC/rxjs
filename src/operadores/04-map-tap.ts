import { fromEvent, map, tap } from 'rxjs';

const texto = document.createElement('div');

texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tortor felis, fermentum sed egestas vel, rhoncus ac augue. Donec vitae ligula quam. Morbi sagittis semper dolor, eu ultricies lacus dictum id. Fusce euismod ipsum nunc, porta elementum eros malesuada vel. Phasellus dignissim felis non est interdum, blandit ornare nunc ultrices. Nulla euismod dapibus gravida. Vestibulum tincidunt malesuada fermentum. Aenean erat arcu, dictum eget placerat et, fermentum nec tortor. In lacinia dui non venenatis semper. Integer aliquet pretium libero ut venenatis. Vestibulum faucibus magna justo, sed hendrerit dui ultrices sollicitudin. Suspendisse sed sem sit amet ipsum consectetur vestibulum. Suspendisse aliquet consequat neque, ut ornare sapien tempor eu. Donec bibendum massa nibh, sit amet ullamcorper justo fermentum feugiat. Sed ipsum erat, euismod nec lorem ac, convallis maximus nisl.
<br/><br/>
Nulla egestas turpis consequat tortor rhoncus, a convallis quam consequat. Integer consectetur nisi vitae consectetur sagittis. Cras suscipit sodales tortor quis pretium. Quisque nec magna at odio auctor aliquet. Cras sed massa porta, tincidunt eros eget, faucibus lectus. Pellentesque mauris enim, varius non dui sit amet, hendrerit dapibus odio. Aenean accumsan nulla non odio elementum, quis volutpat eros bibendum. Fusce id ligula ut leo luctus aliquam sit amet sit amet nunc. Vestibulum ultrices, nulla gravida ultrices sodales, massa mi ultrices orci, dignissim fermentum magna orci vitae justo. Quisque sed lorem euismod, pulvinar diam sit amet, venenatis lacus. Nam lectus ligula, viverra in cursus vel, laoreet et erat. Vivamus facilisis nibh sed ex faucibus rhoncus.
<br/><br/>
In tristique faucibus tincidunt. Mauris nibh enim, consectetur ac lectus id, molestie tristique erat. Praesent tortor neque, fermentum vel nunc et, ornare scelerisque metus. Sed et eleifend tellus, et hendrerit lorem. Nulla id eros laoreet, scelerisque justo a, varius erat. Donec tincidunt pharetra augue, ac blandit nulla varius quis. Integer maximus ornare purus, feugiat porttitor ligula. Curabitur feugiat tellus id dolor fringilla varius. Praesent imperdiet egestas tortor quis sollicitudin. Morbi sodales lacinia purus, at euismod libero. Donec in pharetra nunc.
<br/><br/>
Pellentesque id maximus massa. Etiam faucibus lacus diam, quis sodales nunc convallis quis. Ut vitae consequat nisl, at convallis orci. Praesent aliquam ante urna, vel faucibus metus tempus vel. Maecenas porttitor porta risus, eu ultricies odio molestie eget. Aenean at augue ipsum. Etiam tristique id mi in imperdiet. Phasellus quis posuere felis. Nullam ut quam et quam aliquam maximus eget at est. Vivamus eleifend, dui sit amet placerat maximus, neque eros porttitor erat, quis egestas ligula elit sodales ex. Nulla accumsan, nisl sit amet pulvinar scelerisque, orci dui consectetur ex, viverra iaculis arcu erat et ligula. Donec eget est sed risus dictum commodo. Nulla rhoncus felis in sapien tincidunt vestibulum. Vivamus eget porttitor ante, a pharetra libero.
<br/><br/>
Etiam vitae tincidunt turpis. Vivamus et rutrum sem, at bibendum ligula. Vivamus iaculis vel ipsum ut venenatis. Proin aliquet magna metus, et consectetur enim semper a. Sed laoreet tortor in ex convallis, tincidunt semper augue porta. Donec auctor turpis varius, suscipit velit nec, condimentum nibh. Donec convallis interdum vulputate. Nunc vitae commodo velit, sed sodales metus. Donec ac dapibus quam. Pellentesque eget ante a enim ullamcorper posuere eu ultrices magna. Quisque id ipsum non lacus feugiat vehicula. Nunc sit amet arcu ac arcu varius pretium.
`;

const body = document.querySelector('body');

body.append( texto ); 

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append( progressBar );

// Función que calcule el porcentaje
const calcularPorcentajeScroll = ( event ) => {
        
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;
        console.log(( scrollTop / (scrollHeight - clientHeight) ) * 100);
        
    return ( scrollTop / (scrollHeight - clientHeight) ) * 100;  
}

// Streams
const scroll$ = fromEvent( document, 'scroll');

const progress$ = scroll$.pipe(
    map( event => calcularPorcentajeScroll( event )),
);

progress$.subscribe( porcentaje => {
    progressBar.style.width = `${ porcentaje }%`
});