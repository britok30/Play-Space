import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App/App';
import { Cube } from 'react-preloaders';

ReactDOM.render(
    <div>
        <App />
        <Cube background="#181818" color="#fff" />
    </div>,

    document.getElementById('root')
);
