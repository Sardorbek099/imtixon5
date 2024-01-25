import React from 'react'
import './hero.css'

export default function Hero() {
  return (
    <div className='hero_section'>
      <div className='my_container'>
        <div className='d-flex'>
        <div className='hero_col1'>
            <p className='hero_title'>Медицинское <br/> оборудование от <br/> лучших производителей</p>
            <p className='hero_description'>EТ400 – многофункциональный универсальный акушерский стол с <br/> механико- гидравлическим приводом, специально предназначенный для <br/> безопасного позиционирования пациента при выполнении <br/> гинекологически - акушерских операций, осмотров и родов в <br/> гинекологических отделениях, женских консультациях, роддомах.</p>
            <button className='hero_button'>Подробнее</button>
        </div>
        <div className='hero_col2'>
            <img src='./hero/hero1.png' alt='hero' />
        </div>
        </div>
      </div>
    </div>
  )
}
