// Animaciones al hacer scroll
const observador = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            if (entry.target.classList.contains('glitch')) {
                startGlitchEffect(entry.target);
            }
        }
    });
}, {
    threshold: 0.1
});

// Elementos a observar
document.querySelectorAll('.fade-in, .proyecto-card, .glitch').forEach(el => {
    el.classList.add('fade-in');
    observador.observe(el);
});

// Efecto Glitch para títulos
function startGlitchEffect(element) {
    let originalText = element.textContent;
    let iterations = 0;
    
    const interval = setInterval(() => {
        element.textContent = originalText
            .split("")
            .map((letter, index) => {
                if (index < iterations) {
                    return originalText[index];
                }
                return String.fromCharCode(65 + Math.floor(Math.random() * 26));
            })
            .join("");

        if (iterations >= originalText.length) {
            clearInterval(interval);
        }

        iterations += 1/3;
    }, 30);
}

// Smooth Scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    if (anchor.getAttribute('href').startsWith('#')) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
});

// Parallax Effect en Hero
document.addEventListener('mousemove', (e) => {
    const shapes = document.querySelector('.geometric-shapes');
    if (shapes) {
        const x = (window.innerWidth - e.pageX) / 100;
        const y = (window.innerHeight - e.pageY) / 100;
        shapes.style.transform = `translateX(${x}px) translateY(${y}px)`;
    }
});

// Formulario de contacto con animación
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Animación de envío
    const button = this.querySelector('button');
    const originalText = button.textContent;
    
    button.disabled = true;
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    
    // Simular envío (reemplazar con tu lógica de envío real)
    setTimeout(() => {
        button.innerHTML = '<i class="fas fa-check"></i> ¡Enviado!';
        this.reset();
        
        setTimeout(() => {
            button.disabled = false;
            button.textContent = originalText;
        }, 2000);
    }, 1500);
});

// Animación de carga inicial
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loaded');
    
    // Iniciar efecto glitch en el título principal
    const mainTitle = document.querySelector('.glitch');
    if (mainTitle) {
        setTimeout(() => {
            startGlitchEffect(mainTitle);
        }, 500);
    }
}); 