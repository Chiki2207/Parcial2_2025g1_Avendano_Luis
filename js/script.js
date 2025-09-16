document.addEventListener('DOMContentLoaded', function() {
    // Navegacion suave
    const enlaces = document.querySelectorAll('.nav-link[href^="#"]');
    
    enlaces.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; 
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Resaltar seccion actual
    const secciones = document.querySelectorAll('section[id]');
    const itemsNav = document.querySelectorAll('.nav-link[href^="#"]');
    
    function updateActiveNav() {
        let current = '';
        
        secciones.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        itemsNav.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === '#' + current) {
                item.classList.add('active');
            }
        });
    }
    
    // Detectar scroll
    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav();
    
    // Efecto de escritura
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }
    
    // Terminal efecto
    const elementoEscribir = document.querySelector('.typing');
    if (elementoEscribir) {
        typeWriter(elementoEscribir, 'npm start --passion', 150);
    }
    
    // Animaciones al scroll
    const opcionesObserver = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                if (entry.target.classList.contains('progress-bar')) {
                    const width = entry.target.style.width;
                    entry.target.style.width = '0%';
                    setTimeout(() => {
                        entry.target.style.width = width;
                    }, 200);
                }
            }
        });
    }, opcionesObserver);
    
    const elementosAnimados = document.querySelectorAll('.tech-card, .project-card, .coder-card, .progress-bar');
    elementosAnimados.forEach(el => {
        observer.observe(el);
    });
    
    // Efectos hover
    const badgesTecnologia = document.querySelectorAll('.tech-badge, .tech-tag');
    badgesTecnologia.forEach(badge => {
        badge.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.05)';
        });
        
        badge.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Click en proyectos
    const tarjetasProyecto = document.querySelectorAll('.project-card');
    tarjetasProyecto.forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
            setTimeout(() => {
                this.style.transform = 'translateY(-10px) scale(1.02)';
            }, 150);
        });
    });
    
    // Navbar scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.coder-navbar');
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 20px rgba(0, 255, 255, 0.15)';
        } else {
            navbar.style.boxShadow = '0 4px 20px rgba(0, 255, 255, 0.1)';
        }
    });
    
    // Carga inicial
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        const heroElements = document.querySelectorAll('.hero-section h1, .hero-section h2, .hero-section p, .hero-buttons');
        heroElements.forEach((el, index) => {
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, index * 100);
        });
    });
    
    // Menu movil
    const botonMenu = document.querySelector('.navbar-toggler');
    const menuColapsar = document.querySelector('.navbar-collapse');
    const enlacesMovil = document.querySelectorAll('.nav-link');
    
    // Cerrar menu al click
    enlacesMovil.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth < 992) {
                const menuColapsar = document.querySelector('.navbar-collapse');
                if (menuColapsar.classList.contains('show')) {
                    menuColapsar.classList.remove('show');
                }
            }
        });
    });
    
    // Cerrar al click fuera
    document.addEventListener('click', function(e) {
        const navbar = document.querySelector('.navbar');
        const menuColapsar = document.querySelector('.navbar-collapse');
        
        if (!navbar.contains(e.target) && menuColapsar.classList.contains('show')) {
            menuColapsar.classList.remove('show');
        }
    });
    
    // Atajos de teclado
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.key === 'k') {
            e.preventDefault();
            console.log('Búsqueda rápida');
        }
        
        if (e.key === 'Escape') {
            if (menuColapsar && menuColapsar.classList.contains('show')) {
                botonMenu.click();
            }
        }
    });
    
    // Revelar secciones
    const elementosRevelar = document.querySelectorAll('section');
    const revealObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.2 });
    
    elementosRevelar.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        revealObserver.observe(el);
    });
    
    // Partículas flotantes
    function createParticle() {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = '1px';
        particle.style.height = '1px';
        particle.style.background = '#00d4ff';
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.opacity = '0.4';
        particle.style.left = Math.random() * window.innerWidth + 'px';
        particle.style.top = '100vh';
        particle.style.animation = 'floatUp 4s linear forwards';
        
        document.querySelector('.hero-section').appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 4000);
    }
    
    setInterval(createParticle, 4000);
    
    // CSS dinámico
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatUp {
            to {
                transform: translateY(-100vh);
                opacity: 0;
            }
        }
        
        .animate-in {
            animation: fadeInUp 0.6s ease-out forwards;
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .loaded {
            opacity: 1;
        }
        
        .hero-section h1,
        .hero-section h2,
        .hero-section p,
        .hero-buttons {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
    `;
    document.head.appendChild(style);
});

// Mensaje de consola
console.log('CoderHub.run - Desarrollo Web & Programación');

// Validación del formulario
document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('contactForm');
    if (!formulario) return;

    formulario.addEventListener('submit', function(e) {
        e.preventDefault();

        const nombre = document.getElementById('nombre');
        const correo = document.getElementById('correo');
        const asunto = document.getElementById('asunto');
        const mensaje = document.getElementById('mensaje');
        const alertBox = document.getElementById('formAlert');

        let validar = true;

        [nombre, correo, asunto, mensaje].forEach(input => {
            if (!input.value || input.value.trim() === '') {
                input.classList.add('is-invalid');
                validar = false;
            } else {
                input.classList.remove('is-invalid');
            }
        });

        if (correo.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo.value)) {
            correo.classList.add('is-invalid');
            validar = false;
        }

        if (validar) {
            alertBox.classList.remove('d-none');
            alertBox.classList.add('show');
            formulario.reset();
            setTimeout(() => {
                alertBox.classList.add('d-none');
                alertBox.classList.remove('show');
            }, 3000);
        }
    });
});

$('#carruselEquipo').carousel({
    interval: 3000,
    wrap: true,
    pause: false
});
$('#carruselEquipo').carousel('cycle');