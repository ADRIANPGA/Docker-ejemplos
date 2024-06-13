import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [data, setData] = useState([]);

    // Check backend url from the environment variable
    const backendUrl = process.env.BACKEND_URL || 'http://localhost:7070/api';

    useEffect(() => {
        fetch(backendUrl + '/data')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="App">
            <h1>Notas</h1>
            <div className="table-responsive">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Nota</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <td data-label="ID">{item.id}</td>
                                <td data-label="Nombre">{item.name}</td>
                                <td data-label="Nota">{item.value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

}

export default App;
