import React from "react";
import './App.css';
import Card from "./Card";
import movies from '../movies';

const App = () => {
    return(
        <div className="container">
            <h1>Best Movies in 2023</h1>
            <Card 
                name={movies[0].name}
                imgUrl={movies[0].imgUrl}
                liked={movies[0].liked}
                year={movies[0].year}
            />

        <Card 
                name={movies[1].name}
                imgUrl={movies[1].imgUrl}
                liked={movies[1].liked}
                year={movies[1].year}
            />

        <Card 
                name={movies[2].name}
                imgUrl={movies[2].imgUrl}
                liked={movies[2].liked}
                year={movies[2].year}
            />
        </div>
        );
}

export default App;