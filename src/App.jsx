import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import getRandomNumber from './utils/getRandomNumber'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'
import FormLocation from './components/FormLocation'

function App() {

  const [location, setLocation] = useState()
  const [idLocation, setIdLocation] = useState(getRandomNumber(126))
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/location/${idLocation}`
    setIsLoading(true)
    axios.get(url)
      .then(res => {
        setLocation(res.data)
        setHasError(false)
      })
      .catch(err => {
        console.error(err)
        setHasError(true)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [idLocation])



  return (
    

    <div>
      <header className='banner'></header>
      <div className='title-container'>
      <h1>Rick and Morty App</h1>
      </div>

      <div className='form-container'>
      <FormLocation
        setIdLocation={setIdLocation}
      />
      
      </div>

      {

        isLoading
          ? (<div className="spinner">
            <div className="spinner1"></div>
          </div>)
          : (
            hasError
            ? ( <h2>❌Hey! you moust provide an id fron 1 to 126</h2> )
            : (
            <>
              <div className='location-container'>
              <LocationInfo
                location={location}
              />
              </div>
              <div className='resident-container'>
                {
                  location?.residents.map(url => (
                    <ResidentCard
                      key={url}
                      url={url}
                    />
                  ))
                }
              </div>
            </>
          
        )
        
      )   
      }
    </div>
  )
}




export default App
