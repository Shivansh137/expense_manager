import React from 'react'
import { MdAdd, MdPlusOne } from 'react-icons/md'

const AddButton = ({setShowForm}) => {
  return (
    <button onClick={() => setShowForm(true)} className='fixed bottom-4 right-4 bg-primary/85 shadow-lg text-4xl p-4 rounded-full text-white '>
       <MdAdd />
        </button>
  )
}

export default AddButton