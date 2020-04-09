import React, { Component, Fragment } from "react";
import Navigation from "../Navigation/Navigation";
import Sidebar from "../Sidebar/Sidebar";
import Games from "../VideoGame/Games";
import PopularGames from "../Popular/PopularGames";
import Footer from "../Footer/Footer";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

export default class App extends Component {
    state = {
        searchTerm: "",
        games: [],
        id: "",
        page: 1,
        per: 39,
        count: 25,
    };

    loadGames = () => {
        const { per, page } = this.state;
        axios
            .get(
                `https://cors-anywhere.herokuapp.com/https://rawg.io/api/games?page=${page}&page_size=${per}`
            )
            .then((res) => {
                console.log(res.data.results);
                this.setState({
                    games: res.data.results,
                });
            })
            .catch((err) => console.log(err));
    };

    fetchGames = () => {
        const { count, page } = this.state;
        this.setState({ page: this.state.page + 1 });
        axios
            .get(
                `https://cors-anywhere.herokuapp.com/https://rawg.io/api/games?page=${page}&page_size=${count}`
            )
            .then((res) => {
                console.log(res.data.results);
                this.setState({
                    games: this.state.games.concat(res.data.results),
                });
            });
    };

    componentDidMount = () => {
        this.loadGames();
    };

    // --------------------------------------------------------
    // EVENT HANDLERS

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

    loadSingleGame = (gameId) => {
        const { id } = this.state;
        axios
            .get(
                `https://cors-anywhere.herokuapp.com/https://rawg.io/api/games/${id}`
            )
            .then((res) => {
                console.log(res.data.results);
                this.setState({
                    games: res.data.results,
                    id: res.data.results[0].id,
                });
            })
            .catch((err) => console.log(err));
    };

    // --------------------------------------------------------

    render() {
        return (
            <Router>
                <Fragment>
                    <div className="app">
                        <div className="container-fluid">
                            <Navigation
                                search={this.handleChange}
                                submit={this.handleSubmit}
                            />
                        </div>
                        <div className="container-fluid">
                            <div className="row main-row">
                                <div className="col-md-2">
                                    <Sidebar />
                                </div>
                                <div className="col-md-10">
                                    <div className="container-fluid">
                                        <Switch>
                                            <Games
                                                games={this.state.games}
                                                fetchGames={this.fetchGames}
                                            />
                                            <Route
                                                exact
                                                path="/popular"
                                                component={PopularGames}
                                            />
                                        </Switch>
                                    </div>
                                </div>
                                <Footer />
                            </div>
                        </div>
                    </div>
                </Fragment>
            </Router>
        );
    }
}
