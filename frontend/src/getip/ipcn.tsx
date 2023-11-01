// MyComponent.jsx
import React, { useState, useEffect } from 'react';
import api from '../http_request/ipcn';

function IpCn() {
    const [data, setData] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);
    // console.log("Component rendering");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get('/api/index?type=0');
                // console.log(response)
                setData(response.data);
                setLoading(false);
            } catch (err) {
                // const data = useState({})
                // setError(err);
                setData("IPCN获取失败");
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div>Loading...</div>;
    // if (error) return <div>Error: {(error as Error).message}</div>;

    return (
        <div>
            <h1>ipcn:</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}

export default IpCn;
