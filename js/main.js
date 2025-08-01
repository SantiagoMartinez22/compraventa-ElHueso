// ===== VARIABLES GLOBALES =====
let slideActual = 0;
const totalSlides = 3;

// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('Página cargada - Iniciando funciones...');
    iniciarSlider();
    iniciarNavegacion();
    iniciarFormulario();
    iniciarBotonesSlider();
});

// ===== SLIDER =====
function iniciarSlider() {
    console.log('Iniciando slider...');
    // Cambio automático cada 5 segundos
    setInterval(cambiarSlide, 5000);
}

function cambiarSlide() {
    console.log('Cambiando slide automáticamente...');
    slideActual++;
    if (slideActual >= totalSlides) {
        slideActual = 0;
    }
    mostrarSlide(slideActual);
}

function changeSlide(direccion) {
    console.log('Cambio manual de slide:', direccion);
    slideActual += direccion;
    
    if (slideActual >= totalSlides) {
        slideActual = 0;
    }
    if (slideActual < 0) {
        slideActual = totalSlides - 1;
    }
    
    mostrarSlide(slideActual);
}

function currentSlide(numero) {
    console.log('Slide seleccionado:', numero);
    slideActual = numero - 1;
    mostrarSlide(slideActual);
}

function mostrarSlide(indice) {
    // Ocultar todos los slides
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    slides.forEach(function(slide) {
        slide.classList.remove('active');
    });
    
    dots.forEach(function(dot) {
        dot.classList.remove('active');
    });
    
    // Mostrar slide actual
    if (slides[indice]) {
        slides[indice].classList.add('active');
    }
    if (dots[indice]) {
        dots[indice].classList.add('active');
    }
}

// ===== BOTONES DEL SLIDER =====
function iniciarBotonesSlider() {
    console.log('Iniciando botones del slider...');
    const botones = document.querySelectorAll('.slide-content .btn');
    
    botones.forEach(function(boton) {
        boton.addEventListener('click', function() {
            const texto = this.textContent;
            console.log('Botón clickeado:', texto);
            
            if (texto.includes('Catálogo')) {
                irASeccion('vehiculos');
            } else if (texto.includes('Crédito')) {
                irASeccion('contacto');
            } else {
                irASeccion('nosotros');
            }
        });
    });
}

function irASeccion(seccion) {
    const elemento = document.getElementById(seccion);
    if (elemento) {
        elemento.scrollIntoView({ behavior: 'smooth' });
    }
}

// ===== FILTROS =====
function filterCars(categoria, boton) {
    console.log('Filtrando por:', categoria);
    
    // Quitar active de todos los botones
    const botones = document.querySelectorAll('.filter-btn');
    botones.forEach(function(btn) {
        btn.classList.remove('active');
    });
    
    // Agregar active al botón clickeado
    if (boton) {
        boton.classList.add('active');
    }
    
    // Filtrar carros
    const carros = document.querySelectorAll('.car-card');
    carros.forEach(function(carro) {
        const categoriaDelCarro = carro.getAttribute('data-category');
        
        if (categoria === 'all' || categoriaDelCarro === categoria) {
            carro.style.display = 'block';
        } else {
            carro.style.display = 'none';
        }
    });
}

// ===== MODAL =====
function openModal(titulo, precio) {
    console.log('Abriendo modal:', titulo, precio);
    
    const modal = document.getElementById('modal');
    const modalTitulo = document.getElementById('modal-title');
    const modalPrecio = document.getElementById('modal-price');
    
    if (modal && modalTitulo && modalPrecio) {
        modalTitulo.textContent = titulo;
        modalPrecio.textContent = precio;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Evitar scroll
    } else {
        console.error('No se encontraron elementos del modal');
    }
}

function closeModal() {
    console.log('Cerrando modal');
    const modal = document.getElementById('modal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restaurar scroll
    }
}

// Cerrar modal con click fuera
window.addEventListener('click', function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
});

// Cerrar modal con tecla ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// ===== NAVEGACIÓN =====
function iniciarNavegacion() {
    console.log('Iniciando navegación...');
    
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('nav-menu');
    
    if (hamburger && menu) {
        hamburger.addEventListener('click', function() {
            console.log('Toggle menú');
            menu.classList.toggle('active');
        });
        
        // Cerrar menú al hacer click en enlaces
        const enlaces = document.querySelectorAll('.nav-menu a');
        enlaces.forEach(function(enlace) {
            enlace.addEventListener('click', function() {
                menu.classList.remove('active');
            });
        });
    }
}

// ===== FORMULARIO =====
function iniciarFormulario() {
    console.log('Iniciando formulario...');
    
    const formulario = document.getElementById('contactForm');
    if (formulario) {
        formulario.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Formulario enviado');
            alert('¡Mensaje enviado exitosamente! Nos pondremos en contacto contigo pronto.');
            formulario.reset();
        });
    }
}

// ===== NAVEGACIÓN SUAVE =====
document.querySelectorAll('a[href^="#"]').forEach(function(enlace) {
    enlace.addEventListener('click', function(e) {
        e.preventDefault();
        const destino = this.getAttribute('href').substring(1);
        irASeccion(destino);
    });
}); 