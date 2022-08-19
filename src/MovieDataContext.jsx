import { createContext, useContext, useState } from "react";
import Data from './data/MovieData2.json'

const MovieContext = createContext()

export const MovieProvider = ({ children }) => {
    const [isData, setIsData] = useState(Data)
    return (
        <MovieContext.Provider value={{ isData, setIsData }} >
            {children}
        </MovieContext.Provider >
    )
}

export const MovieDataContext = () => useContext(MovieContext)