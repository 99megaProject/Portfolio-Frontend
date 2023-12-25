import { useState } from 'react'
import { Header, Home } from './components/export.comp'
import { useDispatch, useSelector } from "react-redux";
import { mode_style_Reduc } from './components/slice'
import './App.css'
import { useEffect } from 'react';

function App() {

  const mode = useSelector((state) => state.mode)
  const mode_style = useSelector((state) => state.mode_style)
  const dispatch = useDispatch()

  useEffect(() => {
    let val = mode ? '!bg-black !text-white' : '!bg-white !text-black'
    dispatch(mode_style_Reduc(val))
    val = ''
  }, [mode])


  return (
    <div className={mode_style}>
      {/* <p className='text-red-500'>Portfolio</p> */}
      < Header />
      <Home />
    </div>
  )
}

export default App
