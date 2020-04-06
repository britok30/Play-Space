import React, { Component, Fragment } from "react";
import SingleGame from "../VideoGame/SingleGame";
import "./GameInfo.css";

class GameInfo extends Component {
    render() {
        const { games } = this.props;

        return (
            <Fragment>
                <div className="container">
                    {games.map(game => {
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
                    })}
                </div>
            </Fragment>
        );
    }
}

export default GameInfo;
