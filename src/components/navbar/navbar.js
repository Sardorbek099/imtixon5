import React from 'react'
import './navbar.css'

export default function Navbar() {
  return (
    <div className='navbar_section'>
      <div className='my_container'>
        <div className='d-flex justify-content-between'>
        <div className='forLogo'>
            <img src='./navbar/navbar2.png' alt='logo'/>
            <p className='company_name'>Hi-tech <br/>Orient <br/>Medical</p>
        </div>
        <div className='forItems'>
            <ul className='navbar'>
                <li className='navbar_item'>
                    <a className='navbar_item_link' href='https://youtube.com'>Главная</a>
                </li>
                <li className='navbar_item'>
                    <a className='navbar_item_link' href='https://youtube.com'>Каталог </a>
                </li>
                <li className='navbar_item d-flex'>
                    <a className='navbar_item_link' href='https://youtube.com'>О нас</a>
                    <img className='navbar_cursor' src='./navbar/navbar5.png' alt='navbar_cursor'/>
                </li>
                <li className='navbar_item'>
                    <a className='navbar_item_link' href='https://youtube.com'>Новости</a>
                </li>
                <li className='navbar_item'>
                    <a className='navbar_item_link' href='https://youtube.com'>Блог</a>
                </li>
                <li className='navbar_item'>
                    <a className='navbar_item_link' href='https://youtube.com'>Контакты</a>
                </li>
            </ul>
            <div className='forFlag'>
                <img className='flag_img' src='./navbar/navbar3.png' alt='navbar_flag'/>
                <p className='navbar_lang'>РУС</p>
                <img className='flag_cursor' src='./navbar/navbar4.png' alt='navbar_flag'/>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}
