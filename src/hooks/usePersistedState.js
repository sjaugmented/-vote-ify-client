import { useState, useEffect } from 'react'

function usePersistedState(key, defaultValue) {
    // where the magic happens
    const [state, setState] = useState(() =>
        JSON.parse(localStorage.getItem(key)) || defaultValue
    )
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
    }, [key, state])
    
    return [state,setState]
}

export default usePersistedState