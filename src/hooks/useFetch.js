import React, { useState, useEffect } from 'react'
import PlaylistModel from '../models/playlist'


function useFetch(initialVal){
  const [state, setState] = useState(initialVal)

  const fetch = async () => {
    const response = await PlaylistModel.all()
    // console.log(response)
    setState(response)
  }

  useEffect(()=>{
    fetch()
  }, [])

  return state
}

export default useFetch
