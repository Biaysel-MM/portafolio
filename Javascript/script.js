const body = document.body;
const navbtnmodo = document.querySelector('.nav__btn-modo');
const btnmodooscuro = document.querySelector('.btn-modo-oscuro');
const  proyectosCartsContentP1 = document.querySelector('.proyectos__carts-content-p1');
const  proyectosCartsContentP2 = document.querySelector('.proyectos__carts-content-p2');
const  github = document.querySelector('.github');
const  faBarsClose = document.querySelector('#fa-bars-close');
const  faBarsOpen = document.querySelector('#fa-bars-open');

navbtnmodo.addEventListener('click', function(){
    btnmodooscuro.classList.toggle('btn-modo-claro-cambio');
    body.classList.toggle('body-claro');
    proyectosCartsContentP1.classList.toggle('azulOscuro');
    proyectosCartsContentP2.classList.toggle('azulOscuro');
    github.classList.toggle('azulOscuro');
    faBarsClose.classList.toggle('blanco');
    faBarsOpen.classList.toggle('blanco');
});


const navbtnmodoResponsive = document.querySelector('.nav__btn-modo-responsive');
const btnmodooscuroResponsive = document.querySelector('.btn-modo-oscuro-responsive');

navbtnmodoResponsive.addEventListener('click', function(){
    btnmodooscuroResponsive.classList.toggle('btn-modo-claro-cambio-responsive');
    body.classList.toggle('body-claro');
    proyectosCartsContentP1.classList.toggle('azulOscuro');
    proyectosCartsContentP2.classList.toggle('azulOscuro');
    github.classList.toggle('azulOscuro');
    faBarsClose.classList.toggle('blanco');
    faBarsOpen.classList.toggle('blanco');
});


const navSecundResponsive = document.querySelector('.nav__navbar-container-general-responsive');
const menuResponsive = document.querySelector('.nav__menuResponsive');
const navContainerGeneral = document.querySelector('.nav__container-general');

menuResponsive.addEventListener('click', function(){
    navSecundResponsive.classList.toggle('classFlex');
    navContainerGeneral.classList.toggle('nav__container-general-responsive');
    faBarsClose.classList.toggle('none');
    faBarsOpen.classList.toggle('none');
});

    // 1. Configuración inicial de EmailJS (usa tus credenciales)
    (function() {
        emailjs.init('tu-public-key'); // Reemplaza con tu Public Key
    })();

    // 2. Manejo del formulario (sin cambiar tu estructura)
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // 3. Envío del formulario (conservando tus names originales)
        emailjs.sendForm('tu-service-id', 'tu-template-id', this)
            .then(() => {
                // Muestra mensaje de éxito
                const successMsg = document.getElementById('successMessage');
                successMsg.style.display = 'block';
                
                // Oculta el mensaje después de 3 segundos
                setTimeout(() => {
                    successMsg.style.display = 'none';
                }, 3000);
                
                // Opcional: Resetea el formulario
                this.reset();
            }, (error) => {
                console.error('Error al enviar:', error);
                alert('Ocurrió un error al enviar el mensaje. Por favor inténtalo nuevamente.');
            });
    });
