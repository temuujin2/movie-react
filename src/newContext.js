import { createContext, useContext, useState } from "react";
import Data from './data/MovieData2.json'

const MovieContext1 = createContext()

export const MovieProvider1 = ({ children }) => {
    const [isData1, setIsData1] = useState(Data)
    return (
        <MovieContext1.Provider value={{ isData1, setIsData1 }} >
            {children}
        </MovieContext1.Provider >
    )
}

export const MovieDataContext1 = () => useContext(MovieContext1)