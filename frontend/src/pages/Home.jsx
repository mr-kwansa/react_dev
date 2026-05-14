import MovieCard from '../components/MovieCard'
import '../App.css'
import { useEffect, useState } from 'react'
import { fetchMovies, searchMovies } from '../services/api'


 function Home() {
    // 
    // 
    const [searchTerm, setSearchTerm] = useState('')
    const [movies, setMovies] = useState([])


    const loadPopularMovies = async () => {
        const moviesData = await fetchMovies()
        setMovies(moviesData)
    }

    useEffect(() => {
        const getMovies = async () => {
            const moviesData = await fetchMovies()
            setMovies(moviesData)
        }

        getMovies()
    }, [])
    // 
    // 
    const searchInMovies = async (e) => {
        e.preventDefault()

        const query = searchTerm.trim()

        if (!query) {
            loadPopularMovies()
            return
        }
    
            try {

                const searchresults = await searchMovies(query)
                setMovies(searchresults)
            }
            catch (error) {
                console.error('Error searching movies:', error)
            }

    }
    // 
    // 
  

  return (
    <div className='Home'>
        {/*  */}
        {/*  */}
        <form
            onSubmit={searchInMovies}
            className="mx-auto flex w-full max-w-3xl 
            items-center gap-3 rounded-3xl border border-slate-200 
            bg-white/95 p-3 shadow-lg shadow-slate-200/70 backdrop-blur"
        >
            <input
            type="text"
            placeholder='Search for a movie...'
            className="flex-1 rounded-2xl border border-slate-200 
            bg-slate-50 px-5 py-3 text-sm text-slate-900 outline-none 
            transition placeholder:text-slate-400 focus:border-sky-400 
            focus:bg-white focus:ring-4 focus:ring-sky-100"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} />
            <button
            type='submit'
            className="rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-500 focus:outline-none focus:ring-4 focus:ring-sky-100"
            >Search</button>
        </form>
        {/*  */}
        {/*  */}
        <div
        className="grid gap-6 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
        {movies.map(movie => (
            <MovieCard movie={movie} key={movie.id} />
        ))}
        </div>
        {/*  */}
        {/*  */}
    </div>
  )
}

export default Home
