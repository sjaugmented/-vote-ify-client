import React from 'react';


const InputForm = (props) => {

  return (
    <div>
        <input
          className='input'
          placeholder='Seach'
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
            {!props.result && (
              <li key="zxc" className="dropdown_item">
                no result
              </li>
            )}
            {props.results &&
              props.results.map((item, index)=> (
                <li
                  key={index}
                >
                  <button onClick={() => {
                    props.selectSong(item)
                  }}>{item.artists[0].name} - {item.name}</button>
                  
                </li>
              ))
            }
          </ul>
        )}
      </div>
    </div>
  );
}

export default InputForm;