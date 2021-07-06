import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SingleGame from './SingleGame';
import './Game.css';
import { Fade } from 'react-reveal';

const Games = () => {
    let dateObj = new Date();
    let year = dateObj.getUTCFullYear();

    const [games, setGames] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(50);
    const [from] = useState(`${year - 1}-01-01`);
    const [to] = useState(`${year - 1}-12-31`);

    useEffect(() => {
        const fetchGames = () => {
            setCurrentPage(currentPage + 1);
            const key = 'b6c3fd718009446aa547da3b07c97945';
            axios
                .get(
                    `https://api.rawg.io/api/games?key=${key}&dates=${from},${to}&ordering=-added&page_size=${postPerPage}`
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
            <h1 className="lead-head">PlaySpace</h1>

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

export default Games;
