import React from 'react'
import { LinksContainerStyled, NavBarContainerStyled, LinksStyled } from './NavBarStyled'
import { Link } from 'react-router-dom'
import logo from "../../assets/home/logo.png"
import { useSelector } from "react-redux"


const NavBar = () => {
  const todoList = useSelector(state => state.todo.todoList);

  return (
    <NavBarContainerStyled>
      <Link to='/' activeClassName="active-link">
        <img src={logo} />
      </Link>
      <LinksContainerStyled>
        <div>
          <Link exact to='/' activeClassName="active-link">
            Home
          </Link>
        </div>
        <div>
          <Link to='/ToDo' item={todoList.length}>
            ToDo
          </Link>
        </div>
        <div>
          <Link to='/PokeApi' activeClassName="active-link">
            PokeApi
          </Link>
        </div>
      </LinksContainerStyled>
    </NavBarContainerStyled>
  )
}

export default NavBar