import React from 'react'
import Transaction from './Transaction'
import { MdDeleteSweep, MdHourglassEmpty, MdSearch } from 'react-icons/md'
import { IoMdLeaf } from 'react-icons/io'

const Date = () => {
    return (
        <div className='p-2 w-full'>
            <hr />
            <div className='p-2 text-center text-neutral-500 font-bold'>24/07/2024</div>
        </div>
    )
}
const TransactionList = ({ list }) => {
    return (
        <div className='p-2 space-y-2 overflow-auto'>
            {
                list && list.length ?
                    list?.map((e, i) => <Transaction key={i} date={e.date} amount={e.amount} description={e.description} mode={e.mode} type={e.type} />
                    ).reverse() : <p className='text-xl absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>
                        <MdSearch size={50} />
                        Not found
                    </p>
            }

        </div>
    )
}

export default TransactionList