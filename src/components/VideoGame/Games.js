import React, { Component, Fragment } from "react";
import SingleGame from "./SingleGame";
import "./Game.css";
import InfiniteScroll from "react-infinite-scroll-component";

class Games extends Component {
  render() {
    const { games, fetchGames } = this.props;

    return (
      <Fragment>
        <h1 className="lead-head">
          PlaySpace
        </h1>
        <InfiniteScroll
          className="row"
          dataLength={games.length}
          next={fetchGames}
          hasMore={true}
          loader={
            <h1 style={{ fontSize: "5rem", color: "#fff" }}>Loading...</h1>
          }
        >
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
        </InfiniteScroll>
      </Fragment>
    );
  }
}

export default Games;
