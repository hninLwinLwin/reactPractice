import React from 'react'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom'
import './Home.css'

export default function Home() {
  const navigate = useNavigate()
  return (
    <div className='mainHome'>
      <h1 className='headingHome'>Welcome to the to do list App!</h1>
      <Button variant="outline-primary" className='btn1' onClick ={()=>navigate('/main')}>Get Started</Button>{' '}
      <h1 className='headingHome'>Welcome to the Calculator App!</h1>
      <Button variant="outline-primary" className='btn1' onClick={() => navigate('/calculator')}>Go to Calculator</Button>{' '}
    </div>
  )
}
