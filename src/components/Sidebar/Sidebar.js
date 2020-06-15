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
                        <Link className="link-header" to="/lastmonth">
                            Last Month Releases
                        </Link>
                    </li>
                    <li>
                        <Link className="link-header" to="/popular">
                            Popular Games
                        </Link>
                    </li>
                    <li>
                        <Link className="link-header" to="/twitch">
                            Twitch Live Streams
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
