import React, { Component, Fragment } from "react";
import Navigation from "../Navigation/Navigation";
import Sidebar from "../Sidebar/Sidebar";
import Games from "../VideoGame/Games";
import PopularGames from "../Popular/PopularGames";
import Twitch from "../Twitch/Twitch";
import Footer from "../Footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

export default class App extends Component {
    // loadGames = () => {
    //     const { per, page } = this.state;
    //     axios
    //         .get(
    //             `https://cors-anywhere.herokuapp.com/https://rawg.io/api/games?page=${page}&page_size=${per}`
    //         )
    //         .then((res) => {
    //             console.log(res.data.results);
    //             this.setState({
    //                 games: res.data.results,
    //             });
    //         })
    //         .catch((err) => console.log(err));
    // };

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
                                            <Route
                                                exact
                                                path="/"
                                                component={Games}
                                            />
                                            <Route
                                                exact
                                                path="/twitch"
                                                component={Twitch}
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
