import * as React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => (
    <header>
        <h1>TIKKIE</h1>

        <Link to={`/`} className="close"><h2 aria-hidden="true">&times;</h2></Link>
    </header>
);