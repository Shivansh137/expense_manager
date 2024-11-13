import React, { useEffect, useState } from "react";
const AddRecordForm = ({ showForm, setShowForm, setRecords }) => {
  const [name, setName] = useState('');

  useEffect(() => {
    setName("");
  }, [showForm])

  const handleSubmit = (type) => {
    if (name.length < 3 || name.length > 20) {
      alert("Name must be between 3 to 20 characters");
      return;
    }
    //
    if (localStorage.getItem(name)) {
      alert("Name Already Exists !!!");
      return;
    }

    localStorage.setItem(name, 0);

    let records = localStorage.getItem('records');
    if (records) localStorage.setItem('records', JSON.stringify([...JSON.parse(records), name]));
    else localStorage.setItem('records', JSON.stringify([name]));
    //
    setRecords(JSON.parse(localStorage.getItem('records')))
    setShowForm(false);
  }

  return (
    <div className={`${showForm ? "block" : "hidden"} fixed w-full h-full max-w-xl bg-black/70 flex items-center justify-center`}>
      <form className=' overflow-hidden gap-2 bg-dark2 rounded-lg w-[85%] p-4' onSubmit={(e) => e.preventDefault()}>

        <p className='text-center bg-primary p-4 text-white font-bold'>Add New Record</p>

        <div className='flex flex-col overflow-hidden gap-6 p-4 pt-8'>
          <input value={name} onChange={(e) => setName(e.target.value)} className='px-4 py-2 font-bold focus:outline-none text-black rounded-md ring-1 caret-pink text-white ring-pink bg-dark2' type="text" placeholder='Enter Name' />
          <div className='flex gap-2'>
            <button type='button' onClick={() => { handleSubmit() }} className=' w-full bg-pink text-primary font-bold border-0 text-sm p-3 rounded-md'>Submit</button>
          </div>
          <button onClick={() => setShowForm(false)} type="button" className='text-light text-sm'>Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default AddRecordForm