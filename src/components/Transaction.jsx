import React from 'react'
import { MdQrCodeScanner } from "react-icons/md";
import { TbCoinRupee } from "react-icons/tb";
import { Link } from 'react-router-dom';

const Transaction = ({ id,amount, description, type, mode, date }) => {
  return (
    <Link to={`/edit/${id}`} className=' bg-dark2 gap-4 items-center flex px-4 py-4 m-4 rounded-md'>
      {
        mode === "online" ? <MdQrCodeScanner size={30} /> :
          <TbCoinRupee size={30} />
      }
      <div>
        <p className='font-semibold'>{description}</p>
        <p className='text-xs text-light'>
          {new Date(date).toLocaleDateString('en-GB')}
        </p>
      </div>

      <div className='flex ml-auto items-center gap-4'>
        <p className={`${type === 'debit' ? "text-red-500" : "text-green"} font-bold`}>
          &#8377;{amount}
        </p>
      </div>
    </Link>
  )
}

export default Transaction