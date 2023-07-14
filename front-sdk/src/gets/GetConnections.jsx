async function GetConnections() {
    const response = await fetch("http://localhost:8000/connection");
    const connections = await response.json();
    return connections;
}

export default GetConnections;
