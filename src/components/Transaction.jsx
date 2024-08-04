import React from 'react'
import { MdQrCodeScanner } from "react-icons/md";
import { TbCoinRupee } from "react-icons/tb";

const Transaction = ({ amount, description, type, mode, date }) => {
  return (
    <div className='w-full gap-4 items-center flex px-4 py-4 rounded-md border-b'>
      {
        mode === "online" ? <MdQrCodeScanner size={35} /> :
          <TbCoinRupee size={35} />
      }
      <div>
        <p className='font-semibold mb-1'>{description}</p>
        <p className='text-xs'>{new Date(date).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</p>
      </div>

      <div className='flex ml-auto items-center gap-4 text-2xl'>
        <p className={`text-lg ${type === 'debit' ? "text-red-500" : "text-green-500"} font-bold`}> &#8377;{amount}</p>
      </div>
    </div>
  )
}

export default Transaction