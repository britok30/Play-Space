import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../Layout/Layout';
import '../VideoGame/Game.css';

const LastMonthGames = () => {
    let dateObj = new Date();
    let month = dateObj.getUTCMonth() + 1;
    let year = dateObj.getUTCFullYear();

    const [games, setGames] = useState([]);
    const [from] = useState(`${year}-0${month - 1}-01`);
    const [to] = useState(`${year}-0${month - 1}-30`);
    const [postPerPage] = useState(25);
    const [platforms] = useState('18, 1, 7');

    useEffect(() => {
        const fetchGames = async () => {
            const key = 'b6c3fd718009446aa547da3b07c97945';
            await axios

                .get(
                    `https://api.rawg.io/api/games?key=${key}&dates=${from},${to}&platforms=${platforms}&page_size=${postPerPage}`
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
            <Layout games={games} title="Last Month Releases" />
        </div>
    );
};

export default LastMonthGames;
