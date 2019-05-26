import React from 'react';
import {Link} from 'react-router-dom';
function Header(){
    return(
        <header style={HeaderStyle}>
            <h1>ToDo LIst</h1>
            <Link style={linkstyle} to="/">Home </Link>|
            <Link style={linkstyle} to="/About"> About</Link>
        </header>
    )
}

const HeaderStyle={
    background:'black',
    color:  'white',
    textAlign: 'center',
    padding:'10px',
    marginBotttom: '2px'
}

const linkstyle={
    color: 'white',
    fontFamily:'Ariel'
}

export default Header;