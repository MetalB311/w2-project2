import React from 'react'
import MovieCard from './MovieCard'

const MovieScreen = ({addMovie, movieList, page, setPage, List, removeMovie}) =>{
    const decrement = () => setPage(page -1)
    const increment = () => setPage(page +1)

    const MovieDisplay = movieList.map((movie, index) => {
        return <MovieCard addMovie={addMovie} movie={movie} List={List} removeMovie={removeMovie}/>
    })
    
    return (
        <div className='page'>
            <h1>Byron's Movie Theatre</h1>
            <h3>Add a movie to your watchlist!</h3>
            <div className='btn-container'>
                <button onClick={page !== 1 && decrement}>previous</button>
                <button onClick={increment}>Next</button>
                
            </div>
        <div className='movie-container'> {MovieDisplay} </div>
        </div>
    )
}

export default MovieScreen