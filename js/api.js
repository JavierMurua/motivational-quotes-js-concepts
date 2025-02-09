// =====================================================
// JavaScript Functions: Creating an asynchronous function with default parameters, 
// returning values, using shorthand property names, and destructuring.
// =====================================================
export async function fetchRandomQuote(options = {}) {
    const { tags = 'motivational', limit = 1, minLength = 0, maxLength = 0 } = options;

    const baseUrl = 'http://api.quotable.io/quotes/random';
    const url = new URL(baseUrl);
    
    url.searchParams.append('tags', tags);
    url.searchParams.append('limit', limit);
    if (minLength) url.searchParams.append('minLength', minLength);
    if (maxLength) url.searchParams.append('maxLength', maxLength);

    // =====================================================
    // Fetch API, Promises, and Async/Await: Using async/await to handle asynchronous HTTP requests.
    // =====================================================
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status}`);
        }
        const data = await response.json();

        if (data.length === 0) {
            throw new Error("La API no devolvió resultados.");
        }

        console.log('Respuesta completa de la API:', data);

    // =====================================================
    // Returning values: Using bracket notation to access object properties.
    // =====================================================
    return `${data[0].content}\n--- ${data[0].author}`;
    } catch (error) {
        console.error(error.message);
        return "No se pudo obtener una frase motivacional.";
    }
}
