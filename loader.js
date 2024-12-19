// Mostrar loader cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    const loaderWrapper = document.querySelector('.loader-wrapper');
    
    // Forzar la visualización del loader
    loaderWrapper.classList.remove('hidden');
    
    // Esperar 2 segundos antes de ocultar el loader
    setTimeout(() => {
        loaderWrapper.classList.add('fade-out');
        
        // Después de la transición, ocultar completamente
        setTimeout(() => {
            loaderWrapper.classList.add('hidden');
            
            // Iniciar la animación del texto después de que el loader desaparezca
            const glitchText = document.querySelector('.glitch');
            if (glitchText) { // Verificamos si estamos en la página de inicio
                glitchText.classList.add('animate');
                setTimeout(() => {
                    glitchText.classList.add('active');
                }, 500); // Añadimos un pequeño retraso para el efecto glitch
            }
        }, 500);
    }, 2000);
});

// Mostrar loader antes de cambiar de página
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(e) {
        // Solo para enlaces internos
        if (this.getAttribute('href').startsWith('#')) return;
        
        e.preventDefault();
        const href = this.getAttribute('href');
        const loaderWrapper = document.querySelector('.loader-wrapper');
        
        // Mostrar loader
        loaderWrapper.classList.remove('hidden');
        loaderWrapper.classList.remove('fade-out');
        
        // Cambiar de página después de 2 segundos
        setTimeout(() => {
            window.location.href = href;
        }, 2000);
    });
}); 