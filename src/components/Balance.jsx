import React from 'react'
import { MdQrCodeScanner } from "react-icons/md";
import { TbCoinRupee } from "react-icons/tb";

const Wrapper = ({ mode, balance }) => {
  return (
    <div className='text-white items-center gap-4 flex rounded-md w-full p-4'>
      {
        mode !== 'cash' ? <MdQrCodeScanner size={40} /> : <TbCoinRupee size={40} />
      }
      <div>
        {
          mode === 'cash' ?
            <p>Cash</p> :
            <p>Online</p>
        }
        <p className='text-2xl font-bold'>{balance}</p>
      </div>
    </div>
  )
}
const Balance = ({ onlineBal, cashBal }) => {
  return (
    <div className='bg-primary px-4 py-2 sticky top-0'>
      <div className='flex gap-4'>
        <Wrapper mode='online' balance={onlineBal} />
        <Wrapper mode='cash' balance={cashBal} />
      </div>
    </div>
  )
}

export default Balance