import React, { Component, Fragment } from "react";
import Game from "./Game";
import "./Game.css";
import InfiniteScroll from "react-infinite-scroll-component";

class Games extends Component {
  render() {
    const { games, fetchGames } = this.props;

    return (
      <Fragment>
        <h1 className="lead-head">
          Play <span className="lite">Space</span>
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
              <Game
                className="col-md-4"
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

//  {
//    !games.length ? (
//      <h1 style={{ fontSize: "5rem", color: "#fff" }}>Loading...</h1>
//    ) : (
//      games.map(game => {
//        return (
//          <Game
//            key={game.id}
//            name={game.name}
//            description={game.description}
//            cover={game.background_image}
//            rating={game.rating}
//            meta={game.metacritic}
//            date={game.released}
//            slug={game.slug}
//          />
//        );
//      })
//    );
//  }
