import {useState, useEffect} from 'react';

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
        
        fetch('url', {
            method:'post', 
            body:JSON.stringify(
                {
                    latitude:1, longitude:2
                }
            ),
            headers:{
                'Accept' : 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(function(response){
            response.json().then(function(resp){
                console.log(resp)
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