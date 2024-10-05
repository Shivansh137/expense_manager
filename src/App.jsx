import { useState } from 'react'
import './App.css'
import Balance from './components/Balance'
import TransactionList from './pages/TransactionList'
import AddTransactionForm from './components/AddTransactionForm'
import BottomNavigation from './components/BottomNavigation'
import { Route, Routes } from 'react-router-dom'
import Stats from './pages/Stats'
import Records from './pages/Records'
import AddRecordForm from './components/AddRecordForm'
import EditTransaction from './components/EditTransaction'

function App() {
  const [showTransactionForm, setShowTransactionForm] = useState(false);
  const [showRecordForm, setShowRecordForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(true);
  let myList = JSON.parse(localStorage.getItem('list'));
  let oBal = localStorage.getItem('oBal');
  let cBal = localStorage.getItem('cBal');
  const [list, setList] = useState(myList || []);
  const [onlineBal, setOnlineBal] = useState(oBal || 0);
  const [cashBal, setCashBal] = useState(cBal || 0);

  return (
    <>
      <div className='flex flex-col overflow-hidden h-screen'>
      <Balance onlineBal={onlineBal} cashBal={cashBal} />
      <Routes>
        <Route path='/' element={ <TransactionList setShowTransactionForm={setShowTransactionForm} list={list} setList={setList} />} />
        <Route path='/stats' element={<Stats />} />
        <Route path='/records' element={<Records setShowRecordForm={setShowRecordForm} />} />
        <Route path='/edit/:id' element={<EditTransaction list={list} onlineBal={onlineBal} cashBal={cashBal} setOnlineBal={setOnlineBal} setCashBal={setCashBal}/>} />
      </Routes>
      <BottomNavigation />
      </div>
      <AddTransactionForm onlineBal={onlineBal} cashBal={cashBal} setOnlineBal={setOnlineBal} setCashBal={setCashBal} showForm={showTransactionForm} setShowForm={setShowTransactionForm} setList={setList} />
      <AddRecordForm showForm={showRecordForm} setShowForm={setShowRecordForm}/>
    </>
  )
}

export default App
