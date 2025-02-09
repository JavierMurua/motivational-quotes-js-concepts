import { tagColors, getSelectedTags } from './tags.js';

function updateBackgroundGradient(container) {
    // =====================================================
    // Optional Chaining: Safely access properties of an object
    // without throwing an error if the property is undefined.=====================================================
    const selectedTags = getSelectedTags(container)?.split(',');

    // =====================================================
    // Array methods & Spread operator: Use `map` to transform 
    // selected tags into their corresponding colors from the `tagColors` object.
    // The spread operator isn't explicitly used here, but you could extend this 
    // with the spread operator if you wanted to manipulate the color arrays.
    // =====================================================
    const colors = selectedTags.map(tag => tagColors[tag] || '#f3f4f6');

    const gradientColors = colors.length === 1 ? [colors[0], colors[0]] : colors;

    // =====================================================
    // Event Listener: Add an event listener for the 'change' event 
    // to trigger the background update whenever the user interacts with the checkboxes.
    // =====================================================
    document.body.style.background = `linear-gradient(135deg, ${gradientColors.join(', ')})`;
}

export function setupBackgroundUpdater(container) {
    container.addEventListener('change', () => updateBackgroundGradient(container));
}
