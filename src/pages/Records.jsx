import React, { useEffect, useState } from 'react'
import AddButton from '../components/AddButton'
import { MdAdd, MdEdit } from 'react-icons/md';

const RecordList = ({ name, amount = -1, setShow, setCName}) => {
    return (
        <div className='p-2 bg-dark2 rounded-lg'>
            <div className='flex px-4 py-1 items-center gap-2'>
            <div className='text-lg'>{name} </div>
            <span className={`text-xs ml-1 ${amount != 0 ? 'px-2 py-0.5 ':''} rounded-full ${Number(amount) < 0 ? ' bg-[#1a3522] text-[#38b05f]' : 'bg-red-500/20 text-red-500'}`}>{amount != 0 && `To ${Number(amount) < 0 ? 'Give' : 'Recieve'}`}</span>
            </div>
            <div className='flex justify-between gap-8 items-center px-2 py-2'>
                <div className='bg-dark flex items-center justify-between px-4 py-2 shadow-md w-full rounded-lg'>
                    <p className='text-2xl p-2'>&#8377;{Math.abs(Number(amount))}</p>
                   <button onClick={()=>{setShow(true); setCName(name)}} className=' bg-pink/20 rounded-full p-2 text-pink'><MdEdit size={18} /></button>
                </div>
            </div>
        </div>
    )
}


const Records = ({ records, setShowRecordForm }) => {
    
    const [show, setShow] = useState(false);
    const [cname, setCName] = useState('');
    const [amount, setAmount] = useState(0);

    const handleChange  = (type) => {  
        if(type === 'give') localStorage.setItem(cname, Number(localStorage.getItem(cname)) - Number(amount) );
        if(type === 'recieve') localStorage.setItem(cname, Number(localStorage.getItem(cname)) + Number(amount) );

        setShow(false);
    }


    return (
        <>
            {
                show ? (<div className='grow flex bg-black items-center justify-center'>
                    <div className='bg-dark2 px-6 py-2 rounded-md '>
                    <p className=' font-bold text-lg p-2 mb-2'>{cname}</p>
                        <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" placeholder='Enter Amount' className='block px-3 py-2 outline-0 mb-4 bg-dark2 ring-1 ring-pink rounded-lg caret-pink text-white' />
                        <button onClick={() => handleChange('give')} className='bg-[#1a3522] text-[#38b05f] font-bold rounded-full text-sm px-4 py-2 block w-full mb-2'>Credit</button>
                        <button onClick={() => handleChange('recieve')} className='text-pink bg-darkpink font-bold rounded-full text-sm px-4 py-2 block w-full'>Debit</button>
                        <button className='text-xs mx-auto w-full mt-4' onClick={() => setShow(false)}>Cancel</button>
                    </div>
                </div>)
                    :
                    (<div className='grow flex flex-col gap-4 overflow-auto p-4 bg-dark'>
                        {
                            records && records.sort((a,b) => Math.abs(Number(localStorage.getItem(b))) - Math.abs(Number(localStorage.getItem(a)))).map((name,i) => <RecordList key={i} name={name} amount={localStorage.getItem(name)} setShow={setShow} setCName={setCName}/>)
                        }
                        <AddButton setShowForm={setShowRecordForm} />
                    </div>)
            }
        </>
    )
}

export default Records
