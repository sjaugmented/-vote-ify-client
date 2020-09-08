import { useEffect } from 'react'

const Redirect = (props) => {

    useEffect(() => {
        if (localStorage.getItem('prevPath')) props.history.push(localStorage.getItem('prevPath'))
        else props.history.push('/')
    })

    return (
        'Loading...'
    )
}

export default Redirect