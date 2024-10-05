import React from 'react'
import { MdQrCodeScanner } from "react-icons/md";
import { TbCoinRupee } from "react-icons/tb";

const Wrapper = ({ mode, balance }) => {
  return (
    <div className='text-white items-center gap-4 flex rounded-md w-full p-4'>
      {
        mode !== 'cash' ? <MdQrCodeScanner size={35} /> : <TbCoinRupee size={35} />
      }
      <div className='flex flex-col'>
        <p className='text-xs'>
          {
            mode === 'cash' ? "Cash" : "Online"
          }
        </p>
        <p className='text-xl font-bold'>{balance}</p>
      </div>
    </div>
  )
}
const Balance = ({ onlineBal, cashBal }) => {
  return (
    <div className='bg-primary px-4 w-full'>
      <div className='flex gap-4'>
        <Wrapper mode='online' balance={onlineBal} />
        <Wrapper mode='cash' balance={cashBal} />
      </div>
    </div>
  )
}

export default Balance