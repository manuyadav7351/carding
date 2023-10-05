import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./navbar.css"

const Navbar = () => {

    const navigate = useNavigate();

  return (
    <button className='navbar' onClick={() => navigate(`/`)}>HOME</button>
  )
}

export default Navbar