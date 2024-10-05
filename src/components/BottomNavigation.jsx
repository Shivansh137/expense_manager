import React, { useEffect, useLayoutEffect, useState } from 'react'
import { MdAccountBalanceWallet, MdList, MdPerson, MdPieChart } from 'react-icons/md'
import { Link, useHref } from 'react-router-dom'

const Option = ({active = false, title, icon, link = '/stats'}) => {
  const url = useHref();
    return (
        <Link to={link} className={`flex flex-col text-white grow items-center py-2 ${window.location.pathname === link ? 'bg-purple-400/50': 'bg-primary'}`}>
            {icon}
            <p className='text-xs'>{title}</p>
        </Link>
    )
}
const BottomNavigation = () => {
  return (
    <div className='bg-primary flex w-full'>
      <Option active={true} title={"List"} icon={<MdList size={25} /> } link={"/"} />
      <Option title={"Stats"} icon={<MdPieChart size={25}/>}  link="/stats" />
      <Option title={"Records"} icon={<MdPerson size={25}  />} link='/records' />
    </div>
  )
}

export default BottomNavigation
