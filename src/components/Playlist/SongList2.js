import React from 'react';
import { Table, Tag, Space } from 'antd';
const SongList = ({ playlist, updatePlayer }) => {
  let posts
  let songs = []
  if (playlist) {
    posts = playlist.playlist.posts
  }
  const columns = [
    {
      title: 'Cover Art',
      dataIndex: 'albumArt',
      key: 'albumArt',
      render: title => <img alt='' src={title}/>
    },
    {
      title: 'Artist',
      dataIndex: 'artist',
      key: 'artist'
    },
    {
      title: 'Song',
      dataIndex: 'songName',
      key: 'songId',
      songId: 'songId'
      // render: (songId, title) => (
      //   <a 
      //   onClick={() => updatePlayer({songId})}>{title}</a>
      // )
    },
    {
      title: 'Album',
      dataIndex: 'albumName',
      key: 'album'
    },
    {
      title: 'Contributor',
      dataIndex: 'user',
      key: 'user'
    },
    {
      title: 'Date Added',
      dataIndex: 'timeStamp',
      key: 'timeStamp'
    }
  ]
  const songList = []
  if (posts) {
    posts.forEach((post) => {
      songList.push(post)
      //   <div onClick={() => updatePlayer(post.songId)} className='track'>
      // </div>
    })
  } else {
  }
  console.log(songList)
  return (
    <div className='songList'>
      <Table columns={columns} dataSource={songList}/>
      {songs}
    </div>
  );
}
export default SongList;