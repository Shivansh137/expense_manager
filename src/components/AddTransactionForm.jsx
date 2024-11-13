import React, { useEffect, useState } from 'react'

const AddTransactionForm = ({ setList, showForm, setShowForm, setOnlineBal, onlineBal, cashBal, setCashBal }) => {
  const [amount, setAmount] = useState('');
  const [mode, setMode] = useState("");
  const [description, setDesc] = useState("");

  useEffect(() => {
    setAmount("");
    setDesc("");
  }, [showForm])

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
    <div className={`${showForm ? "block" : "hidden"} fixed w-full h-full max-w-xl bg-black flex items-center justify-center`}>
      <form className=' border border-dark2 text-white overflow-hidden gap-4 bg-dark2 rounded-lg w-[85%] px-2 py-4' onSubmit={(e) => e.preventDefault()}>

        <p className='text-center bg-primary p-4 text-lg text-white font-bold'>Add Transaction</p>

        <div className='flex flex-col overflow-hidden gap-6 p-4 pt-4'>
          <input value={amount} onChange={(e) => setAmount(e.target.value)} className='px-4 py-3 ring-1 ring-pink caret-pink font-bold text-white  focus:outline-none text-black rounded-md bg-dark2' type="number" placeholder='Amount' />

          <input value={description} onChange={(e) => setDesc(e.target.value)} className='px-4 py-3  ring-1 ring-pink caret-pink font-bold text-white focus:outline-none rounded-md bg-dark2' type="text" placeholder='Description' />

          <div className='flex items-center justify-center gap-2 px-8'>
            <label htmlFor="">
              Online
            </label>
            <input value={"online"} onChange={(e) => setMode(e.target.value)} className='mr-auto' type="radio" name="mode" id="" />

            <label htmlFor="">
              Cash
            </label>
            <input value={"cash"} onChange={(e) => setMode(e.target.value)} className='' type="radio" name="mode" id="" />

          </div>

          <div className='flex gap-2'>
            <button type='button' onClick={() => { handleSubmit("debit") }} className=' w-full bg-[red]/20 text-red-500 font-bold border-0 text-sm p-3 rounded-md'>Debit</button>
            <button type='button' onClick={() => { handleSubmit("credit") }} className=' w-full bg-[#1a3522] text-[#38b05f] font-bold text-sm border-0 p-3 rounded-md'>Credit</button>
          </div>
          <button onClick={() => setShowForm(false)} type="button" className='text-light text-sm'>Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default AddTransactionForm