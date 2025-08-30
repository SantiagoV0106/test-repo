import { useEffect, useState } from 'react'
import './App.css'


// https://itunes.apple.com/search?term=YOUR_QUERY&entity=song&limit=12

// 1. Trea los datos primero (En este caso, teniendo en cuenta la busqueda o QUERY). Como se van a mostrar songs[{id: 1, name: 'Run', Author: 'One Republic'}]
// 2. Mostrar los datos. *(Estado const [songs, setSongs] = useState([]))* songs.map(()=> {return()})
// 2.1 crear el componente tarjeta para mostrar cada canción
// 3. Agregar sección Liked. *(songs === liked const [liked, setLiked] = useState([]))* liked.map(()=> {return()})

// Conditional rendering => Si no hay canciones ? entonces muestro un mensaje de "No hay canciones" : "Muestro las canciones"

function App() {
  const [search, setSearch] = useState('')
  const [songs, setSongs] = useState([])
  const [error, setError] = useState('')

  const handleInputChange = (e) => {
    setSearch(e.target.value)
  }

  const getSongs = async (search) => {
    try {
      const res = await fetch(`https://itunes.apple.com/search?term=${search}&entity=song&limit=12`)
      if (res.ok) {
        const data = await res.json()
        console.log(data.results);
        setSongs(data.results)
      }
    } catch (error) {
      console.error(error);
      setError('Error while loading songs')
    }
  }

  useEffect(() => {
    console.log(`Cambio el input a ${search}`);
    const debounce = setTimeout(() => {
      getSongs(search)
    }, 500);
    return () => clearTimeout(debounce)
  }, [search])

  return (
    <>
      <form>
        <input type="text" placeholder='Search' value={search} name='search' onChange={handleInputChange} />
        <button type='submit'>Search</button>
      </form>
      {
        error ? <p>{error}</p> : <p>All good</p>
      }
      <section>
        {songs.length > 0 ? songs.map(({ artistName, trackName }) =>
          <article>
            <h2>{trackName}</h2>
            <h3>{artistName}</h3>
          </article>) : <p>No Songs Yet</p>}
      </section>
    </>
  )
}
export default App
