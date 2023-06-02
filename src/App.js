import { useState } from "react"
import Login from "./Login"
import Register from "./Register"
import { Route, Routes } from "react-router-dom"

function App(){

  return <>
          <Routes>
              <Route path="/" element={<Login />}></Route>
              <Route path="/register" element={<Register />}></Route>
          </Routes>
        </>

}

export default App

