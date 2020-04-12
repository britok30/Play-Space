import React, {Component} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Play from "../images/play.png";
import "./Navigation.css";

class Navigation extends Component {
    state = {
        games: [],
        searchTerm: "",
        count: 39,
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { searchTerm, count } = this.state;
        axios
            .get(
                `https://cors-anywhere.herokuapp.com/https://rawg.io/api/games?search=${searchTerm}&page_size=${count}`
            )
            .then((res) => {
                console.log(res.data.results);
                this.setState({ games: [...res.data.results] });
            })
            .catch((err) => console.log(err));
    };

    handleChange = (e) => {
        this.setState({ searchTerm: e.target.value });
    };

    render() {
        return (
            <div>
                <nav className="navbar navbar-dark justify-content-between">
                    <Link className="navbar-brand" to="/">
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
            </div>
        );
    }
}

export default Navigation;

/* <Fragment>
    <form className="form" onSubmit={this.onSubmit}>
        <div className="form-group">
            <input
                className="search"
                type="text"
                name="name"
                value={this.state.searchTerm}
                placeholder="Search News"
                onChange={this.onChange}
            />
        </div>

        <div className="row">
            <h2 className="sub-heading top-lead">Search</h2>
        </div>
        <div className="row">
            {loading ? (
                <h1>Please enter your search.</h1>
            ) : (
                news.map((article, index) => {
                    return (
                        <Search
                            key={index}
                            title={article.title}
                            link={article.url}
                            img={article.urlToImage}
                            desc={article.description}
                            source={article.source.name}
                        />
                    );
                })
            )}
        </div>
    </form>
</Fragment>; */
