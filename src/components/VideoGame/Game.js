import React, { Fragment } from "react";
import "./Game.css";
import { Card, Button } from "react-bootstrap";

const Game = props => {
    const { name, cover, rating, date, meta, slug } = props;
    return (
        <Fragment>
            <Card className="game-card">
                <Card.Img
                    variant="top"
                    src={cover}
                    className="game-cover"
                />
                <Card.Body>
                    <Card.Title className="title">{name}</Card.Title>
                    <Card.Text className="detail"></Card.Text>
                    <Button
                        className="btn"
                        variant="outline-dark"
                        style={{ margin: 2 }}
                    >
                        <a
                            href={`https://rawg.io/games/${slug}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            More Info
                        </a>
                    </Button>
                    <Button
                        className="btn"
                        variant="outline-dark"
                        style={{ margin: 2 }}
                    >
                        <a
                            href={`https://rawg.io/games/${slug}/screenshots`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Screenshots
                        </a>
                    </Button>
                </Card.Body>
            </Card>
        </Fragment>
    );
};

export default Game;
