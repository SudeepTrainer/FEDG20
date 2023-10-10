import { useState } from "react";
import MovieCard from "./MovieCard";
import ActionAreaCard from "./MaterialCard";
import { Grid } from "@mui/material";

export default function SearchMovies(){

    const [movieName,setMovieName] = useState("");
    const [movies,setMovies] = useState([]);

    function fetchMovies(event){
        event.preventDefault();
        const url = `https://api.themoviedb.org/3/search/movie?&api_key=24d1042ae5621a567de03462da33bd83&query=${movieName}&include_adult=false&language=en-US&page=1`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMovies(data.results));
    }

    function handleInput(event){
        console.log(event.target.value);
        setMovieName(event.target.value);
    }

    return(
        <div>
            <h3>Enter the movie name</h3>
            <form className="form" onSubmit={fetchMovies}>
                <label className="label" htmlFor="query">Movie Name</label>
                <input className="input" type="text" name="query" 
                    placeholder="Movie name" value={movieName} onChange={handleInput}/>
                <button className="button" type="submit">Search</button>
            </form>
            <br/>
            <Grid container columnGap={4} rowGap={4}>
                {movies.map(movie => 
                   <ActionAreaCard data={movie} key={movie.id}/>
                )}
            </Grid>
        </div>
    )
}