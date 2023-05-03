import React, { useState, useEffect } from 'react'
import { Wrapper, InputWrapperStyled, InputStyled, ButtonContainerStyled, ResetButtonContainerStyled, ListWrapperStyled, ListStyled } from './ToDoStyles'
import { FaRegTimesCircle } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { addItems, visibility, deleteItem, setError } from "../../redux/todoSlice"


const ToDo = () => {
  const { todoList, errorMsg } = useSelector(state => ({
    todoList: state.todo.todoList,
    errorMsg: state.todo.errorMsg
  }))

  const dispatch = useDispatch();
  const [newToDo, setNewToDo] = useState('');

  const handleNewToDoChange = (e) => {
    setNewToDo(e.target.value);
  };

  const handleNewTodoSubmit = (e) => {
    e.preventDefault();
    if (newToDo.trim()) {
      const newTodo = {
        id: Math.random(),
        text: newToDo,
        completed: false
      };

      dispatch(addItems({ task: newToDo }))
      setNewToDo('');
    } else {
      window.alert('Por favor, ingrese una tarea antes de agregarla.');
    }
  };

  const handleToDoDelete = e => {
    e.preventDefault();
    if (!todoList.length) return;

    dispatch(visibility(false))
    return;
  };

  const handleDelete = (index, e) => {
    const newTodos = [...todoList];
    newTodos.splice(index, 1);
    const elementId = e.target.dataset.idef;
    console.log(elementId);
    dispatch(deleteItem({ id: elementId }))
  };

  useEffect(() => {
    document.title = `${!todoList.length ? '' : `(${todoList.length})`} ToDo - List`
  }, [document.title = `${!todoList.length ? '' : `(${todoList.length})`} ToDo - List`])

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
      {errorMsg && <p style={{
        color: 'rgb(252, 40, 100)',
        fontSize: '24px',
        textAlign: 'center',
        fontWeight: '800',
        textShadow: '4px 4px 10px rgba(13, 14, 15, 0.3)'
      }}>{errorMsg}</p>}


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