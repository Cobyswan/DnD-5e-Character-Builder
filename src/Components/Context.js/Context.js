import React, {useState} from 'react'
import Start from '../Start/Start'

export const charContext = React.createContext();

const Context = ({children}) => {
    const [name, setName] = useState('')
    const [level, setLevel] = useState(1)
    const [playerName, setPlayerName] = useState('')
    const [race, setRace] = useState('')
    console.log(name)
    return (
        <charContext.Provider value={[name, setName]}>
            {children}
        </charContext.Provider>
    )
}

export default Context;