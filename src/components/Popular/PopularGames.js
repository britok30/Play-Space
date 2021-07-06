import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../VideoGame/Game.css';
import Layout from '../Layout/Layout';

const PopularGames = () => {
    let dateObj = new Date();
    let year = dateObj.getUTCFullYear();
    const [games, setGames] = useState([]);

    const [from] = useState(`${year - 1}-01-01`);
    const [to] = useState(`${year - 1}-12-31`);
    const [postPerPage] = useState(25);

    useEffect(() => {
        const fetchGames = async () => {
            const key = 'b6c3fd718009446aa547da3b07c97945';
            await axios
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

    return (
        <div>
            <Layout games={games} title={`Popular Games of ${year - 1}`} />
        </div>
    );
};

export default PopularGames;
