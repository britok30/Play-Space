import React, { Component, Fragment } from "react";
import axios from "axios";
import SingleGame from "./SingleGame";
import "./Game.css";
import InfiniteScroll from "react-infinite-scroll-component";

class Games extends Component {
    state = {
        games: [],
        page: 1,
        per: 39,
    };
    
    fetchGames = () => {
        const { per, page } = this.state;
        this.setState({ page: this.state.page + 1 });
        axios
            .get(
                `https://cors-anywhere.herokuapp.com/https://rawg.io/api/games?page=${page}&page_size=${per}`
            )
            .then((res) => {
                console.log(res.data.results);
                this.setState({
                    games: this.state.games
                        .concat(res.data.results)
                        .sort(this.randomize),
                });
            });
    };

    randomize = (a) => {
        return Math.random() - 0.5;
    };

    componentDidMount = () => {
        this.fetchGames();
    };

    render() {
        const { games } = this.state;

        return (
            <Fragment>
                <h1 className="lead-head">PlaySpace</h1>
                <InfiniteScroll
                    className="row"
                    dataLength={games.length}
                    next={this.fetchGames}
                    hasMore={true}
                    loader={
                        <h1 style={{ fontSize: "5rem", color: "#fff" }}>
                            Loading...
                        </h1>
                    }
                >
                    {games.map((game) => {
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
