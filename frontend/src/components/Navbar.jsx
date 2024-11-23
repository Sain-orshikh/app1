import React, {useEffect, useState} from 'react'
import { CgAddR } from "react-icons/cg";
import ThemeToggle from '../modes/mode';

const CreatePage = () => {
  return (
    <>
      <div className="bg-gray-300 dark:bg-gray-600 text-black dark:text-white">
        Hello!
      </div>
      <ThemeToggle/>
      <button>
        <CgAddR fontSize={20}/>
      </button>
    </>
  )
}

export default CreatePage;