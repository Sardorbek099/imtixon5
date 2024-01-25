import React from 'react'
import './search.css'
export default function Search() {
  return (
    <div className='search_section'>
      <div className='my_container'>
      <div className='d-flex justify-content-between'>
      <div className='search_button_div'>
      <button className='search_button'>
      <img className='catalog_img' src='./search/search1.png' alt='catalog'/>
      <span className='catalog_text'>Каталог</span>
      </button>
      </div>
      <div className='form'>
        <input className='search_input' placeholder='search'/>
        <button className='search_input_button'>
          <img src='./search/search2.png' alt='search_icon'/>
        </button>
      </div>
      </div>
      </div>
    </div>
  )
}
