import { createContext } from 'react';

export const ConfigContext = createContext()

export function ConfigProvider(props) {
    
    const api_url = {
        secret: process.env.REACT_APP_MOVIES_SECRET,
        movies: process.env.REACT_APP_MOVIES_API_URL_CURRENT,
        up_coming: process.env.REACT_APP_MOVIES_API_URL_UP_COMING,
        tv_shows: process.env.REACT_APP_MOVIES_API_URL_TV_SHOW,
        popular: process.env.REACT_APP_MOVIES_API_URL_POPULAR,
        top_rated: process.env.REACT_APP_MOVIES_API_URL_TOP_RATED,
      }
      

    return (
        <ConfigContext.Provider value={{ api_url }}>
            {props.children}
        </ConfigContext.Provider>
    )
}