import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../Layout/Layout';
import './Game.css';

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

    return (
        <div>
            <Layout games={games} title="PlaySpace" />
        </div>
    );
};

export default Games;
