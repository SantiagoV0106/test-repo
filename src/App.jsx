import './App.css'

function App() {
  // https://itunes.apple.com/search?term=YOUR_QUERY&entity=song&limit=12

  // 1. Trea los datos primero (En este caso, teniendo en cuenta la busqueda o QUERY). Como se van a mostrar songs[{id: 1, name: 'Run', Author: 'One Republic'}]
  // 2. Mostrar los datos. *(Estado const [songs, setSongs] = useState([]))* songs.map(()=> {return()})
  // 2.1 crear el componente tarjeta para mostrar cada canción
  // 3. Agregar sección Liked. *(songs === liked const [liked, setLiked] = useState([]))* liked.map(()=> {return()})

  // Conditional rendering => Si no hay canciones ? entonces muestro un mensaje de "No hay canciones" : "Muestro las canciones"

  return (
    <>
    </>
  )
}

{/* <section className='songs-container'>
    {songs.map((song)=> {
      return(
        <Card title={song.title}/>
      )
    })}
    </section>
    
    <section className='liked-container'>
    {liked.map((liked)=> {
      return(
        <Card title={song.title}/>
      )
    })}
    </section> */}
export default App
