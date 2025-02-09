// =====================================================
// Array Methods: Using an array to store available tags.
// =====================================================
const availableTags = ['motivational', 'change', 'wisdom', 'gratitude', 'happiness', 'inspirational', 'success'];

// =====================================================
// JavaScript Objects: Defining an object with properties representing tag colors.
// =====================================================
export const tagColors = {
    motivational: '#FFDDC1',
    change: '#D4E157',
    wisdom: '#FFD54F',
    gratitude: '#AED581',
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

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = tag;

        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(tag));
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

