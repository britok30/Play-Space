import React, { Fragment } from "react";
import "./Game.css";
import { Card, Button } from "react-bootstrap";

const Game = props => {
  const { name, cover, rating, date, meta, slug } = props;
  return (
    <Fragment>
          <Card className="game-card">
            <Card.Img variant="top" src={cover} style={{ borderRadius: 5 }} />
            <Card.Body>
              <Card.Title className="title">{name}</Card.Title>
              <hr style={{ border: ".5px solid #fff" }} />
              {/* <Card.Text className="detail">Genre: {genre}</Card.Text> */}
              <hr style={{ border: ".5px solid #fff" }} />
              <Card.Text className="detail">
                Rating: {!rating ? "N/A" : rating.toFixed(2)}/5
              </Card.Text>
              <hr style={{ border: ".5px solid #fff" }} />
              <Card.Text className="detail">
                Metacritic: {!meta ? "N/A" : meta}
              </Card.Text>
              <hr style={{ border: ".5px solid #fff" }} />
              <Card.Text className="detail">Release Date: {date}</Card.Text>
              <hr style={{ border: ".5px solid #fff" }} />
              <Card.Text className="detail"></Card.Text>
              <Button
                className="btn"
                variant="outline-dark"
                style={{ margin: 2 }}
              >
                <a href={`https://rawg.io/games/${slug}`} target="_blank">
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
