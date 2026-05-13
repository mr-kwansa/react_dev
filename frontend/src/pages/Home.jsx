import React from 'react'
import MovieCard from '../components/Moviecard'
import '../App.css'
import { useState } from 'react'
 function Home() {
    // 
    // 
    const [searchTerm, setSearchTerm] = useState('')
    // 
    // 
    const searchInMovies = (e) => {
        e.preventDefault()

    }
    // 
    // 
    const movies= [
        {id: 1, title: "Albert Film" , releaseDate: "2022-01-01", rating: 8.5, posterUrl: "https://m.media-amazon.com/images/M/MV5BZGQ5NGEyYTItMjNiMi00Y2EwLTkzOWItMjc5YjJiMjMyNTI0XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg"},
        {id: 2, title: "Gilbert Film" , releaseDate: "2022-02-01", rating: 8.5, posterUrl: "https://m.media-amazon.com/images/M/MV5BMjA4ODQ0ODk1NV5BMl5BanBnXkFtZTcwODg3OTYyMQ@@._V1_FMjpg_UX1000_.jpg"},
        {id: 3, title: "Eben Film" , releaseDate: "2022-03-01", rating: 8.5, posterUrl: "https://m.media-amazon.com/images/M/MV5BMjA4ODQ0ODk1NV5BMl5BanBnXkFtZTcwODg3OTYyMQ@@._V1_FMjpg_UX1000_.jpg"},
        {id: 4, title: "Kester Film" , releaseDate: "2022-04-01", rating: 8.5, posterUrl: "https://m.media-amazon.com/images/M/MV5BMjA4ODQ0ODk1NV5BMl5BanBnXkFtZTcwODg3OTYyMQ@@._V1_FMjpg_UX1000_.jpg"},
        {id: 5, title: "Alber Film" , releaseDate: "2022-05-01", rating: 8.5, posterUrl: "https://m.media-amazon.com/images/M/MV5BMjA4ODQ0ODk1NV5BMl5BanBnXkFtZTcwODg3OTYyMQ@@._V1_FMjpg_UX1000_.jpg"},
    ]
    // 
    // 
  return (
    <div className='Home'>
        {/*  */}
        {/*  */}
        <form className='search-form' class="flex items-center justify-center gap-2 p-4">
            <input 
            type="text" 
            placeholder='Search for a movie...'
            className='Search-input' 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)} />
            <button 
            type='submit'
            onClick={searchInMovies}
            >Search</button>
        </form>
        {/*  */}
        {/*  */}
        <div 
        className="movies-grid" 
        class=" gap-4 grid grid-cols-1 
        sm:grid-cols-2 md:grid-cols-3 
        lg:grid-cols-4
        bg-slate-200  
        ">
        {movies.map(movie =>
         movie.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        ( 
            <MovieCard movie={movie} key={movie.id} />
        ))
        }
        </div>
        {/*  */}
        {/*  */}
    </div>
  )
}

export default Home