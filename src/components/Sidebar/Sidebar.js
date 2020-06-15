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
                            Popular Games
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
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
