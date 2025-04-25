// Función para manejar el envío del formulario
document.getElementById("contactoForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const form = e.target;

    fetch(form.action, {
        method: "POST",
        body: new FormData(form)
    })
    .then(response => {
        if (response.ok) {
            // Mostrar mensaje de éxito
            document.getElementById("successMessage").style.display = "block";
            form.reset();
            
            // Ocultar mensaje después de 5 segundos
            setTimeout(() => {
                document.getElementById("successMessage").style.display = "none";
            }, 5000);
        } else {
            alert("Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.");
        }
    })
    .catch(error => {
        alert("Error de conexión. Por favor, verifica tu conexión a internet e inténtalo de nuevo.");
    });
});

// Aplicar modo oscuro al formulario (usando tus clases existentes)
const body = document.body;
const navbtnmodo = document.querySelector('.nav__btn-modo');
const btnmodooscuro = document.querySelector('.btn-modo-oscuro');
const proyectosCartsContentP1 = document.querySelector('.proyectos__carts-content-p1');
const proyectosCartsContentP2 = document.querySelector('.proyectos__carts-content-p2');
const proyectosCartsContentP3 = document.querySelector('.proyectos__carts-content-p3');
const github = document.querySelector('.github');
const faBarsClose = document.querySelector('#fa-bars-close');
const faBarsOpen = document.querySelector('#fa-bars-open');
const contactoForm = document.querySelector('.contacto__formulario');
const contactoLabels = document.querySelectorAll('.contacto__form-container label');
const contactoInputs = document.querySelectorAll('.contacto__form-container input, .contacto__form-container textarea');
const contactoBtn = document.querySelector('.contacto__btn-enviar');

navbtnmodo.addEventListener('click', function(){
    btnmodooscuro.classList.toggle('btn-modo-claro-cambio');
    body.classList.toggle('body-claro');
    proyectosCartsContentP1.classList.toggle('azulOscuro');
    proyectosCartsContentP2.classList.toggle('azulOscuro');
    proyectosCartsContentP3.classList.toggle('azulOscuro');
    github.classList.toggle('azulOscuro');
    faBarsClose.classList.toggle('blanco');
    faBarsOpen.classList.toggle('blanco');
    
    // Modo oscuro para el formulario
    contactoForm.classList.toggle('formulario-oscuro');
    contactoLabels.forEach(label => label.classList.toggle('texto-claro'));
    contactoInputs.forEach(input => {
        input.classList.toggle('input-oscuro');
        input.classList.toggle('texto-claro');
    });
    contactoBtn.classList.toggle('btn-oscuro');
});

// Versión responsive del modo oscuro
const navbtnmodoResponsive = document.querySelector('.nav__btn-modo-responsive');
const btnmodooscuroResponsive = document.querySelector('.btn-modo-oscuro-responsive');

navbtnmodoResponsive.addEventListener('click', function(){
    btnmodooscuroResponsive.classList.toggle('btn-modo-claro-cambio-responsive');
    body.classList.toggle('body-claro');
    proyectosCartsContentP1.classList.toggle('azulOscuro');
    proyectosCartsContentP2.classList.toggle('azulOscuro');
    proyectosCartsContentP3.classList.toggle('azulOscuro');
    github.classList.toggle('azulOscuro');
    faBarsClose.classList.toggle('blanco');
    faBarsOpen.classList.toggle('blanco');
    
    // Modo oscuro para el formulario (responsive)
    contactoForm.classList.toggle('formulario-oscuro');
    contactoLabels.forEach(label => label.classList.toggle('texto-claro'));
    contactoInputs.forEach(input => {
        input.classList.toggle('input-oscuro');
        input.classList.toggle('texto-claro');
    });
    contactoBtn.classList.toggle('btn-oscuro');
});

// Menú responsive
const navSecundResponsive = document.querySelector('.nav__navbar-container-general-responsive');
const menuResponsive = document.querySelector('.nav__menuResponsive');
const navContainerGeneral = document.querySelector('.nav__container-general');

menuResponsive.addEventListener('click', function(){
    navSecundResponsive.classList.toggle('classFlex');
    navContainerGeneral.classList.toggle('nav__container-general-responsive');
    faBarsClose.classList.toggle('none');
    faBarsOpen.classList.toggle('none');
});