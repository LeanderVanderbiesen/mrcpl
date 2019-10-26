import * as React from 'react';
import { Link } from 'react-router-dom';

import { Header } from '../Header/Header';
import  ViewLocation from '../Location/View_location';

export const Home = () => (
    <div className="home">
    <Header/>
    <div className="content">
      <ViewLocation></ViewLocation>

        <Link to={`/wolf`} className="cta btn btn-primary">wolf</Link>
            <Link to={`/sheep`} className="cta btn btn-primary">sheep</Link>

    </div>
    </div>
);