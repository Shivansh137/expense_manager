import React from 'react'
import { MdAdd } from 'react-icons/md'

const AddButton = ({ setShowForm }) => {
  return (
    <button onClick={() => setShowForm(true)} className='fixed bottom-6 right-6 bg-primary/85 shadow-lg text-3xl p-4 rounded-full text-white '>
      <MdAdd />
    </button>
  )
}

export default AddButton