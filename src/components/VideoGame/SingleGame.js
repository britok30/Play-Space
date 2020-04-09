import React, { Fragment } from "react";
import "./Game.css";
import { Card } from "react-bootstrap";

const Game = (props) => {
    const { name, cover, rating, date, slug, meta} = props;
    return (
        <Fragment>
            <Card className="game-card">
                <Card.Img variant="top" src={cover} className="game-cover" />
                <Card.Body>
                    <Card.Title className="title">{name}</Card.Title>
                    <Card.Text className="detail">
                        Release Date: {date}
                    </Card.Text>
                    <Card.Text className="detail">
                        Rating: {rating ? rating : "N/A"}
                    </Card.Text>
                    <Card.Text className="detail">
                        Metacritic: {meta ? meta : "N/A"}
                    </Card.Text>
                    <Card.Text className="detail">

                    </Card.Text>

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
                </Card.Body>
            </Card>
        </Fragment>
    );
};

export default Game;
