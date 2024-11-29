import { useState } from 'react'
import { ButtonGroup, Button, Box } from '@mui/material'

function HomePage() {

  return (
    <>
      <Box className="flex flex-row sm:flex-col items-center justify-between">
        <Button>Home</Button>
        <Button>Page</Button>
      </Box>
    </>
  )
}

export default HomePage