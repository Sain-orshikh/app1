import React, {useEffect, useState} from 'react'
import { CgAddR } from "react-icons/cg";
import ThemeToggle from '../modes/mode';
import { Box, Button, Stack, VolumeDown, VolumeUp, Slider } from '@mui/material';

const CreatePage = () => {
  return (
    <>
      
        <div>
          Hello!
        </div>
        <ThemeToggle/>
        <Button>
          <CgAddR fontSize={20}/>
          </Button>
          <Stack spacing={2} direction="row" sx={{ alignItems: 'center', mb: 1 }}>
            <VolumeDown />
            <Slider aria-label="Volume" value={value} onChange={handleChange} />
            <VolumeUp />
          </Stack>
          <Slider disabled defaultValue={30} aria-label="Disabled slider" />
      
    </>
  )
}

export default CreatePage;