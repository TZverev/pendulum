import React from 'react';
import { render } from 'react-dom';
import './css/style.css';
import Body from './components/body.jsx';


const App = () => {
    return (
        <React.StrictMode>
            <Body />
        </React.StrictMode>
    )
}

render(<App />, document.getElementById('app'));