window.addEventListener('load', obtenerDatos);

function obtenerDatos() {

    const nasa_api = '7SeuBqnfX1v2vlbmTSXRPrFAGlnkkTuV0cRmENga';
    const ruta = `https://api.nasa.gov/planetary/apod?api_key=${nasa_api}`;

    fetch(ruta)
        .then(respuesta => respuesta.json())
        .then(resultado => mostrarDatos(resultado));

}
function mostrarDatos({ date, explanation, media_type, title, url }) {

    const titulo = document.querySelector('#titulo');
    titulo.innerHTML = title;
    const fecha = document.querySelector('#fecha');
    fecha.innerHTML = date;
    const descripcion = document.querySelector('#descripcion');
    descripcion.innerHTML = explanation;
    const c_multimedia = document.querySelector('#c_multimedia');
    if (media_type == 'video') {
        c_multimedia.innerHTML = `<iframe class="embed-responsive-item" src="${url}"></iframe>`
    } else {
        c_multimedia.innerHTML = `<img src="${url}" class="img-fluid" alt="${url}">`;

    }

}