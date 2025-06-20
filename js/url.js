// URL DE LOS BOTONES DEL CARRUSEL
document.querySelectorAll('.btn-Jamahal-Rountree').forEach(item => {
    item.addEventListener('click', () => {
        const url = item.getAttribute('data-url');
        if (url) {
            window.open(url, '_blank');
        }
    });
});
document.querySelectorAll('.btn-Topuria-Oliveira').forEach(item => {
    item.addEventListener('click', () => {
        const url = item.getAttribute('data-url');
        if (url) {
            window.open(url, '_blank');
        }
    });
});

// URL DE LAS NOTICIAS Y TENDENCIAS
document.querySelectorAll('.contenedor-tendencias').forEach(item => {
    item.addEventListener('click', () => {
        const url = item.getAttribute('data-url');
        if (url) {
            window.open(url, '_blank');
        }
    });
});

document.querySelectorAll('.contenido').forEach(item => {
    item.addEventListener('click', () => {
        const url = item.getAttribute('data-url');
        if (url) {
            window.open(url, '_blank');
        }
    });
});

// URL DE PATROCINADORES
document.querySelectorAll('.ufc-stake').forEach(item => {
    item.addEventListener('click', () => {
        const url = item.getAttribute('data-url');
        if (url) {
            window.open(url, '_blank');
        }
    });
});

document.querySelectorAll('.ufc-aviator').forEach(item => {
    item.addEventListener('click', () => {
        const url = item.getAttribute('data-url');
        if (url) {
            window.open(url, '_blank');
        }
    });
});

// URL DE VER MÁS
document.querySelectorAll('.btn-verMas').forEach(item => {
    item.addEventListener('click', () => {
        const url = item.getAttribute('data-url');
        if (url) {
            window.open(url, '_blank');
        }
    });
});

// URL DE CONTACTO
document.querySelectorAll('.contacto-footer').forEach(item => {
    item.addEventListener('click', () => {
        const url = item.getAttribute('data-url');
        if (url) {
            window.open(url, '_blank');
        }
    });
});