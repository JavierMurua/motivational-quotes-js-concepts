// =====================================================
// Array Methods: Using an array to store available tags.
// =====================================================
const availableTags = ['motivational', 'change', 'wisdom', 'Friendship', 'happiness', 'inspirational', 'success'];

// =====================================================
// JavaScript Objects: Defining an object with properties representing tag colors.
// =====================================================
export const tagColors = {
    motivational: '#FFDDC1',
    change: '#D4E157',
    wisdom: '#FFD54F',
    Friendship: '#AED581',
    happiness: '#81D4FA',
    inspirational: '#CE93D8',
    success: '#FFAB91'
};

// =====================================================
// DOM Manipulation: Creating elements dynamically using document.createElement and appendChild.
// =====================================================
export function renderTagCheckboxes(container) {
    container.innerHTML = "";
    availableTags.forEach(tag => {
        const label = document.createElement('label');
        label.className = 'tag-label';
        label.style.backgroundColor = tagColors[tag] || '#ddd'; // Color por defecto si no está en tagColors

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = tag;

        // Evento para cambiar el color cuando está activo
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                label.style.backgroundColor = '#f3f4f6';
                label.style.color = '#333'; // Color de texto oscuro para mejor visibilidad
            } else {
                label.style.backgroundColor = tagColors[tag] || '#ddd';
                label.style.color = '#000'; // Restaurar color original del texto
            }
        });

        const span = document.createElement('span');
        span.textContent = tag;

        label.appendChild(checkbox);
        label.appendChild(span);
        container.appendChild(label);
    });
}



    // =====================================================
    // Array Methods & Arrow Functions: Using `map` and `Array.from` to retrieve selected values.
    // =====================================================
export const getSelectedTags = (container) =>
    Array.from(
        container.querySelectorAll('input[type="checkbox"]:checked')
    ).map(checkbox => checkbox.value).join(',');

