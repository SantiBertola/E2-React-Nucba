import React from 'react'
import { LinksContainerStyled, NavBarContainerStyled, LinksStyled, ToDoLinkStyled } from './NavBarStyled'
import { Link, useNavigate } from 'react-router-dom'
import logo from "../../assets/home/logo.png"
import { useThemeContext } from "../../context/ContextData"


const NavBar = () => {
    const { todoList } = useThemeContext() || {};
    const navigate = useNavigate();
    const toDoLinkClass = todoList && todoList.length > 0 ? 'to-do-link-active' : '';
  
    return (
      <NavBarContainerStyled>
        <Link to='/'>
          <img src={logo} alt='Logo' />
        </Link>
        <LinksContainerStyled>
          <div>
            <Link to='/'>Home</Link>
          </div>
          <div>
            <ToDoLinkStyled to='/ToDo' className={toDoLinkClass}>
                To Do List {!!todoList && !!todoList.length && '*' }
            </ToDoLinkStyled>
          </div>
          <div>
            <Link to='/PokeApi'>PokeApi</Link>
          </div>
        </LinksContainerStyled>
      </NavBarContainerStyled>
    );
  };
  
  export default NavBar;
