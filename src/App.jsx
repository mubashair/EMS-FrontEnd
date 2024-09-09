import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MubasharHussain from './assets/Mubashar'
import BatoolBegum  from './assets/Batool'
import ManzoorHussain from './assets/Manzoor'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EmployeeComponent from './components/EmployeeComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <HeaderComponent/>
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<ListEmployeeComponent/>}>

          </Route>
          <Route path='/employees' element={<ListEmployeeComponent/>}>
          </Route>
          <Route path='add-Employee' element={<EmployeeComponent/>}>

          </Route>
        </Routes>
       
     </BrowserRouter>
     
     <FooterComponent/>
 
    </>
   
  )
}

export default App
