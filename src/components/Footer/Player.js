import React, { useState, useEffect } from 'react'

export default function Player(props) {
    const [index, setIndex] = useState({
        index: 0
    })

    const nextSong = () => {
        index.index < props.playlist.length - 1
            ? setIndex({
            index: index.index + 1
            })
            : setIndex({
                index: 0
            })
    }

    return (
        <div className='player'>
            <p>{props.playlist[index.index].title} | {props.playlist[index.index].artist}</p>
            <p>Contributed by {props.playlist[index.index].user}</p>
            <button onClick={nextSong}>Next</button>
        </div>
    )
}
