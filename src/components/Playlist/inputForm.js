import React from 'react';


const InputForm = (props) => {

  return (
    <div className='container'>
      <div tabIndex='0' className='input_container'>

     
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
              {/* {!props.result && (
                <li key="zxc" className="dropdown_item">
                  no result
                </li>
              )} */}
              {props.results &&
                props.results.map((item, index)=> (
                  <li
                    key={index}
                    className='dropdown_item'
                  >
                    <div className='item_text2'>
                      <button onClick={() => {
                        props.selectSong(item)
                      }}>
                        {item.artists[0].name} - {item.name}
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