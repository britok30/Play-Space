import React, { Component } from "react";
import axios from "axios";

class Twitch extends Component {
    state = {
        streams: "",
    };

    loadTwitch = () => {
        let url =
            "https://cors-anywhere.herokuapp.com/https://api.twitch.tv/helix/streams?game_id=33214";
    

        axios
            .get(url, {
                headers: {
                    "Client-ID": `${process.env.REACT_APP_CLIENT_ID}`,
                },
            })
            .then((res) => {
                console.log(res.data);
                this.setState({
                    streams: res.data,
                });
            })
            .catch((err) => console.log(err));
    };

    componentDidMount() {
        return this.loadTwitch;
    }
    render() {
        return <div>Hi</div>;
    }
}

export default Twitch;
