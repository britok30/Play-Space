import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="wrapper">
            <nav id="sidebar">
                <ul className="play-list">
                    <li className="active">
                        <Link className="link-header" to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <a className="link-header" href="#">
                            Reviews
                        </a>
                    </li>
                    <li>
                        <a className="link-header" href="#">
                            New Releases
                        </a>
                        <ul className="second-list">
                            <li>Last 30 Days</li>
                            <li>This Week</li>
                            <li>Next Week</li>
                            <li>Release Calendar</li>
                        </ul>
                    </li>
                    <li>
                        <a className="link-header" href="#">
                            Top
                        </a>
                        <ul className="second-list">
                            <li>Best of the Year</li>
                            <li>Popular in 2019</li>
                            <li>All Time top 250</li>
                        </ul>
                    </li>
                    <li>
                        <a className="link-header" href="#">
                            Platforms
                        </a>
                        <ul className="second-list">
                            <li>PC</li>
                            <li>Playstation 4</li>
                            <li>Xbox One</li>
                            <li>Nintendo Switch</li>
                            <li>iOS</li>
                            <li>Android</li>
                        </ul>
                    </li>
                    <li>
                        <a className="link-header" href="#">
                            Genres
                        </a>
                        <ul className="second-list">
                            <li>Action</li>
                            <li>RPG</li>
                            <li>Shooter</li>
                            <li>Adventure</li>
                            <li>Racing</li>
                            <li>Sports</li>
                        </ul>
                    </li>
                    <li>
                        <p>Made by Kelvin Brito</p>
                        <p>
                            Video Game data from RAWG API
                            <a href="https://rawg.io/apidocs">-Website: RAWG</a>
                        </p>
                        <p>
                            Not intended for commercial use. Made this for fun
                            as a side project using React
                        </p>
                        <p>
                            Copyright- 2020 - All Video Game information
                            obtained from RAWG
                        </p>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
