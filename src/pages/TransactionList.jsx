import React, { useState } from 'react'
import Transaction from '../components/Transaction'
import { MdSearch } from 'react-icons/md'
import AddButton from '../components/AddButton'

const TransactionList = ({ list, setShowTransactionForm }) => {
    const [mode, setMode] = useState('all')
    const [type, setType] = useState('all')

    return (
        <div className=' relative grow overflow-auto'>
            <div className='flex items-center justify-center gap-2 px-4 py-3 bg-dark2 text-sm'>
                <p className='mr-4'>Mode:</p>
                <label htmlFor="">
                    All
                </label>
                <input defaultChecked value={"all"} onChange={(e) => setMode(e.target.value)} className='mr-auto' type="radio" name="mode" id="" />

                <label htmlFor="">
                    Online
                </label>
                <input value={"online"} onChange={(e) => setMode(e.target.value)} className='mr-auto' type="radio" name="mode" id="" />

                <label htmlFor="">
                    Cash
                </label>
                <input value={"cash"} onChange={(e) => setMode(e.target.value)} className='' type="radio" name="mode" id="" />

            </div>
            <div className='flex items-center justify-center gap-2  px-4 py-2 bg-dark2 text-sm '>
                <p className='mr-5'>Type:</p>
                <label htmlFor="">
                    All
                </label>
                <input defaultChecked value={"all"} onChange={(e) => setType(e.target.value)} className='mr-auto' type="radio" name="type" id="" />

                <label htmlFor="">
                    Credit
                </label>
                <input value={"credit"} onChange={(e) => setType(e.target.value)} className='mr-auto' type="radio" name="type" id="" />

                <label htmlFor="">
                    Debit
                </label>
                <input value={"debit"} onChange={(e) => setType(e.target.value)} className='' type="radio" name="type" id="" />
            </div>

            <div>
                {
                    list && list.length ?

                        (mode === 'all' ?
                            (type === 'all' ? list?.map((e, i) => <Transaction key={i} id={i} date={e.date} amount={e.amount} description={e.description} mode={e.mode} type={e.type} />).reverse()
                                : type === 'credit' ? list?.filter(t => t?.type === 'credit')?.map((e, i) => <Transaction key={i} id={i} date={e.date} amount={e.amount} description={e.description} mode={e.mode} type={e.type} />).reverse()
                                    : type === 'debit' ? list?.filter(t => t?.type === 'debit')?.map((e, i) => <Transaction key={i} id={i} date={e.date} amount={e.amount} description={e.description} mode={e.mode} type={e.type} />).reverse()
                                        : ""
                            )
                            : mode === 'online' ?
                                (type === 'all' ? list?.filter(t => t?.mode === 'online')?.map((e, i) => <Transaction key={i} id={i} date={e.date} amount={e.amount} description={e.description} mode={e.mode} type={e.type} />).reverse()
                                    : type === 'credit' ? list?.filter(t => t?.mode === 'online' && t?.type === 'credit')?.map((e, i) => <Transaction key={i} id={i} date={e.date} amount={e.amount} description={e.description} mode={e.mode} type={e.type} />).reverse()
                                        : type === 'debit' ? list?.filter(t => t?.mode === 'online' && t?.type === 'debit')?.map((e, i) => <Transaction key={i} id={i} date={e.date} amount={e.amount} description={e.description} mode={e.mode} type={e.type} />).reverse()
                                            : ""
                                )
                                : mode === 'cash' ?
                                    (type === 'all' ? list.filter(t => t?.mode === 'cash')?.map((e, i) => <Transaction key={i} id={i} date={e.date} amount={e.amount} description={e.description} mode={e.mode} type={e.type} />).reverse()
                                        : type === 'credit' ? list?.filter(t => t?.mode === 'cash' && t?.type === 'credit')?.map((e, i) => <Transaction key={i} id={i} date={e.date} amount={e.amount} description={e.description} mode={e.mode} type={e.type} />).reverse()
                                            : type === 'debit' ? list?.filter(t => t?.mode === 'cash' && t?.type === 'debit')?.map((e, i) => <Transaction key={i} id={i} date={e.date} amount={e.amount} description={e.description} mode={e.mode} type={e.type} />).reverse()
                                                : ""
                                    ) : ""
                        )
                        : <div className='flex flex-col gap-2 justify-center absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>
                            <MdSearch className='block mx-auto' size={50} />
                            <p>Nothing here</p>
                        </div>
                }
            </div>
            <AddButton setShowForm={setShowTransactionForm} />
        </div>
    )
}

export default TransactionList