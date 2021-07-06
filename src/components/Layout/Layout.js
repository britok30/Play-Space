import React from 'react';
import SingleGame from '../VideoGame/SingleGame';
import { Fade } from 'react-reveal';

const Layout = ({ games, title }) => {
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
            <h1 className="lead-head">{title}</h1>
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

export default Layout;
