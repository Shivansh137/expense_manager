import React, { useEffect, useLayoutEffect, useState } from 'react'
import { MdAccountBalanceWallet, MdList, MdPerson, MdPieChart } from 'react-icons/md'
import { Link, useHref } from 'react-router-dom'

const Option = ({ active = false, title, icon, link = '/stats' }) => {
  const url = useHref();
  return (
    <Link to={link} className={`flex flex-col bg-dark2 grow items-center gap-1 py-2 ${window.location.pathname === link ? 'text-pink' : 'text-light]'}`}>
      <i className={`py-1 ${window.location.pathname === link ? 'bg-darkpink rounded-full px-4' : ''}`}>{icon}</i>
      <p className='text-xs'>{title}</p>
    </Link>
  )
}
const BottomNavigation = () => {
  return (
    <div className='flex w-full'>
      <Option active={true} title={"List"} icon={<MdList size={25} />} link={"/"} />
      <Option title={"Stats"} icon={<MdPieChart size={25} />} link="/stats" />
      <Option title={"Records"} icon={<MdPerson size={25} />} link='/records' />
    </div>
  )
}

export default BottomNavigation
