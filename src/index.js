import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/navbar/Navbar';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    // <NavbarSS list={{header1: ['x', 'y', 'z'], header2: [1, 2, 3]}}/>,
    <Header user={null} section="main"/>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
