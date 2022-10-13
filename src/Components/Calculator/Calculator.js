import React, {useState} from 'react'
import cclass from './Calculator.module.css'
import Button from '../Button/Button'

export default function Calculator() {
  const buttons = ['C','9','/','8','7','6','*','5','4','3','+','2','1','0','-','.','Del','=']

  const [res, setRes] = useState("")

  const findVal = () =>{
    let result = Function("return "+ res)();
    console.log(result)
    setRes(result.toString())
  }
  const handler = (arg) => {
    console.log(arg)
    if(arg =='C') setRes();
    else if(arg == '=') findVal()
    else if(arg == 'Del') {
      let n= res.length
      if(n>0) setRes(res.slice(0,n-1))
    } else  setRes(res.concat(arg))
  }

  return (
    <div className={cclass.calcuHome}>
      <div className={cclass.inner}>
        <div className={cclass.result}>
          <div className={cclass.resbox}>
            {res}
          </div>
        </div>

        <div className={cclass.btns}>
          {buttons.map((ele, index) => { return <Button handler={handler} value={ele} key={index} /> })}
        </div>
      </div>
    </div>
  )
}
