import * as React from 'react';
import { Link } from 'react-router-dom';

import  ViewLocation from '../Location/View_location'

export const Home = () => (
    <div className="wrapper">
      <ViewLocation></ViewLocation>
        <Link to={`/`} className="cta btn">ENTER</Link>

    </div>
);