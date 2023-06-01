import { useState } from 'react'
import './App.css'
import Formulario from './Components/Formulario'
import Tarjeta from './Components/Tarjeta'


function App() {

  const [cumple, setCumple] = useState({
    name:'',
    date:null,
    guest:''
  })

  const[styles, setStyles] = useState({
    background: 'transparent', 
    color:'white'

  })

  return (
    <>
      <Formulario setCumple={setCumple} setStyles={setStyles}/>
      <Tarjeta cumple={cumple} styles={styles}/>
    </>
  )
}

export default App
