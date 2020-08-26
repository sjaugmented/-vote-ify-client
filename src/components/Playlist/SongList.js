import React from 'react';
import { List, Divider} from 'antd';

const SongList = () => {

  const list = [
    'One',
    'Two',
    'Three',
    'Four',
    'Five'
  ]

  return (
    <div className='songList'>
      {/* list.map */}
      <Divider orientation="left">Song List</Divider>
      <List
        size="large"
        bordered
        dataSource={list}
        renderItem={item => <List.Item> {list} </List.Item>}
      />
    </div>
  );
}

export default SongList;




