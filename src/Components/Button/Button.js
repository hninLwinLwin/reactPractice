import React from 'react'
import cclass from './Button.module.css'
export default function Button({ value, handler }) {
  return (
    <div className={value == 'C' || value == '=' ? `${cclass.calcBtns} ${cclass.res}` : `${cclass.calcBtns}`}
      onClick={() => handler(value)} >
      {value}
    </div>
  )
}
