import { useState } from 'react'
import './App.css'

function App() {
  const [lifestyle, setLifestyle] = useState("")
  const [results, setResults] = useState([])

  const handleSearch = async () => {
    const res = await fetch("http://localhost:3001/api/match", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ lifestyle }),
    });
    const data = await res.json();
    setResults(data);
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>NeighborFit</h1>
      <input
        placeholder="Enter lifestyle (urban, family, nature)"
        value={lifestyle}
        onChange={(e) => setLifestyle(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <ul>
        {results.map((n) => (
          <li key={n.id}>{n.name} ({n.city})</li>
        ))}
      </ul>
    </div>
  )
}

export default App
