import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'

const Nav = () => {

  return (
    <nav>
        <h1><a href="/">Title</a></h1>
        <ul className="nav-list">
            <li>
                <NavLink to="/">홈</NavLink>
            </li>
            <li>
                <NavLink to="/about">소개</NavLink>
            </li>
            <li>
                <NavLink to="/board">게시판리스트</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Nav