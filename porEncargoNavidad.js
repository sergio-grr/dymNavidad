// Función para crear los copos de nieve
function createSnowflakes() {
    const snowflakes = 50;
    for(let i = 0; i < snowflakes; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
        snowflake.style.animationDelay = `${Math.random() * 2}s`;
        snowflake.innerHTML = '❄';
        document.body.appendChild(snowflake);
    }
}

// Ejecutar la función para crear los copos de nieve
createSnowflakes();

// Control de los modales

// Obtener todas las tarjetas de producto
const productCards = document.querySelectorAll('.product-card');

// Obtener todos los botones de cerrar modal
const closeModalBtns = document.querySelectorAll('.close-modal');

// Añadir evento de clic a cada tarjeta de producto para abrir el modal correspondiente
productCards.forEach(card => {
    card.addEventListener('click', () => {
        const modalId = card.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'block';
        }
    });
});

// Añadir evento de clic a cada botón de cerrar modal
closeModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const modal = btn.closest('.modal');
        if (modal) {
            modal.style.display = 'none';
        }
    });
});

// Cerrar el modal al hacer clic fuera del contenido del modal
window.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
});
