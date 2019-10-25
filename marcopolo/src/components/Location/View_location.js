import * as React from 'react';
//import { Link } from 'react-router-dom';

import { usePosition } from "./location";

const ViewLocation =()=> {
        const { latitude, longitude, error } = usePosition();
    
    return (
        <div class="location">
            <code>
                latitude: {latitude}<br />
                longitude: {longitude}<br />
                error: {error}
            </code>
        </div>
    );
   
    }


export default ViewLocation;