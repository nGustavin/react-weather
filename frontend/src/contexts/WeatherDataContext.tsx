import { createContext, ReactNode, useState } from 'react';

export const WeatherDataContext = createContext({})

export function WeatherDataProvider({children}: {children: ReactNode}){
    const [cityName, setCityName] = useState('curitiba')
    return (
        <WeatherDataContext.Provider value={{}}>
            {children}
        </WeatherDataContext.Provider>
    )
}