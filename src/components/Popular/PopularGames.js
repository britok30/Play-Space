import React, { Component, Fragment } from "react";
import Navigation from "../Navigation/Navigation";
import axios from "axios";
import "./PopularGames.css";

class PopularGames extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTerm: "",
            games: [],
            dates: "2019-01-01,2019-12-31",
            page: 1,
            per: 39,
            count: 25
        };
    }

    loadGames = () => {
        const { date, per, page } = this.state;
        axios
            .get(
                `https://cors-anywhere.herokuapp.com/https://rawg.io/api/games?dates=${date}&page=${page}&page_size=${per}`
            )
            .then(res => {
                console.log(res.data.results);
                this.setState({
                    games: res.data.results
                });
            })
            .catch(err => console.log(err));
    };
    
    componentDidMount = () => {
        this.loadGames();
    };

    render() {
        return (
            <Fragment>
                <div className="popular container-fluid">
                    <h1>HIIIII</h1>
                    <Navigation />
                </div>
            </Fragment>
        );
    }
}

export default PopularGames;
