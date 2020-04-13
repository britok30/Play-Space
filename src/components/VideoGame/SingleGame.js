import React, { Fragment } from "react";
import "./Game.css";

const Game = (props) => {
    const { name, cover, rating, date, slug, meta } = props;
    return (
        <Fragment>
            <div className="card game-card">
                <img
                    className="card-img-top game-cover"
                    src={cover}
                    alt="game-cover"
                />
                <div className="card-body">
                    <h5 className="card-title title">{name}</h5>
                    <p className="card-text detail">Release Date: {date}</p>
                    <p className="card-text detail">
                        Rating: {rating ? rating : "N/A"}
                    </p>
                    <p className="card-text detail">
                        Metacritic: {meta ? meta : "N/A"}
                    </p>
                    <a
                        className="more-info"
                        href={`https://rawg.io/games/${slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        More Info
                    </a>
                    <a
                        className="screenshots"
                        href={`https://rawg.io/games/${slug}/screenshots`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Screenshots
                    </a>
                </div>
            </div>
        </Fragment>
    );
};

export default Game;
