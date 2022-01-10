import { useState, useEffect } from 'react';
import './App.css';


function App() {
  const [planets, setPlanets] = useState<any[]>([])
  const [pageNumber, setPageNumber] = useState(1)

  const fetchApi = async (pageNumber: any) => {
    const res = await fetch(`https://swapi.dev/api/planets?page=${pageNumber}`)
    const data = await res.json()
    setPlanets(data.results)
    console.log(data.results);
  }
  useEffect(() => {
    fetchApi(pageNumber)
  }, [pageNumber])

  const loadMore = () => {
    setPageNumber(prevPageNumber => prevPageNumber + 1)
  }

  return (
    <div className="App">
      <h1>Infinete Scroll</h1>
      {
        planets.map((planet, index) => (
          <div className="planet" key={index}>
            <h2>planet : {planet.name}</h2>
            <h2>climate : {planet.climate}</h2>
            <h2>created : {planet.created}</h2>
          </div>
        ))
      }
      <div className="loading">
        <h3>{planets.length}</h3>
        <button
          onClick={loadMore} >
          Load More
        </button>
      </div>
    </div>
  );
}

export default App;
