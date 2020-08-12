import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SingleGame from '../VideoGame/SingleGame';
import '../VideoGame/Game.css';

const PopularGames = () => {
    const [games, setGames] = useState([]);
    const [from] = useState('2019-01-01');
    const [to] = useState('2019-12-31');
    const [postPerPage] = useState(25);

    useEffect(() => {
        fetchGames();
    }, []);

    const fetchGames = async () => {
        await axios
            .get(
                `https://cors-anywhere.herokuapp.com/https://rawg.io/api/games?dates=${from},${to}&ordering=-added&page_size=${postPerPage}`
            )
            .then((res) => {
                setGames(games.concat(res.data.results).sort(randomize));
            });
    };

    const randomize = (a) => {
        return Math.random() - 0.5;
    };

    const renderGames = games.map((game) => {
        return (
            <SingleGame
                key={game.id}
                name={game.name}
                description={game.description}
                cover={game.background_image}
                rating={game.rating}
                meta={game.metacritic}
                date={game.released}
                slug={game.slug}
            />
        );
    });

    return (
        <div>
            <h1 className="lead-head">Popular Games of 2019</h1>
            <div className="card-columns">{renderGames}</div>
        </div>
    );
};

export default PopularGames;
