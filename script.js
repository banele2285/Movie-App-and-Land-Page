// Sample movie data
const movies = [
    {
        title: "Iron man 2",
        director: "jon Favreau",
        year: 2010,
    },
    {
        title: "The Shawshank Redemption",
        director: "Frank Darabont",
        year: 1994,
    },
    {
        title: "The Godfather",
        director: "Francis Ford Coppola",
        year: 1972,
    },
    // 
];

// Function to display information about movies
function showMovieInformation() {
    movies.forEach(movie => {
        const message = `Title: ${movie.title}\nDirector: ${movie.director}\nYear: ${movie.year}`;
        alert(message);
    });
}


