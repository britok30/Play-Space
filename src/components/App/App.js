import React, { Component, Fragment } from "react";
import Navigation from "../Navigation/Navigation";
import Sidebar from "../Sidebar/Sidebar";
import Games from "../VideoGame/Games";
import Twitch from "../Twitch/Twitch";
import PopularGames from "../Popular/PopularGames";
import Footer from "../Footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import LastMonthGames from "../LastMonth/LastMonth";

export default class App extends Component {
    componentDidMount() {
        window.addEventListener("beforeunload", function () {
            window.scrollTo(0, 0);
        });
    }
    render() {
        return (
            <Router>
                <Fragment>
                    <div className="app">
                        <div className="container-fluid">
                            <Navigation />
                        </div>
                        <div className="container-fluid">
                            <div className="row main-row">
                                <div className="col-md-2 col-lg-2 col-sm-2">
                                    <Route exact path="/" component={Sidebar} />
                                </div>
                                <div className="col-md-10 col-lg-10 col-sm-10">
                                    <div className="container-fluid">
                                        <Switch>
                                            <Route
                                                exact
                                                path="/"
                                                component={Games}
                                            />
                                            <Route
                                                exact
                                                path="/popular"
                                                component={PopularGames}
                                            />
                                            <Route
                                                exact
                                                path="/lastmonth"
                                                component={LastMonthGames}
                                            />
                                            <Route
                                                exact
                                                path="/tw"
                                                component={Twitch}
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
