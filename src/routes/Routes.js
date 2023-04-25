import Home from '../pages/Home/Home'
import ToDo from '../pages/ToDo/ToDo'
import React from 'react'
import { ThemeContextProvider } from "../context/ContextData"
import { Routes as ReactDomRoutes, Route } from 'react-router-dom'
import PokeApi from '../pages/PokeApi/PokeApi'

const Routes = () => {
  return (
    <ThemeContextProvider>
      <ReactDomRoutes>
        <Route path='/' element={<Home />} />
        <Route path='/ToDo' element={<ToDo />} />
        <Route path='/PokeApi' element={<PokeApi />} />
    
      </ReactDomRoutes>
    </ThemeContextProvider>
  )
}

export default Routes



