import React, { useEffect, useState } from "react";
const AddRecordForm = ({ setList, showForm, setShowForm }) => {
    const [name, setName] = useState('');
  
    useEffect(() => {
      setName("");
    }, [showForm])
  
    const handleSubmit = (type) => {
      if (name.length < 3 || name.length > 20) {
        alert("Name must be between 3 to 20 characters");
        return;
      }
      setShowForm(false);
    }
  
    return (
      <div className={`${showForm ? "block" : "hidden"} fixed w-full h-full max-w-xl bg-black/70 flex items-center justify-center`}>
        <form className=' overflow-hidden gap-6 bg-white rounded-lg w-[85%]' onSubmit={(e) => e.preventDefault()}>
  
          <p className='text-center bg-primary p-4 text-white font-bold'>Add New Record</p>
  
          <div className='flex flex-col overflow-hidden gap-6 p-4 pt-8'>
            <input value={name} onChange={(e) => setName(e.target.value)} className='px-4 py-3 focus:outline-none text-black rounded-md bg-neutral-100' type="text" placeholder='Enter Name' />
            <div className='flex gap-2'>
              <button type='button' onClick={() => { handleSubmit() }} className=' w-full bg-primary/20 text-primary font-bold border-0 text-sm p-3 rounded-md'>Submit</button>
            </div>
            <button onClick={() => setShowForm(false)} type="button" className='text-gray-500 text-sm'>Cancel</button>
          </div>
        </form>
      </div>
    )
  }

  export default AddRecordForm