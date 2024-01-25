import React from 'react'
import './categories.css'
import CategoriesCard from '../../components/categories_card/categories_card'

export default function Categories() {
  return (
    <div className='categories_section'>
      <div className='my_container'>
        <p className='categories_title'>Категории товаров</p>

        <div className='row'>
        <CategoriesCard/>
        </div>
      </div>
    </div>
  )
}
