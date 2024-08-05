import React from 'react'
import Transaction from './Transaction'
import { MdSearch } from 'react-icons/md'

const TransactionList = ({ list }) => {
    return (
        <div className='p-2 space-y-2 relative  grow overflow-auto'>
            {
                list && list.length ?
                    list?.map((e, i) => <Transaction key={i} date={e.date} amount={e.amount} description={e.description} mode={e.mode} type={e.type} />
                    ).reverse() : <div className='flex flex-col gap-2 justify-center absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>
                        <MdSearch className='block mx-auto' size={50} />
                        <p>Nothing here</p>
                    </div>
            }
        </div>
    )
}

export default TransactionList