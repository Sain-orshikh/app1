import { useState } from 'react'
import './App.css'
import { ButtonGroup, Button } from '@mui/material'

function App() {

  return (
    <>
      <div className='flex flex-center'>
        <ButtonGroup>
          <Button>Hi!</Button>
          <Button>Hey!</Button>
        </ButtonGroup>
      </div>
    </>
  )
}

export default App
