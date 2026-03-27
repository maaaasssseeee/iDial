document.addEventListener("DOMContentLoaded", () => {
    const transitionLayer = document.getElementById('transition-layer');

    // Al cargar, quitamos la clase 'fade-in' para que el blanco desaparezca
    setTimeout(() => {
        transitionLayer.classList.remove('fade-in');
    }, 100);

    // Seleccionamos todos los enlaces con la clase 'nav-link'
    const links = document.querySelectorAll('.nav-link');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Evitamos el salto inmediato
            let targetUrl = link.href;

            // Activamos el efecto visual de "salida"
            transitionLayer.classList.add('fade-out');

            // Esperamos a que la transición termine antes de cambiar de URL
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 400); // 400ms coincide con el tiempo del CSS
        });
    });
});