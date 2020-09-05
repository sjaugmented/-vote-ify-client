import { useEffect } from 'react'

const Redirect = (props) => {

    useEffect(() => {
        props.history.push(localStorage.getItem('prevPath'))
    })

    return (
        'Loading...'
    )
}

export default Redirect