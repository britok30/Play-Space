import React, { useState } from 'react';
import SingleGame from '../VideoGame/SingleGame';
import axios from 'axios';
import { Link, withRouter, useHistory } from 'react-router-dom';

import Play from '../images/play.png';
import './Navigation.css';

const Navigation = () => {
    const [games, setGames] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [count, setCount] = useState(39);

    let history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios
            .get(
                `https://cors-anywhere.herokuapp.com/https://rawg.io/api/games?search=${searchTerm}&page_size=${count}`,
                {
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                    },
                }
            )
            .then((res) => {
                console.log(res.data.results);
                setGames(res.data.results);
            })
            .catch((err) => console.log(err));
        history.push('/search');
    };

    const clearResults = () => {
        setGames([]);
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
            <nav className="navbar navbar-dark justify-content-between">
                <Link className="navbar-brand" to="/" onClick={clearResults}>
                    <img
                        src={Play}
                        style={{ width: 100, height: 78 }}
                        alt="logo"
                    />
                    <p className="brand-name">Play Space</p>
                </Link>
                <form className="form form-inline" onSubmit={handleSubmit}>
                    <input
                        className="form-control mr-sm-2 main-input"
                        type="search"
                        placeholder="Search Games"
                        value={searchTerm}
                        style={{ fontSize: '1.5rem', fontWeight: 400 }}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button
                        className="btn btn-dark main-btn my-2 my-sm-0"
                        type="submit"
                        onSubmit={handleSubmit}
                    >
                        Search
                    </button>
                </form>
            </nav>
            <div className="container">
                {games.length > 0 ? (
                    <h1 className="lead-head">Search Results</h1>
                ) : (
                    ''
                )}
                <div className="card-columns">
                    {!games ? <h1>Loading...</h1> : renderGames}
                </div>
            </div>
        </div>
    );
};

export default withRouter(Navigation);
