import React, { useEffect } from 'react';
import Navigation from '../Navigation/Navigation';
import Sidebar from '../Sidebar/Sidebar';
import Games from '../VideoGame/Games';
import PopularGames from '../Popular/PopularGames';
import Footer from '../Footer/Footer';
import LastMonthGames from '../LastMonth/LastMonth';
import HighRated from '../HighRated/HighRated';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

const App = () => {
    useEffect(() => {
        window.addEventListener('onload', function () {
            setTimeout(function () {
                window.scrollTo(0, 0);
            }, 100);
        });
    }, []);

    return (
        <Router>
            <div className="app">
                <div className="container-fluid">
                    <Navigation />
                    <Sidebar />
                    <div className="row main-row">
                        <div className="col-md-12 col-lg-12 col-sm-12">
                            <div className="container">
                                <Switch>
                                    <Route exact path="/" component={Games} />
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
                                        path="/highrated"
                                        component={HighRated}
                                    />
                                </Switch>
                            </div>
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>
        </Router>
    );
};

export default App;
