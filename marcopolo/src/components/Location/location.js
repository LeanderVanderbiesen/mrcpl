import {useState, useEffect} from 'react';
let tableId = null;
export const usePosition = () => {
    const [position, setPosition] = useState({});
    const [error, setError] = useState(null);

    const onChange = ({coords}) => {

        setPosition({
            latitude: coords.latitude,
            longitude: coords.longitude,
        });
        console.log('latitude:', coords.latitude,
            'longitude:' ,coords.longitude);

        let self = this;
        fetch('http://marcopolo_api.test/api/putData', {
            method:'post', 
            body:JSON.stringify(
                {
                    'table_id': tableId,
                    'latitude': coords.latitude,
                    'longitude': coords.longitude
                }
            ),
            headers:{
                'Accept' : 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(function(response){
            response.json().then(function(resp){
                tableId = resp.data;
            })
        })
    };

    const onError = (error) => {
        setError(error.message);
    };

    // setInterval(() => {
    //     setPosition({
    //         latitude: Math.floor(Math.random() *1000),
    //         longitude: Math.floor(Math.random() * 1000),
    //     });
    // }, 2000);

    useEffect(() => {
        const geo = navigator.geolocation;
        if (!geo) {
            setError('Geolocation is not supported');
            return;
        }
        let watcher = geo.watchPosition(onChange, onError);
        return () => geo.clearWatch(watcher);
    }, []);

    return {...position, error};
}