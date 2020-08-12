import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SingleGame from '../VideoGame/SingleGame';
import { Fade } from 'react-reveal';
import '../VideoGame/Game.css';

const LastMonthGames = () => {
    const [games, setGames] = useState([]);
    const [from] = useState('2020-07-01');
    const [to] = useState('2020-07-31');
    const [postPerPage] = useState(25);
    const [platforms] = useState('18, 1, 7');

    useEffect(() => {
        const fetchGames = async () => {
            await axios
                .get(
                    `https://cors-anywhere.herokuapp.com/https://rawg.io/api/games?dates=${from},${to}&platforms=${platforms}&page_size=${postPerPage}`,
                    {
                        headers: {
                            'Access-Control-Allow-Origin': '*',
                        },
                    }
                )
                .then((res) => {
                    console.log(res.data.results);
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
            <Fade bottom duration={3000} distance={'1rem'}>
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
            <h1 className="lead-head">Last Month Releases</h1>
            <div className="card-columns">
                {!games ? <h1>No games found.</h1> : renderGames}
            </div>
        </div>
    );
};

export default LastMonthGames;
