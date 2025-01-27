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

//Projects pages
// Abre el modal y muestra la imagen seleccionada
// Obtener elementos
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");
const closeModal = document.getElementById("closeModal");

// Mostrar modal al hacer clic en una imagen o video
document.querySelectorAll(".grid-item img, .grid-item video").forEach(item => {
    item.addEventListener("click", () => {
        modal.style.display = "flex";
        
        if (item.tagName === "IMG") {
            modalContent.innerHTML = `<img src="${item.src}" alt="Imagen ampliada">`;
        } else if (item.tagName === "VIDEO") {
            modalContent.innerHTML = `
                <video controls autoplay loop>
                    <source src="${item.src}" type="video/mp4">
                    Tu navegador no soporta la reproducción de videos.
                </video>
            `;
        }
    });
});

// Cerrar modal
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
    modalContent.innerHTML = ""; // Limpiar el contenido del modal
});

// Cerrar modal al hacer clic fuera del contenido
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
        modalContent.innerHTML = ""; // Limpiar el contenido del modal
    }
});

//Filtros para los desplegables

// Seleccionamos los elementos de los filtros y los artículos
const filterCliente = document.getElementById("filterCliente");
const filterCategoria = document.getElementById("filterCategoria");
const filterFormato = document.getElementById("filterFormato");
const articles = document.querySelectorAll(".grid-item");
const noResults = document.getElementById("noResults"); // Elemento de "sin resultados"

// Función para aplicar los filtros
function applyFilters() {
  // Obtener los valores seleccionados
  const selectedCliente = filterCliente.value;
  const selectedCategoria = filterCategoria.value;
  const selectedFormato = filterFormato.value;

  let hasVisibleItems = false; // Variable para rastrear si hay coincidencias visibles

  // Iterar sobre todos los artículos
  articles.forEach(article => {
    // Extraer los atributos del artículo
    const cliente = article.querySelector("[data-cliente]").getAttribute("data-cliente");
    const categorias = article.querySelector("[data-categoria]").getAttribute("data-categoria").split(" ");
    const formatos = article.querySelector("[data-formato]").getAttribute("data-formato").split(" ");

    // Verificar si el artículo cumple con los filtros
    const matchesCliente = selectedCliente === "todos" || cliente === selectedCliente;
    const matchesCategoria = selectedCategoria === "todos" || categorias.includes(selectedCategoria);
    const matchesFormato = selectedFormato === "todos" || formatos.includes(selectedFormato);

    // Mostrar u ocultar el artículo según los filtros
    if (matchesCliente && matchesCategoria && matchesFormato) {
      article.style.display = ""; // Mostrar
      hasVisibleItems = true; // Al menos un artículo es visible
    } else {
      article.style.display = "none"; // Ocultar
    }
  });

  // Mostrar u ocultar el mensaje de "sin resultados"
  if (hasVisibleItems) {
    noResults.style.display = "none"; // Ocultar mensaje
  } else {
    noResults.style.display = "block"; // Mostrar mensaje
  }
}

// Añadir eventos de cambio a los selectores
filterCliente.addEventListener("change", applyFilters);
filterCategoria.addEventListener("change", applyFilters);
filterFormato.addEventListener("change", applyFilters);

// Aplicar los filtros inicialmente
applyFilters();
