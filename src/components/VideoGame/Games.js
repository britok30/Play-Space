import React, { Component, Fragment } from "react";
import axios from "axios";
import SingleGame from "./SingleGame";
import "./Game.css";
import spinner from "../images/Spinner-1s-200px.gif";
import InfiniteScroll from "react-infinite-scroll-component";

class Games extends Component {
    state = {
        games: [],
        page: 1,
        per: 39,
    };

    fetchGames = async () => {
        const { per, page } = this.state;
        this.setState({ page: this.state.page + 1 });
        await axios
            .get(`/api/games?page=${page}&page_size=${per}`, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                },
            })
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

    componentDidMount = async () => {
        await this.fetchGames();
    };

    render() {
        const { games } = this.state;

        return (
            <Fragment>
                <h1 className="lead-head">PlaySpace</h1>
                <InfiniteScroll
                    className="card-columns"
                    dataLength={games.length}
                    next={this.fetchGames}
                    hasMore={true}
                    loader={<img className="spinner" src={spinner} />}
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
