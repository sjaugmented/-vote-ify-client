import React from 'react';
import { Link } from 'react-router-dom'
import Select from "react-dropdown-select";



const InputForm = (props) => {
  console.log(props.results)
 
  return (
    <div>
      <form onSubmit={props.searchSong}>
        <input
          className='input'
          placeholder='Seach'
          type='text'
          value={props.search}
          onChange={props.handleChange}
        />
        <button>Submit</button>
      </form>
      
      {props.chosen.map((item, index)=>(
        console.log(item[0])
      ))}
    </div>
  );
}

export default InputForm;