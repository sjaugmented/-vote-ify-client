import React from 'react';
import { Table, Tag, Space, Pagination } from 'antd';

const SongList = ({ playlist, updatePlayer, deletePost, admin, isApproved }) => {
  let posts
  const songList = []

  if (isApproved) {
    posts = isApproved
  }

  const columns = [
    {
      title: '',
      dataIndex: 'albumArt',
      key: 'albumArt',
      render: dataIndex => <img alt='' src={dataIndex}/>
    },
    {
      title: 'Artist',
      dataIndex: 'artist',
      key: 'artist'
    },
    {
      title: 'Song',
      dataIndex: 'songName',
      key: 'songName'
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
      dataIndex: 'timestamp',
      key: 'timestamp'
    }
  ]

  if (posts) {
    posts.forEach((post) => {
      songList.push(post)
    })
  }

  return (
    <div className='songList'>
      <Table 
        className='songTable'
        onRow={(record)=> ({
          onClick: ()=> {updatePlayer(record.songId)}
        })}
        columns={columns} 
        dataSource={songList}
        pagination={{hideOnSinglePage:true}} 
        scroll={{scrollY:240}}
        />
        
    </div>
  );
}

export default SongList;
