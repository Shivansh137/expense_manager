import React, { useEffect } from 'react'
import AddButton from '../components/AddButton'

const RecordList = () => {
    return (
        <div className='p-4 bg-zinc-50/50'>
            <p className=' text-lg px-4 pb-2'>Atharva</p>
            <hr />
            <div className='flex justify-between gap-8 items-center px-4 py-2'>
                <div className='bg-neutral-100 p-2 shadow-md w-full rounded-lg'>
                    <p className='text-xs'>To Give</p>
                    <p className='text-4xl p-2 text-red-500'>0</p>
                    <button className='bg-neutral-200 shadow-sm text-red-500 rounded-full px-8 py-2 w-full'>Add</button>
                </div>
                <div className='bg-neutral-100 w-full shadow-md p-2 rounded-lg'>
                    <p className='text-xs'>To Recieve</p>
                    <p className='text-4xl p-2 text-green-500'>0</p>
                    <button className='bg-neutral-200 shadow-sm text-green-500 rounded-full px-8 py-2 w-full'>Add</button>
                </div>
            </div>
        </div>
    )
}


const Records = ({setShowRecordForm}) => {
  return (
    // <div className='grow flex flex-col gap-4'>
    //   <RecordList />
    //   <RecordList />

    //   <AddButton setShowForm={setShowRecordForm}  /> 
    // </div>
    <div className='grid place-content-center grow'>
        <p>Coming Soon...</p>
    </div>
  )
}

export default Records
