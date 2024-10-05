import React from 'react'
import { MdQrCodeScanner } from "react-icons/md";
import { TbCoinRupee } from "react-icons/tb";
import { Link } from 'react-router-dom';

const Transaction = ({ id,amount, description, type, mode, date }) => {
  return (
    <Link to={`/edit/${id}`} className='w-full gap-4 items-center flex px-4 py-4 border-b'>
      {
        mode === "online" ? <MdQrCodeScanner size={30} /> :
          <TbCoinRupee size={30} />
      }
      <div>
        <p className='font-semibold'>{description}</p>
        <p className='text-xs text-gray-500'>
          {new Date(date).toLocaleDateString('en-GB',{ hour: '2-digit', minute: '2-digit' })}
        </p>
      </div>

      <div className='flex ml-auto items-center gap-4'>
        <p className={`${type === 'debit' ? "text-red-500" : "text-green-500"} font-bold`}>
          &#8377;{amount}
        </p>
      </div>
    </Link>
  )
}

export default Transaction