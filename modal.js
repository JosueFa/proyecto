document.addEventListener('DOMContentLoaded', function() {
    // Manejador para abrir modales
    document.querySelectorAll('.btn-demo').forEach(button => {
        button.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project');
            const modal = document.getElementById(`modal-${projectId}`);
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Previene el scroll del body
        });
    });

    // Manejador para cerrar modales
    document.querySelectorAll('.close-modal').forEach(closeBtn => {
        closeBtn.addEventListener('click', function() {
            const modal = this.closest('.modal');
            modal.style.display = 'none';
            document.body.style.overflow = ''; // Restaura el scroll
        });
    });

    // Cerrar modal al hacer clic fuera
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.style.display = 'none';
                document.body.style.overflow = '';
            }
        });
    });

    // Navegación de la galería
    document.querySelectorAll('.gallery-btn').forEach(button => {
        button.addEventListener('click', function() {
            const gallery = this.closest('.project-gallery');
            const images = gallery.querySelectorAll('.gallery-img');
            const currentImage = gallery.querySelector('.gallery-img.active');
            let currentIndex = Array.from(images).indexOf(currentImage);

            if (this.classList.contains('next')) {
                currentIndex = (currentIndex + 1) % images.length;
            } else {
                currentIndex = (currentIndex - 1 + images.length) % images.length;
            }

            currentImage.classList.remove('active');
            images[currentIndex].classList.add('active');
        });
    });
}); 