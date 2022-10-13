import React, {useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Todo from '../Todo/Todo';

export default function Main() {
  const [items, setItems] = useState(["Walk the dog","Pick up Joe", "Go to the supermarket"])
  const [item, setItem] = useState()

  const addItem = (item1)=> {
    const newItems = [...items, item1]
    setItems(newItems)
  }

  function deleteItem(key){
    setItems((items) => items.filter((item1, i) => i!=key))
  }

  function deleteAllItem() {
    setItems([])
  }

  return (
    <div className='main'>
      <h1 className='mainHeading'>What is on the calendar today?</h1>
      <Box
        sx={{
          width: 500,
          maxWidth: '100%',
        }}
        className='inputMain' style={{'position':'absolute','top': '30%','left': '33%'}}
      >
        <TextField fullWidth label="Add your items" id="itmesTxt" onChange={(e) =>setItem(e.target.value)} />
        <Button onClick={() => deleteAllItem()}>Delete all items</Button>
      </Box>
      <Button variant="contained" className='btn2' onClick= {(e) =>{addItem(item)}}>Add</Button>
      <div className='items'>
        {items.map((item,index) => {
          return(
            <div key={index}>
              <Todo data={item} />
              <Button onClick={()=> deleteItem(index)}>Delete</Button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
