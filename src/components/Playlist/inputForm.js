import React from 'react';


const InputForm = (props) => {

  return (
    <div className='container'>
      <div tabIndex='0' className='input_container'>

     
          <input
            className='input'
            placeholder='Suggest a Song'
            type='text'
            value={props.searchValue}
            onChange={props.handleChange}
            onFocus={()=> {
              props.setVisible(true)
            }}
          />
          
    
        <div ref={props.dropdownRef} className={`dropdown ${props.visible ? 'v' : ''}`}>
          {props.visible && (
            <ul>
              {props.results &&
                props.results.map((item, index)=> (
                  <li
                    key={index}
                    className='dropdown_item'
                  >
                    <div className='results'>
                      <button className='suggestBtn' onClick={() => {
                        props.selectSong(item)
                      }}>
                        <p className='song_text'>{item.name}</p> 
                        <p className='artist_text'>- {item.artists[0].name}</p> 
                      </button>
                    </div>
                  </li>
                ))
              }
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default InputForm;