import React from 'react';
import logo from './logo.svg';
import './App.css';
import SpeedTestIp from './getip/speedtest'
import IpCn from "./getip/ipcn";
import AmazonIP from "./getip/amazonip";

function App() {
    return (
        <div className="App">
            <SpeedTestIp/>
            <IpCn/>
            <AmazonIP/>
        </div>
    );
}

export default App;
