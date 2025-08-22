// ===== VARIABLES GLOBALES =====
let slideActual = 0;
const totalSlides = 3;

// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Página cargada - Iniciando funciones...');
    
    // Debug: Verificar elementos
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const images = document.querySelectorAll('img');
    
    console.log('📊 Debug Info:');
    console.log('  - Slides encontrados:', slides.length);
    console.log('  - Dots encontrados:', dots.length);
    console.log('  - Imágenes encontradas:', images.length);
    
    // Debug: Verificar funciones globales
    console.log('🔧 Funciones globales:');
    console.log('  - window.changeSlide:', typeof window.changeSlide);
    console.log('  - window.currentSlide:', typeof window.currentSlide);
    console.log('  - window.openModal:', typeof window.openModal);
    console.log('  - window.filterCars:', typeof window.filterCars);
    
    // Verificar rutas de imágenes
    images.forEach((img, index) => {
        console.log(`  - Imagen ${index + 1}: ${img.src}`);
        img.onerror = function() {
            console.error(`❌ Error cargando imagen: ${this.src}`);
        };
        img.onload = function() {
            console.log(`✅ Imagen cargada: ${this.src}`);
        };
    });
    
    iniciarSlider();
    iniciarNavegacion();
    iniciarFormulario();
    
    console.log('✅ Inicialización completada');
});

// ===== SLIDER =====
function iniciarSlider() {
    console.log('Iniciando slider...');
    // Inicializar el primer slide como activo
    mostrarSlide(0);
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

// Hacer las funciones globales para que funcionen con onclick
window.changeSlide = function(direccion) {
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

window.currentSlide = function(numero) {
    console.log('Slide seleccionado:', numero);
    slideActual = numero - 1;
    mostrarSlide(slideActual);
}

function mostrarSlide(indice) {
    console.log('Mostrando slide:', indice);
    
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    console.log('Slides encontrados:', slides.length, 'Dots encontrados:', dots.length);
    
    // Validar índice
    if (indice < 0 || indice >= slides.length) {
        console.error('Índice de slide inválido:', indice);
        return;
    }
    
    // Ocultar todos los slides y desactivar dots
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.opacity = '0';
        if (dots[i]) {
            dots[i].style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
        }
    }
    
    // Mostrar slide actual y activar dot
    slides[indice].style.opacity = '1';
    if (dots[indice]) {
        dots[indice].style.backgroundColor = 'white';
    }
    
    console.log('Slide', indice, 'activado');
}

// ===== BOTONES DEL SLIDER =====
// Los botones del slider ahora usan onclick directamente en el HTML

// Hacer la función global para que funcione con onclick
window.irASeccion = function(seccion) {
    const elemento = document.getElementById(seccion);
    if (elemento) {
        elemento.scrollIntoView({ behavior: 'smooth' });
    }
}

// ===== FILTROS =====
window.filterCars = function(categoria, boton) {
    console.log('Filtrando por:', categoria);
    
    // Quitar estilos activos de todos los botones
    const botones = document.querySelectorAll('.filter-btn');
    botones.forEach(function(btn) {
        btn.classList.remove('bg-primary-500', 'text-white');
        btn.classList.add('bg-white', 'border-2', 'border-primary-500', 'text-primary-500');
    });
    
    // Agregar estilos activos al botón clickeado
    if (boton) {
        boton.classList.remove('bg-white', 'border-2', 'border-primary-500', 'text-primary-500');
        boton.classList.add('bg-primary-500', 'text-white');
    }
    
    // Filtrar carros con animación
    const carros = document.querySelectorAll('.car-card');
    carros.forEach(function(carro, index) {
        const categoriaDelCarro = carro.getAttribute('data-category');
        
        if (categoria === 'all' || categoriaDelCarro === categoria) {
            setTimeout(() => {
                carro.style.display = 'block';
                carro.classList.add('animate-fade-in');
            }, index * 100);
        } else {
            carro.style.display = 'none';
            carro.classList.remove('animate-fade-in');
        }
    });
}

// ===== MODAL =====
window.openModal = function(titulo, precio) {
    console.log('Abriendo modal:', titulo, precio);
    
    const modal = document.getElementById('modal');
    const modalTitulo = document.getElementById('modal-title');
    const modalPrecio = document.getElementById('modal-price');
    
    if (modal && modalTitulo && modalPrecio) {
        modalTitulo.textContent = titulo;
        modalPrecio.textContent = precio;
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Evitar scroll
    } else {
        console.error('No se encontraron elementos del modal');
    }
}

window.closeModal = function() {
    console.log('Cerrando modal');
    const modal = document.getElementById('modal');
    if (modal) {
        modal.classList.add('hidden');
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
    const menu = document.getElementById('nav-menu-mobile');
    
    if (hamburger && menu) {
        hamburger.addEventListener('click', function() {
            console.log('Toggle menú');
            menu.classList.toggle('translate-x-0');
            menu.classList.toggle('-translate-x-full');
        });
        
        // Cerrar menú al hacer click en enlaces
        const enlaces = document.querySelectorAll('#nav-menu-mobile a');
        enlaces.forEach(function(enlace) {
            enlace.addEventListener('click', function() {
                menu.classList.add('-translate-x-full');
                menu.classList.remove('translate-x-0');
            });
        });
        
        // Cerrar menú al hacer click fuera
        document.addEventListener('click', function(e) {
            if (!hamburger.contains(e.target) && !menu.contains(e.target)) {
                menu.classList.add('-translate-x-full');
                menu.classList.remove('translate-x-0');
            }
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