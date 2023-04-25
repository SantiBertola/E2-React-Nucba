import React, { useState, useContext } from 'react'
import { Wrapper, InputWrapperStyled, InputStyled, ButtonContainerStyled, ResetButtonContainerStyled, ListWrapperStyled, ListStyled } from './ToDoStyles'
import { FaRegTimesCircle } from "react-icons/fa";
import { useThemeContext } from "../../context/ContextData";


const ToDo = () => {
  const { todoList, setTodoList } = useThemeContext();

  const [newToDo, setNewToDo] = useState('');

  const saveToLocalStorage = todoList => {
    localStorage.setItem('task', JSON.stringify(todoList))
  }

  saveToLocalStorage(todoList);

  const handleNewToDoChange = (e) => {
    setNewToDo(e.target.value);
  };

  const handleNewTodoSubmit = (e) => {
    e.preventDefault();
    if (newToDo.trim()) {
      setTodoList([...todoList, newToDo]);
      setNewToDo('');
    } else {
      window.alert('Por favor, ingrese una tarea antes de agregarla.');
    }
  };


  const handleToDoDelete = () => {
    setTodoList([]);
  };

  const handleDelete = (index) => {
    const newTodos = [...todoList];
    newTodos.splice(index, 1);
    setTodoList(newTodos);
  };

  return (
    <Wrapper>
      <h1>Ingrese una tarea</h1>
      <form onSubmit={handleNewTodoSubmit}>
        <InputWrapperStyled>
          <InputStyled 
                type="text" 
                value={newToDo} 
                onChange={handleNewToDoChange} 
          />
          <ButtonContainerStyled type="submit">Agregar</ButtonContainerStyled>
        </InputWrapperStyled>
      </form>
      <ListWrapperStyled>
        {todoList.map((todo, index) => (
          <ListStyled key={index}>{todo} <FaRegTimesCircle style={{ color: 'crimson', cursor: 'pointer' }} onClick={() => handleDelete(index)} />  </ListStyled>
        ))}
      </ListWrapperStyled>
      {todoList.length > 0 ? (
        <ResetButtonContainerStyled onClick={handleToDoDelete}>Vaciar tareas</ResetButtonContainerStyled>
      ) : (
        <p>No hay tareas pendientes</p>
      )}
    </Wrapper>
  );
};

export default ToDo;