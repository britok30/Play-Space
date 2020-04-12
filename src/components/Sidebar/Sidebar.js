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
                        <Link className="link-header" to="/">
                            Reviews
                        </Link>
                    </li>
                    <li>
                        <Link className="link-header" to="/">
                            New Releases
                        </Link>
                    </li>
                    <li>
                        <Link className="link-header" to="/">
                            Top
                        </Link>
                    </li>
                    <li>
                        <Link className="link-header" to="/">
                            Platforms
                        </Link>
                    </li>
                    <li>
                        <Link className="link-header" to="/">
                            Genres
                        </Link>
                    </li>
                    <li>
                        <Link className="link-header" to="/">
                            Twitch Live Streams
                        </Link>
                    </li>
                    <li className="last-child">
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
