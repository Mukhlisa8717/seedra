import React from 'react'
import './Navbar.scss'
import Logo from '../../../public/Logo.svg'
import { NavLink } from 'react-router-dom'
import { AiFillInstagram } from "react-icons/ai";
import { MdFacebook } from 'react-icons/md';
import { CiSearch } from 'react-icons/ci';
import { FaRegHeart } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';
import { HiBars3BottomRight } from 'react-icons/hi2';

const Navbar: React.FC = () => {
  return (
    <header>
      <div className="container">
        <nav className='navbar'>
          <NavLink to={"/"}>
            <img src={Logo} alt="logo" />
          </NavLink>
          <div className='navbar__links'>
            <NavLink to={"/"}>ALL PRODUCTS</NavLink>
            <NavLink to={"/not-found"}>ABOUT SEEDRA</NavLink>
            <NavLink to={"/not-found"}>OUR BLOG</NavLink>
            <NavLink to={"/contact"}>CONTACTS</NavLink>
          </div>
          <div className='navbar__menu'>
            <div className='navbar__menu-social'>
              <NavLink to={"https://www.instagram.com/"}>
                <AiFillInstagram size={18} color='#b7b9bd'/>
              </NavLink>
              <NavLink to={"https://www.facebook.com/"}>
                <MdFacebook size={18} color='#b7b9bd'/>
              </NavLink>
            </div>
            <div className="navbar__menu-search">
              <CiSearch size={16} color='#b7b9bd'/>
              <input type="text" placeholder='Search'/>
            </div>
            <div className="navbar__menu-btns">
              <NavLink to={"#"}>
                <FaRegHeart color='#359640' size={19}/>
              </NavLink>
              <NavLink to={"#"}>
                <IoCartOutline color='#359640' size={22}/>
              </NavLink>

            </div>
            <div className="navbar__menu-bar">
              <HiBars3BottomRight size={19} color='#70747d'/>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
