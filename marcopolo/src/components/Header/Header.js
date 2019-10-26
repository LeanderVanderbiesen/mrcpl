import * as React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => (
    <header>
        <h1>Tikkie ;)</h1>

        <Link to={`/`} className="close"><h1 aria-hidden="true">&times;</h1></Link>
    </header>
);