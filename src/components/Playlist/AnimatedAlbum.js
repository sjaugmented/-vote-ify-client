import React from 'react'


function AnimatedAlbum(playlist) {
  return (
    <div className="card">
        <img src={playlist.playlist.coverart} />
    </div>
  )
}

export default AnimatedAlbum