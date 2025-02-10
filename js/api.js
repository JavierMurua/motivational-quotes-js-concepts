export async function fetchRandomQuote(options = {}) {
    const { tags = '', limit = 1 } = options;

    try {
        console.log("📥 Loading quotes from quotes.json...");

        // Load the JSON file
        const response = await fetch('quotes.json');
        if (!response.ok) {
            throw new Error(`Error loading quotes: ${response.status}`);
        }

        const allQuotes = await response.json();
        console.log(`✅ Quotes loaded: ${allQuotes.length}`);

        // Convert selected tags into an array and lowercase them
        const selectedTags = tags ? tags.split(',').map(tag => tag.toLowerCase()) : [];
        console.log("🎯 Selected tags:", selectedTags);

        // Filter quotes by tags
        let filteredQuotes = allQuotes;

        if (selectedTags.length > 0) {
            filteredQuotes = allQuotes.filter(quote => {
                // Ensure `quote.tags` is an array and convert it to lowercase
                if (!Array.isArray(quote.tags)) {
                    console.warn(`⚠ Warning: The quote "${quote.content}" does not have tags as an array.`);
                    return false;
                }

                // Convert the quote's tags to lowercase for correct comparison
                const lowerCaseTags = quote.tags.map(tag => tag.toLowerCase());

                // Check if the quote contains **at least all** selected tags (it can have more)
                return selectedTags.every(tag => lowerCaseTags.includes(tag));
            });
        }

        console.log(`📊 Filtered quotes: ${filteredQuotes.length}`);

        // If no matching quotes are found, display an error message
        if (filteredQuotes.length === 0) {
            console.warn("⚠ No quotes available for the selected tags.");
            return "No quotes available for the selected tags.";
        }

        // Correctly select a random quote
        const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
        const randomQuote = filteredQuotes[randomIndex];

        console.log("🎲 Selected quote:", randomQuote);

        return `${randomQuote.content}\n--- ${randomQuote.author}`;
    } catch (error) {
        console.error("❌ Error in fetchRandomQuote:", error.message);
        return "Could not retrieve a quote.";
    }
}
