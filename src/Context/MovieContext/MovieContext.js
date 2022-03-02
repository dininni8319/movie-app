import { createContext, useState, useEffect, useContext } from 'react';
import { ConfigContext } from '../ConfigContext/ConfigContext';

export const MovieContext = createContext()

export function MovieProvider(props) {

    const { api_url } = useContext(ConfigContext)
    const [ currentMovie, setCurrentMovie ] = useState([])
    const [ upComingMovie, setUpComingMovie ] = useState([])
    const [ tvShows, setTvShows ] = useState([])
    const [ popular, setPopular ] = useState([])
    const [ topRated, setTopRated ] = useState([])
      
    console.log(tvShows);
    
    useEffect(() => {
        fetch(`${api_url.movies}${api_url.secret}`)
          .then(response => response.json())
          .then(data => setCurrentMovie(data.results))
      },[])
    
      useEffect(() => {
        fetch(`${api_url.up_coming}${api_url.secret}`)
          .then(response => response.json())
          .then(data => setUpComingMovie(data.results))
      },[])

      useEffect(() => {
        fetch(`${api_url.tv_shows}${api_url.secret}`)
          .then(response => response.json())
          .then(data =>  setTvShows(data.results))

      },[])

      useEffect(() => {
        fetch(`${api_url.popular}${api_url.secret}`)
          .then(response => response.json())
          .then(data => setPopular(data.results))
      },[])

      useEffect(() => {
        fetch(`${api_url.top_rated}${api_url.secret}`)
          .then(response => response.json())
          .then(data => setTopRated(data.results))
      },[])
      
    return (
        <MovieContext.Provider value={{ currentMovie, upComingMovie, tvShows, popular, topRated }}>
            {props.children}
        </MovieContext.Provider>
    )
}