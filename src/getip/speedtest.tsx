// MyComponent.jsx
import React, { useState, useEffect } from 'react';
import api from '../http_request/speedtest';

function SpeedTestIp() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    console.log("Component rendering");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get('/ip');
                console.log(response)
                setData(response.data);
                setLoading(false);
            } catch (err) {
                // setError(err);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {(error as Error).message}</div>;

    return (
        <div>
            <h1>Speedtest:</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}

export default SpeedTestIp;
