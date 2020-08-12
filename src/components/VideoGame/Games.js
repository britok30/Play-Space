import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import SingleGame from './SingleGame';
import './Game.css';
import spinner from '../images/Spinner-1s-200px.gif';
import InfiniteScroll from 'react-infinite-scroll-component';

const Games = () => {
    const [games, setGames] = useState([]);
    const [pages, setPages] = useState(1);
    const [per, setPer] = useState(39);

    useEffect(() => {
        fetchGames();
    }, []);

    const fetchGames = async () => {
        setPages(pages + 1);

        await axios
            .get(
                `https://cors-anywhere.herokuapp.com/https://rawg.io/api/games?page=${pages}&page_size=${per}`,
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

    const randomize = (a) => {
        return Math.random() - 0.5;
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
        <Fragment>
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
        </Fragment>
    );
};

export default Games;
