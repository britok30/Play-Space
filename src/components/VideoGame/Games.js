import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SingleGame from './SingleGame';
import './Game.css';
import spinner from '../images/Spinner-1s-200px.gif';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Fade } from 'react-reveal';

const Games = () => {
    const [games, setGames] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(39);

    useEffect(() => {
        fetchGames();
    }, []);

    const fetchGames = () => {
        setCurrentPage(currentPage + 1);

        axios
            .get(
                `https://cors-anywhere.herokuapp.com/https://rawg.io/api/games?page=${currentPage}&page_size=${postPerPage}`,
                {
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                    },
                }
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
            <InfiniteScroll
                className="card-columns"
                dataLength={games.length}
                next={fetchGames}
                hasMore={true}
                loader={<img className="spinner" src={spinner} alt="spinner" />}
            >
                {renderGames}
            </InfiniteScroll>
        </div>
    );
};

export default Games;

