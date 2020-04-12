import React from "react";
import { Navbar, Form, FormControl, Button } from "react-bootstrap";
import axios from "axios";
import "./Navigation.css";
import { Link } from "react-router-dom";
import Play from "../images/play.png";

class Navigation extends React.Component {
    state = {
        searchTerm: "",
        count: 39
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
        const { search, submit } = this.props;

        return (
            <div>
                <Navbar className="navbar navbar-dark" expand="lg">
                    <Link to="/" className="navbar-brand">
                        <img
                            src={Play}
                            style={{ width: 100, height: 78 }}
                            alt="logo"
                        />
                        <p className="brand-name">Play Space</p>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Form inline className="form" onSubmit={submit}>
                            <FormControl
                                type="text"
                                placeholder="Search Games"
                                className="mr-sm-2 main-input"
                                style={{ fontSize: "1.5rem", fontWeight: 400 }}
                                onChange={search}
                            />
                            <Button
                                className="main-btn"
                                variant="dark"
                                type="submit"
                                onSubmit={submit}
                            >
                                Search
                            </Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Navigation;
