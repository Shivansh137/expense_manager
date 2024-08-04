import { useState } from 'react'
import './App.css'
import Balance from './components/Balance'
import TransactionList from './components/TransactionList'
import AddButton from './components/AddButton'
import AddForm from './components/AddForm'

function App() {
  const [showForm, setShowForm] = useState(false);
  let myList = JSON.parse(localStorage.getItem('list'));
  let oBal = localStorage.getItem('oBal');
  let cBal = localStorage.getItem('cBal');
  const [list, setList] = useState(myList || []);
  const [onlineBal, setOnlineBal] = useState(oBal || 0);
  const [cashBal, setCashBal] = useState(cBal || 0);

  return (
    <>
      <Balance onlineBal={onlineBal} cashBal={cashBal} />
      <TransactionList list={list} />
      <AddButton setShowForm={setShowForm} />
      <AddForm onlineBal={onlineBal} cashBal={cashBal} setOnlineBal={setOnlineBal} setCashBal={setCashBal} showForm={showForm} setShowForm={setShowForm} setList={setList} />
    </>
  )
}

export default App
