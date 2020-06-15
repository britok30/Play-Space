import React, { Component } from "react";
import { Link } from "react-router-dom";
import SingleGame from "../VideoGame/SingleGame";
import axios from "axios";
import { withRouter } from "react-router-dom";
import Play from "../images/play.png";
import "./Navigation.css";

class Navigation extends Component {
    state = {
        games: [],
        searchTerm: "",
        count: 39,
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        const { searchTerm, count } = this.state;

        await axios
            .get(`/api/games?search=${searchTerm}&page_size=${count}`, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                },
            })
            .then((res) => {
                console.log(res.data.results);
                this.setState({ games: res.data.results });
            })
            .catch((err) => console.log(err));
        this.props.history.push("/search");
    };

    handleChange = (e) => {
        this.setState({ searchTerm: e.target.value });
    };

    clearResults = () => {
        this.setState({ games: [] });
    };

    render() {
        const { games } = this.state;

        return (
            <div>
                <nav className="navbar navbar-dark justify-content-between">
                    <Link
                        className="navbar-brand"
                        to="/"
                        onClick={this.clearResults}
                    >
                        <img
                            src={Play}
                            style={{ width: 100, height: 78 }}
                            alt="logo"
                        />
                        <p className="brand-name">Play Space</p>
                    </Link>
                    <form
                        className="form form-inline"
                        onSubmit={this.handleSubmit}
                    >
                        <input
                            className="form-control mr-sm-2 main-input"
                            type="search"
                            placeholder="Search Games"
                            value={this.state.searchTerm}
                            style={{ fontSize: "1.5rem", fontWeight: 400 }}
                            onChange={this.handleChange}
                        />
                        <button
                            className="btn btn-dark main-btn my-2 my-sm-0"
                            type="submit"
                            onSubmit={this.handleSubmit}
                        >
                            Search
                        </button>
                    </form>
                </nav>
                <div className="container">
                    {games.length > 0 ? (
                        <h1 className="lead-head">Search Results</h1>
                    ) : (
                        ""
                    )}
                    <div className="card-columns">
                        {!games ? (
                            <h1>Loading...</h1>
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
                </div>
            </div>
        );
    }
}

export default withRouter(Navigation);
