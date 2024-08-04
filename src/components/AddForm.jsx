import React, { useState } from 'react'
import { MdClose } from 'react-icons/md';

const AddForm = ({ setList, showForm, setShowForm, setOnlineBal, onlineBal, cashBal, setCashBal }) => {
  const [amount, setAmount] = useState('');
  const [mode, setMode] = useState("");
  const [description, setDesc] = useState("");

  const handleSubmit = (type) => {
    if (amount <= 0) {
      alert("Amount must be greater than 0");
      return;
    }
    if (description.length <= 2 || description.length > 25) {
      alert("Description must contain 3 to 25 characters");
      return;
    }
    if (mode !== 'online' && mode !== "cash") {
      alert("Please Select the Mode");
      return;
    }
    setList(list => {
      localStorage.setItem("list", JSON.stringify([...list, { amount, description, type, mode, date: new Date().toISOString() }]))
      return [...list, { amount, description, type, mode, date: new Date().toISOString() }]
    });
    //
    if (mode === 'online') {
      if (type === 'debit') {
        setOnlineBal(bal => bal - amount);
        localStorage.setItem("oBal", onlineBal - amount)
      } else {
        setOnlineBal(bal => Number(bal) + Number(amount));
        localStorage.setItem("oBal", Number(onlineBal) + Number(amount))
      }
    } else {
      if (type === 'debit') {
        setCashBal(bal => bal - amount);
        localStorage.setItem("cBal", cashBal - amount)
      } else {
        setCashBal(bal => Number(bal) + Number(amount));
        localStorage.setItem("cBal", Number(cashBal) + Number(amount))
      }
    }
    //
    setShowForm(false);
  }

  return (
    <div className={`${showForm ? "block" : "hidden"} fixed w-screen h-screen bg-black/70 flex items-center justify-center`}>
      <form className='flex relative flex-col gap-6 bg-white rounded-md p-6 w-[85%]' onSubmit={(e) => e.preventDefault()}>
        <button onClick={() => setShowForm(false)} className='absolute right-4 top-4 bg-red-500 rounded-full p-1 text-white' type='button'><MdClose /></button>
        <p className='text-center text-lg font-bold'>Add Transaction</p>

        <input value={amount} onChange={(e) => setAmount(e.target.value)} className='px-4 py-4 focus:outline-none text-black  bg-neutral-100' type="number" placeholder='Amount' />

        <input value={description} onChange={(e) => setDesc(e.target.value)} className='px-4 py-4 focus:outline-none bg-neutral-100' type="text" placeholder='Description' />

        <div className='flex items-center text-lg justify-around'>
          <p className='font-bold'>Mode:</p>
          <label htmlFor="">
            <input value={"online"} onChange={(e) => setMode(e.target.value)} className='w-8' type="radio" name="mode" id="" />
            Online
          </label>

          <label htmlFor="">
            <input value={"cash"} onChange={(e) => setMode(e.target.value)} className='w-8' type="radio" name="mode" id="" />
            Cash
          </label>

        </div>

        <div className='flex gap-4'>
          <button type='button' onClick={() => { handleSubmit("debit") }} className=' w-full bg-[red] text-white border-0 p-2 text-lg rounded-md'>Debit</button>
          <button type='button' onClick={() => { handleSubmit("credit") }} className=' w-full bg-green-500 text-white border-0 p-2 text-lg rounded-md'>Credit</button>
        </div>

      </form>
    </div>
  )
}

export default AddForm