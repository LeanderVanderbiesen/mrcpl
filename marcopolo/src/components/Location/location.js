import {useState, useEffect} from 'react';

export const usePosition = () => {
    const [position, setPosition] = useState({});
    const [error, setError] = useState(null);

    const onChange = ({coords}) => {
        setPosition({
            latitude: coords.latitude,
            longitude: coords.longitude,
        });
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