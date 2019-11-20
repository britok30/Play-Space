import React, { Component, Fragment } from "react";
import Navigation from "../Navigation/Navigation";
import Sidebar from "../Sidebar/Sidebar";
import Games from "../VideoGame/Games";
import Footer from "../Footer/Footer";
import axios from "axios";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: "",
      games: [],
      page: 1,
      per: 39,
      count: 25
    };
  }

  loadGames = () => {
    const { per, page } = this.state;
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://rawg.io/api/games?page=${page}&page_size=${per}`
      )
      .then(res => {
        console.log(res.data.results);
        this.setState({
          games: res.data.results
        });
      })
      .catch(err => console.log(err));
  };

  fetchGames = () => {
    const { count, page } = this.state;
    this.setState({ page: this.state.page + 1 });
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://rawg.io/api/games?page=${page}&page_size=${count}`
      )
      .then(res => {
        console.log(res.data.results);
        this.setState({
          games: this.state.games.concat(res.data.results)
        });
      });
  };

  // loadMore = () => {
  //   this.setState(
  //     prevState => ({
  //       page: prevState.page + 1,
  //       scrolling: true
  //     }),
  //     this.loadGames
  //   );
  // };

  componentDidMount() {
    this.loadGames();
  }

  // --------------------------------------------------------
  // EVENT HANDLERS

  handleSubmit = e => {
    e.preventDefault();

    const { searchTerm, count } = this.state;
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://rawg.io/api/games?search=${searchTerm}&page_size=${count}`
      )
      .then(res => {
        console.log(res.data.results);
        this.setState({ games: [...res.data.results] });
      })
      .catch(err => console.log(err));
  };

  handleChange = e => {
    this.setState({ searchTerm: e.target.value });
  };

  // --------------------------------------------------------

  render() {
    return (
      <Fragment>
        <div className="app">
          <div className="container">
            <Navigation search={this.handleChange} submit={this.handleSubmit} />
          </div>
          <div className="container-fluid">
            <div className="row main-row">
              <div className="col-md-2">
                <Sidebar />
              </div>
              <div className="col-md-10">
                <div className="container">
                  <Games
                    games={this.state.games}
                    fetchGames={this.fetchGames}
                  />
                </div>
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
