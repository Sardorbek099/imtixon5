import React from 'react'
import './services.css'

export default function Services() {
  return (
    <div className='services_section'>
      <div className='my_container'>
        <div className='d-flex justify-content-between'>
            <div className='services_col'>
                <div className='services_card1'>
                <p className='services_card_title'>SMART 3D-X. Дентальный <br/> 3D Рентген</p>
                <p className='services_card_description'>Точное сканирование любого трека может быть <br/> достигнуто с помощью высококачественным <br/> QuartZ. Множественные криволинейные <br/> траектории томографии больше подходят для <br/> зубной дуги пациента.</p>
                <div className='d-flex'>
                    <button className='services_button'>
                    <img className='arrow_left' src='./services/service1.png' alt='arrow-left'/>
                    </button>
                    <p className='services_link'>Перейти</p>
                </div>
                </div>
            </div>
            <div className='services_col'>
                <div className='services_card2'>
                <p className='services_card_title'>Ультразвуковой аппарат <br/>VINNO E20</p>
                <p className='services_card_description'>Революционная радиочастотная платформа <br/> Автоматическая трассировка спектра PW/CW <br/> Комплексные функции 3D/4D Работа смарт –<br/> сенсорной панели</p>
                <div className='d-flex forMargin'>
                    <button className='services_button'>
                    <img className='arrow_left' src='./services/service1.png' alt='arrow-left'/>
                    </button>
                    <p className='services_link'>Перейти</p>
                </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
