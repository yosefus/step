import React from 'react'
import { Route, Routes } from 'react-router-dom'

function MainRoutes() {

   return (
      <Routes>
         <Route path='/' element={<>start</>} />
      </Routes>
   )
}

export default MainRoutes