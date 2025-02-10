// =====================================================
// Ecmascript modules: import.
// =====================================================
import { fetchRandomQuote } from './quotes.js';
import { renderTagCheckboxes, getSelectedTags } from './tags.js';
import { setupBackgroundUpdater } from './background.js';


const quoteContainer = document.querySelector('#quote');
const generateButton = document.querySelector('#generate');
const tagsContainer = document.getElementById('tags-container');


// =====================================================
// JavaScript Functions: Function executed when the DOM is fully loaded.
// =====================================================
document.addEventListener('DOMContentLoaded', () => {
    renderTagCheckboxes(tagsContainer);
    setupEventListeners();
    displayDefaultQuote();
    setupBackgroundUpdater(tagsContainer); 
});


async function generateAndDisplayQuote() {
    quoteContainer.innerText = "Cargando frase...";
    const selectedTags = getSelectedTags(tagsContainer);
    const quote = await fetchRandomQuote({
        tags: selectedTags,
        limit: 1,
    });
    quoteContainer.innerText = quote;
}

// =====================================================
// Event Listeners: Using an anonymous function as an event handler.
// =====================================================
function setupEventListeners() {
    generateButton.addEventListener('click', generateAndDisplayQuote);
}

// =====================================================
// Async/Await: Fetching a default quote asynchronously and updating the DOM.
// =====================================================
async function displayDefaultQuote() {
    const defaultQuote = await fetchRandomQuote();
    quoteContainer.innerText = defaultQuote;
}





