import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SingleGame from '../VideoGame/SingleGame';
import { Fade } from 'react-reveal';
import '../VideoGame/Game.css';

const HighRated = () => {
    const [games, setGames] = useState([]);
    const [postPerPage] = useState(25);
    const [platforms] = useState('18, 1, 7');

    useEffect(() => {
        const fetchGames = async () => {
            const key = 'b6c3fd718009446aa547da3b07c97945';
            await axios

                .get(
                    `https://api.rawg.io/api/games?key=${key}&ordering=-rating&&platforms=${platforms}&page_size=${postPerPage}`
                )
                .then((res) => {
                    setGames(games.concat(res.data.results).sort(randomize));
                });
        };

        fetchGames();
    }, []);

    const randomize = (a) => {
        return Math.random() - 0.5;
    };

    const renderGames = games.map((game) => {
        return (
            <Fade key={game.id} bottom duration={3000} distance={'1rem'}>
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
            </Fade>
        );
    });

    return (
        <div>
            <h1 className="lead-head">Highest Rated</h1>
            <div className="card-columns">
                {games.length === 0 ? (
                    <h1
                        style={{
                            color: '#fff',
                            fontSize: '40px',
                            height: '100vh',
                        }}
                    >
                        LOADING...
                    </h1>
                ) : (
                    renderGames
                )}
            </div>
        </div>
    );
};

export default HighRated;
