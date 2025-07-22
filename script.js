let menuVisible = false;
let lastScrollY = window.scrollY;

function mostrarOcultarMenu() {
    const nav = document.getElementById("nav");
    if (menuVisible) {
        nav.classList = "";
        menuVisible = false;
    } else {
        nav.classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar() {
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

// Mostrar el menú al principio
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("nav").classList = "responsive";
    menuVisible = true;
});

// Ocultar menú al hacer scroll hacia abajo
window.addEventListener("scroll", () => {
    const nav = document.getElementById("nav");
    const currentScrollY = window.scrollY;

    // Si el usuario hace scroll hacia abajo y el menú está visible, lo oculta
    if (currentScrollY > lastScrollY && menuVisible) {
        nav.classList = "";
        menuVisible = false;
    }

    lastScrollY = currentScrollY;

    // Aplica efecto de habilidades
    efectoHabilidades();
});

// Efecto habilidades (sin cambios)
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}
