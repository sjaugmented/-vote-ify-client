import React from 'react';
import { Table, Tag, Space, Pagination } from 'antd';

const SongList = ({ playlist, updatePlayer, deletePost, admin, isApproved }) => {
  let approvedPosts
 
  const songList = []
  if (isApproved) {
    approvedPosts = isApproved
  }


  const columns = [
    {
      title: '',
      dataIndex: 'albumArt',
      key: 'albumArt',
      width: 55,
      render: dataIndex => <img alt='' src={dataIndex}/>
    },
    {
      title: 'Artist',
      dataIndex: 'artist',
      key: 'artist',
      width: 150
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
      key: 'timestamp',
      render: date => (
        <>
        {date ? date.substr(0, 10) : ''}
        </>
      )
    }
  ]

  if (approvedPosts) {
    approvedPosts.forEach((post) => {
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
        pagination={false} 
        scroll={{y: '60vh'}}
        />
        
    </div>
  );
}

export default SongList;
