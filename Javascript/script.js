const body = document.body;
const navbtnmodo = document.querySelector('.nav__btn-modo');
const btnmodooscuro = document.querySelector('.btn-modo-oscuro');
const  proyectosCartsContentP1 = document.querySelector('.proyectos__carts-content-p1');
const  proyectosCartsContentP2 = document.querySelector('.proyectos__carts-content-p2');
const  github = document.querySelector('.github');

navbtnmodo.addEventListener('click', function(){
    btnmodooscuro.classList.toggle('btn-modo-claro-cambio');
    body.classList.toggle('body-claro');
    proyectosCartsContentP1.classList.toggle('azulOscuro');
    proyectosCartsContentP2.classList.toggle('azulOscuro');
    github.classList.toggle('azulOscuro');
});


const navbtnmodoResponsive = document.querySelector('.nav__btn-modo-responsive');
const btnmodooscuroResponsive = document.querySelector('.btn-modo-oscuro-responsive');

navbtnmodoResponsive.addEventListener('click', function(){
    btnmodooscuroResponsive.classList.toggle('btn-modo-claro-cambio-responsive');
    body.classList.toggle('body-claro');
    proyectosCartsContentP1.classList.toggle('azulOscuro');
    proyectosCartsContentP2.classList.toggle('azulOscuro');
    github.classList.toggle('azulOscuro');
});


const navSecundResponsive = document.querySelector('.nav__navbar-container-general-responsive');
const menuResponsive = document.querySelector('.nav__menuResponsive');
const navContainerGeneral = document.querySelector('.nav__container-general');

menuResponsive.addEventListener('click', function(){
    navSecundResponsive.classList.toggle('classFlex');
    navContainerGeneral.classList.toggle('nav__container-general-responsive');
});


