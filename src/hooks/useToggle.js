import { useState } from 'react'

function useToggle(initialVal = false){
  const [state, setState] = useToggle(initialVal)

  const toggle = () => {
    setState(!state)
  }
  return [state, toggle]
}

export default useToggle