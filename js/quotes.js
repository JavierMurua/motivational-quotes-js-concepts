// =====================================================
// JavaScript Functions: Function with default parameters.
// =====================================================
export async function fetchRandomQuote(options = {}) {
    const tags = options.tags || '';

    try {
        console.log("📥 Loading quotes from quotes.json...");

        // =====================================================
        // Fetch, Promises & Async/Await: Fetching data from a JSON file asynchronously.
        // =====================================================
        const response = await fetch('assets/quotes.json');
        if (!response.ok) {
            // =====================================================
            // String Literals: Using template literals for error message formatting.
            // =====================================================
            throw new Error(`Error loading quotes: ${response.status}`);
        }

        const allQuotes = await response.json();
        console.log(`✅ Quotes loaded: ${allQuotes.length}`);

        const selectedTags = tags ? tags.split(',').map(tag => tag.toLowerCase()) : [];

        console.log("🎯 Selected tags:", selectedTags);

        let filteredQuotes = allQuotes;

        if (selectedTags.length > 0) {
            // =====================================================
            // Array Methods: Using filter to find matching quotes.
            // =====================================================
            filteredQuotes = allQuotes.filter(quote => {
                // =====================================================
                // Optional Chaining: Ensuring `quote.tags` exists before accessing it.
                // =====================================================
                if (!Array.isArray(quote.tags)) {
                    console.warn(`⚠ Warning: The quote "${quote.content}" does not have tags as an array.`);
                    return false;
                }

                // =====================================================
                // Array Methods: Using map to transform array values.
                // =====================================================
                const lowerCaseTags = quote.tags.map(tag => tag.toLowerCase());

                // =====================================================
                // Array Methods: Using every to check if all selected tags exist in the quote.
                // =====================================================
                return selectedTags.every(tag => lowerCaseTags.includes(tag));
            });
        }

        console.log(`📊 Filtered quotes: ${filteredQuotes.length}`);

        // =====================================================
        // Return & Conditional Statements: Using return to exit early when no quotes are found.
        // =====================================================
        if (filteredQuotes.length === 0) {
            console.warn("⚠ No quotes available for the selected tags.");
            return "No quotes available for the selected tags.";
        }

        const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
        const randomQuote = filteredQuotes[randomIndex];

        console.log("🎲 Selected quote:", randomQuote);

        return `${randomQuote.content}\n--- ${randomQuote.author}`;
    } catch (error) {
        console.error("❌ Error in fetchRandomQuote:", error.message);
        return `Error: ${error.message}`;
    }
}
