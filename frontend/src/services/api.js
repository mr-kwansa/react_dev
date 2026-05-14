const API_KEY = 'd36b7f1c229bbf25f936d88ac0f35e6f';
const BASE_URL = 'https://api.themoviedb.org/3';

export  const fetchMovies = async () => {
    try {
        const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error fetching movies:', error);
        return [];
    }   
}

export  const searchMovies = async (query) => {
    try {
        const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
        const data = await response.json();
        return data.results;
    }
    catch (error) {
        console.error('Error searching movies:', error);
        return [];
    }
}