import React, { Component, Fragment } from "react";
import axios from "axios";
import SingleGame from "../VideoGame/SingleGame";
import "../VideoGame/Game.css";

class LastMonthGames extends Component {
    state = {
        games: [],
        from: "2020-05-01",
        to: "2020-05-31",
        per: 25,
        platforms: '18, 1, 7' //PS4: 18, Nintendo Switch: 7, Xbox One: 1
    };

    fetchGames = async () => {
        const { from, to, per, platforms } = this.state;
        this.setState({ page: this.state.page + 1 });
        await axios
            .get(`api/games?dates=${from},${to}&platforms=${platforms}&page_size=${per}`, {
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
                <h1 className="lead-head">Last Month Releases</h1>
                <div className="card-columns">
                    {!games ? (
                        <h1>No games found.</h1>
                    ) : (
                        games.map((game) => {
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
                        })
                    )}
                </div>
            </Fragment>
        );
    }
}

export default LastMonthGames;
