import { useEffect } from 'react';
import './App.css'


function RawJSON({response, setResponse}) {

    async function loadData() {
        const request = await fetch('/info');
        const data = await request.json();
        setResponse(JSON.stringify(data, null, 2));
    }

    useEffect(() => {
        loadData();
    }, []);

    return (
        <>
            <p id="data">{response}</p>
            <h1>farty poopy</h1>
        </>
    )
}

export default RawJSON;