import Home from '../pages/Home/Home'
import ToDo from '../pages/ToDo/ToDo'
import React from 'react'
import { Routes as ReactDomRoutes, Route, BrowserRouter } from 'react-router-dom'
import PokeApi from '../pages/PokeApi/PokeApi'
import Layout from '../components/Layout/Layout'

const Routes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <ReactDomRoutes>
          <Route path='/' element={<Home />} />
          <Route path='/ToDo' element={<ToDo />} />
          <Route path='/PokeApi' element={<PokeApi />} />

        </ReactDomRoutes>
      </Layout>
    </BrowserRouter>
  )
}

export default Routes



