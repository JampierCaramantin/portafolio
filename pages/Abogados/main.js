/* document.addEventListener('DOMContentLoaded', function(){
    var menuCheckbox  = document.getElementById('menu');
    var navMenu = document.querySelector('.nav');

    menuCheckbox.addEventListener('change', function() {
        if (menuCheckbox.Checked) {
            navMenu.classList.add('slide-left');
        } else {
            navMenu.classList.remove('slide-left')
        }
    });
}); */

document.addEventListener('DOMContentLoaded', function () {
    // Obtén todos los enlaces de navegación
    const links = document.querySelectorAll('nav a');

    // Escucha el evento click en cada enlace
    links.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault(); // Evita el comportamiento predeterminado del enlace
            const targetId = link.getAttribute('href').substring(1); // Obtén el id del objetivo sin el "#" al principio
            const targetElement = document.getElementById(targetId); // Encuentra el elemento de destino

            // Desplázate suavemente al elemento de destino
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});

// para cuando estoy en una paguina diferente a index y quiero ir a contact