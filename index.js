import hamburgerMenu from "./dom/menu_hamburger.js";
import { digitalClock,alarm } from "./dom/reloj_digital.js";
import { moveBall, shortcut } from "./dom/teclado.js";
import countdown from "./dom/countdown.js";
import scrollTopButton from "./dom/boton_scroll.js";
import darkTheme from "./dom/modo_oscuro.js";
import responsiveMedia from "./dom/responsive.js";
import responsiveTester from "./dom/responsive_tester.js";
import userDeviceInfo from "./dom/deteccion_dispositivos.js";
import networkStatus from "./dom/deteccion_red.js";
import webCam from "./dom/deteccion_webcam.js";
import getGeolocation from "./dom/geolocalizacion.js";
import searchFilters from "./dom/filtro_busquedas.js";
import draw from "./dom/sorteo.js";
import slider from "./dom/responsive_slider.js";
import scrollSpy from "./dom/scroll_espia.js";
import smartVideo from "./dom/video_inteligente.js";
import contactFormValidation from "./dom/validaciones_formulario.js";
import speechReader from "./dom/narrador.js";
const d = document;

d.addEventListener("DOMContentLoaded",(e)=>{
    hamburgerMenu(".panel-btn",".panel",".menu a");
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
    alarm("Assets/alarma.mp3","#activar-alarma","#desactivar-alarma");
    countdown("countdown","Aug 25, 2024 00:00:00","Feliz Cumple Facu");
    scrollTopButton(".scroll-top-btn")
    responsiveMedia("youtube","(min-width: 1024px)",`<a href="https://www.youtube.com/embed/CfEOwQnd-OM?si=ZfdLwHPjSgSM6Xp3" target="_blank" rel="noopener">Ver Video</a>`,`<iframe width="560" height="315" src="https://www.youtube.com/embed/CfEOwQnd-OM?si=ZfdLwHPjSgSM6Xp3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`);
    responsiveMedia("gmaps","(min-width: 1024px)",`<a href="https://maps.app.goo.gl/B9jyQTiv8CF8Qicc7" target="_blank" rel="noopener">Ver Mapa</a>`,`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13136.066850016401!2d-58.390325130224596!3d-34.6037389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1ses!2sar!4v1710357945172!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);
    responsiveTester("responsive-tester");
    userDeviceInfo("user-device");
    webCam("webcam");
    getGeolocation("geolocation");
    searchFilters(".card-filter",".card");
    draw("#winner-btn",".player");
    slider();
    scrollSpy();
    smartVideo();
    contactFormValidation();
});

/* keyup keydown keypress*/
d.addEventListener("keydown", e=>{
    shortcut(e);
    moveBall(e,".ball",".stage");
})

darkTheme(".dark-theme-btn","dark-mode");
networkStatus();
speechReader();

