import * as React from 'react';
import { Link } from 'react-router-dom';

import { Header } from '../Header/Header';
import ViewLocation from '../Location/View_location'

export const Wolf = () => (
    <div className="wolf">
        <Header />
    <div className="content">

        <p>Je bent een WOLF,</p>
        <p>op zoek naar een schaapje</p>

        <ViewLocation></ViewLocation>

        <Link to={`/`} className="cta btn btn-primary">Tikkie!</Link>

    </div>
    </div>
);