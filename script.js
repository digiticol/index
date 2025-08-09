//js for menu

var MenuItems = document.getElementById("MenuItems");
        var menuHamb = document.getElementById("menu-icon");
        var menuClose = document.getElementById("menu-icon-x");
        MenuItems.style.maxHeight = "0px";

        function menutoggle(){
            if(MenuItems.style.maxHeight == "0px"){
                MenuItems.style.maxHeight = "400px";
                menuClose.classList.toggle('active');
                menuHamb.classList.toggle('active');
            } else {
                MenuItems.style.maxHeight = "0px";
                menuHamb.classList.toggle('active');
                menuClose.classList.toggle('active');
            }
        }

// Ajustar desplazamiento para evitar que el encabezado tape el título
document.querySelectorAll('.navbar-menu a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Enlace interno (scroll suave)
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        } 
        // Enlace externo (WhatsApp, Helpdesk, etc.)
        else {
            e.preventDefault();
            window.open(href, '_blank'); // Abrir en nueva pestaña
        }
    });
});

//Searcher

// Obtener los elementos del DOM
const btnSearch = document.getElementById("btn-search");
const barsSearch = document.getElementById("ctn-bars-search");
const coverCtnSearch = document.getElementById("cover-ctn-search");
const inputSearch = document.getElementById("inputSearch");
const boxSearch = document.getElementById("box-search");

// Mostrar/Ocultar buscador al hacer clic en el botón de búsqueda
btnSearch.addEventListener("click", toggleSearch);

function toggleSearch() {
    if (barsSearch.style.top === "70px") {
        hideSearch();
    } else {
        showSearch();
    }
}

// Función para mostrar el buscador
function showSearch() {
    barsSearch.style.top = "70px";
    coverCtnSearch.style.display = "block";
    inputSearch.focus();

    // Mostrar sugerencias solo si hay texto
    if (inputSearch.value === "") {
        boxSearch.style.display = "none";
    }
}

// Función para ocultar el buscador
function hideSearch() {
    barsSearch.style.top = "-10px";
    coverCtnSearch.style.display = "none";
    inputSearch.value = "";
    boxSearch.style.display = "none";
}

// Ocultar el buscador cuando se hace clic fuera de él
coverCtnSearch.addEventListener("click", hideSearch);

// Filtro de búsqueda
inputSearch.addEventListener("keyup", function() {
    const filter = inputSearch.value.toUpperCase();
    const items = boxSearch.getElementsByTagName("li");

    let hasResults = false;
    for (let i = 0; i < items.length; i++) {
        const link = items[i].getElementsByTagName("a")[0];
        const textValue = link.textContent || link.innerText;

        if (textValue.toUpperCase().includes(filter)) {
            items[i].style.display = "";
            hasResults = true;
        } else {
            items[i].style.display = "none";
        }
    }

    // Mostrar o ocultar el cuadro de resultados
    boxSearch.style.display = hasResults && inputSearch.value ? "block" : "none";
});


//Download Section
const container = document.getElementById('descargas');

container.addEventListener('click', (e) => {
    const toggleContainer = e.target.closest('.toggle-container');
    if (toggleContainer) {
        const listItem = toggleContainer.closest('.list');
        
        // Alternar la clase 'scale' para la transición de despliegue
        listItem.classList.toggle('scale');
    }
});

//Parallax Efects
new Pageable("#container-col");
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);
AOS.init();

/* JavaScript para manejar el botón de leer más / leer menos */
let seeMoreMoreOpened = false;
document.getElementById('see-more').addEventListener('click', function(event) {
    event.preventDefault();

    const readMore = document.getElementById('read-more');
    if (!seeMoreMoreOpened) {
        readMore.classList.add('expanded');
        this.innerHTML = 'Ver menos <i class="fa-solid fa-minus"></i>';
    } else {
        readMore.classList.remove('expanded');
        this.innerHTML = 'Ver más <i class="fa-solid fa-plus"></i>';
    }
    seeMoreMoreOpened = !seeMoreMoreOpened;
});

//Projects pages
// Abre el modal y muestra la imagen seleccionada
// Obtener elementos
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");
const closeModal = document.getElementById("closeModal");

// Mostrar modal al hacer clic en la imagen
document.querySelectorAll(".grid-item img").forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImage.src = img.src;
    });
});

// Cerrar modal
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Cerrar modal al hacer clic fuera de la imagen
window.addEventListener("click", (e) => {
    if (e.target == modal) {
        modal.style.display = "none";
    }
});

