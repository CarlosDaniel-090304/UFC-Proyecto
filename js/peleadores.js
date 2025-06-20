const inputBusqueda = document.querySelector('.contenedor-busqueda input');
const botonBuscar = document.querySelector('.contenedor-busqueda button');
const contenedor = document.querySelector('.peleadores');
let listaPeleadores = [];

// Obtener peleadores desde la API
fetch('https://api.octagon-api.com/fighters')
    .then(response => {
        if (!response.ok) throw new Error('Error al obtener peleadores');
        return response.json();
    })
    .then(data => {
        listaPeleadores = Object.values(data);
        mostrarPeleadores(listaPeleadores); // Mostrar todos al inicio
    })
    .catch(error => {
        console.error('Error:', error);
    });

// Función para mostrar las cartas
function mostrarPeleadores(lista) {
    contenedor.innerHTML = '';

    const maxPeleadores = 35;
    const listaLimitada = lista.slice(0, maxPeleadores); // Solo 7 filas x 5 columnas

    if (listaLimitada.length === 0) {
        contenedor.innerHTML = '<p class="error-peleadores">No se encontraron peleadores.</p>';
        return;
    }

    listaLimitada.forEach(peleador => {
        const carta = document.createElement('div');
        carta.classList.add('carta-peleador');

        carta.innerHTML = `
            <img src="${peleador.imgUrl}" alt="${peleador.name}">
            <h3>${peleador.name}</h3>
            <p><strong>Categoría:</strong> ${peleador.category}</p>
            <p><strong>Récord:</strong> ${peleador.wins}-${peleador.losses}-${peleador.draws}</p>
        `;

        contenedor.appendChild(carta);
    });
}


// Al hacer clic en el botón buscar
botonBuscar.addEventListener('click', () => {
    const termino = inputBusqueda.value.trim().toLowerCase();

    if (termino === '') {
        mostrarPeleadores(listaPeleadores); // Mostrar todos si está vacío
    } else {
        const resultados = listaPeleadores.filter(peleador =>
            peleador.name.toLowerCase().includes(termino)
        );
        mostrarPeleadores(resultados);
    }
});
