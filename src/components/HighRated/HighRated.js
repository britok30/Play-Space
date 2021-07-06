import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../VideoGame/Game.css';
import Layout from '../Layout/Layout';

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

    return (
        <div>
            <Layout games={games} title="Highest Rated" />
        </div>
    );
};

export default HighRated;
