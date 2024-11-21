
const listaItems = document.querySelectorAll('.Menu > li');

listaItems.forEach(item => {
    item.addEventListener('click', () => {
        const sublist = item.querySelector('.sublist');
        
        if (sublist && (sublist.style.display === "none" || sublist.style.display === "")) {
            sublist.style.display = "block"; // Muestra la sublista
        } else if (sublist) {
            sublist.style.display = "none"; // Oculta la sublista
        }
    });
});

function toggleMenu() {
    const menu = document.querySelector('.Menu');
    menu.classList.toggle('show'); // Alterna entre mostrar y ocultar el menú
}