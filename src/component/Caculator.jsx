import React, { useState } from 'react'
import {caculator} from 'react'
import './app.css'
function Caculator() {
const[value,setvalue]=useState("")
const tinh=(e)=>{
  setvalue(value.concat(e.target.name))
}
const kq=()=>{
  setvalue("")
}
const bang=()=>{
  try {
    setvalue(eval(value))
    
  } catch (error) {
    setvalue(error)
  }
}

  return (
    <div className='tong'>Caculator
    <form>
      <input value={value} type='text'></input>
    </form>
    <div className='button'>
      <button name='0' onClick={tinh}>0</button>
      <button name='1' onClick={tinh}>1</button>
      <button name='2' onClick={tinh}>2</button>
      <button name='3' onClick={tinh}>3</button>
      <button name='4'onClick={tinh}>4</button>
      <button name='5'onClick={tinh}>5</button>
      <button name='6'onClick={tinh}>6</button>
      <button name='7'onClick={tinh}>7</button>
      <button name='8'onClick={tinh}>8</button>
      <button name='9'onClick={tinh}>9</button>
      <button name='+'onClick={tinh}>+</button>
      <button name='-'onClick={tinh}>-</button>
      <button name='*'onClick={tinh}>*</button>
      <button name='/'onClick={tinh}>/</button>
      <button name='='onClick={bang} >=</button>
      <button name='.'onClick={tinh}>.</button>
      <button name='ac'onClick={kq}>ac</button>
      </div>
        
    </div>
  )
}


export default Caculator
