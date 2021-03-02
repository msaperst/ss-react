import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/navbar/Navbar';

ReactDOM.render(
    // <NavbarSS list={{header1: ['x', 'y', 'z'], header2: [1, 2, 3]}}/>,
    <Header user={null} section="main"/>,
    document.getElementById('root')
);
