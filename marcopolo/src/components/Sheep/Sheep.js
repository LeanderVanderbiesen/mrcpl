import * as React from 'react';
//import { Link } from 'react-router-dom';
import { Header } from '../Header/Header';
import ViewLocation from '../Location/View_location'

export const Sheep = () => (
    <div className="sheep">
        <Header />
    <div className="content">

            <p>Je bent een SCHAAP,</p>
            <p>pas op voor de wolf!</p>

        <ViewLocation></ViewLocation>

    </div>
    </div>
);