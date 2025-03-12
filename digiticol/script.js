const linkButton = document.querySelectorAll(".link-card .icons");
linkButton.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const getLink = e.target.parentElement.getAttribute("href");
        const copyLinkToClipBoard = navigator.clipboard.writeText(getLink);

        alert("link has been copied to clipboard");
    });
});

// Seleccionar el botón con la clase share-button
const shareButton = document.querySelector(".share-button");

shareButton.addEventListener("click", function (e) {
    e.preventDefault(); // Evita que se realice la acción predeterminada del enlace

    // Obtiene la URL actual del navegador
    const currentURL = window.location.href;

    // Copia la URL al portapapeles
    navigator.clipboard.writeText(currentURL).then(() => {
        alert("¡El enlace ha sido copiado al portapapeles!");
    }).catch(err => {
        console.error("Error al copiar el enlace: ", err);
        alert("Hubo un error al copiar el enlace.");
    });
});