import React from 'react'
import MovieCard from '../components/Moviecard'
import '../App.css'
 function Home() {
    const movies= [
        {id: 1, title: "Albert Film" , releaseDate: "2022-01-01", rating: 8.5},
        {id: 2, title: "Gilbert Film" , releaseDate: "2022-02-01", rating: 8.5},
        {id: 3, title: "Eben Film" , releaseDate: "2022-03-01", rating: 8.5},
        {id: 4, title: "Kester Film" , releaseDate: "2022-04-01", rating: 8.5},
    ]
  return (
    <div className='Home'>
        <div className="movies-grid">
        {movies.map(movie => ( 
            <MovieCard movie={movie} key={movie.id} />
        ))
        }
        </div>
    </div>
  )
}

export default Home