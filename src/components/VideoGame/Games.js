import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SingleGame from './SingleGame';
import './Game.css';
import { Fade } from 'react-reveal';

const Games = () => {
    const [games, setGames] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(50);
    const [from] = useState('2020-01-01');
    const [to] = useState('2020-12-31');

    useEffect(() => {
        fetchGames();
    }, []);

    const fetchGames = () => {
        setCurrentPage(currentPage + 1);
        let config = {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
                'Access-Control-Allow-Headers':
                    'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
            },
        };
        axios
            .get(
                `https://cors-anywhere.herokuapp.com/https://rawg.io/api/games?dates=${from},${to}&ordering=-added&page_size=${postPerPage}`,
                config
            )
            .then((res) => {
                console.log(res.data.results);
                setGames(games.concat(res.data.results).sort(randomize));
            });
    };

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
            <Fade bottom cascade duration={3000} distance={'100px'}>
                <h1 className="lead-head">PlaySpace</h1>
            </Fade>

            <div className="card-columns">{renderGames}</div>
        </div>
    );
};

export default Games;
