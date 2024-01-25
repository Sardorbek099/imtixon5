import React from 'react'
import Header from '../sections/header/header'
import Hero from '../sections/hero/hero'
import Services from '../sections/services/services'
import Categories from '../sections/categories/categories'

export default function HomePage() {
  return (
    <div>
        <Header/>
        <Hero/>
        <Services/>
        <Categories/>
    </div>
  )
}
