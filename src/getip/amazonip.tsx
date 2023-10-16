// MyComponent.jsx
import React, { useState, useEffect } from 'react';
import api from '../http_request/amazonip';

function AmazonIP() {
    const [data, setData] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);
    // console.log("Component rendering");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get('/');
                // console.log(response)
                setData(response.data);
                setLoading(false);
            } catch (err) {
                // const data = useState({})
                // setError(err);
                setData("Amazon ip获取失败");
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div>Loading...</div>;
    // if (error) return <div>Error: {(error as Error).message}</div>;

    return (
        <div>
            <h1>Amazon IP:</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}

export default AmazonIP;
