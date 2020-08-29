import React from 'react';
import { Table, Tag, Space, Pagination } from 'antd';

const SongList = ({ playlist, updatePlayer, deletePost, admin, isApproved }) => {
  console.log(isApproved)
  let approvedPosts = isApproved
 
  console.log(approvedPosts)
  const songList = []
  if (isApproved) {
    approvedPosts = isApproved
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
        pagination={{hideOnSinglePage:true}} 
        scroll={{scrollY:240}}
        />
        
    </div>
  );
}

export default SongList;
