import React from 'react'
import { MdAdd } from 'react-icons/md'

const AddButton = ({ setShowForm }) => {
  return (
    <button onClick={() => setShowForm(true)} className='fixed bottom-20 right-4 bg-pink shadow-lg text-3xl p-4 rounded-full text-white '>
      <MdAdd />
    </button>
  )
}

export default AddButton