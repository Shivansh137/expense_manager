import React, { useEffect, useState } from 'react'
import { MdDelete } from 'react-icons/md';
import { Link, useNavigate, useParams } from 'react-router-dom';

const EditTransaction = ({ list, onlineBal, cashBal, setOnlineBal, setCashBal }) => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [amount, setAmount] = useState(list[id]?.amount);
    const [mode, setMode] = useState(list[id]?.mode);
    const [description, setDesc] = useState(list[id]?.description);

    const handleSubmit = (type) => {
        if (amount <= 0) {
            alert("Amount must be greater than 0");
            return;
        }
        if (description.length <= 2 || description.length > 25) {
            alert("Description must contain 3 to 25 characters");
            return;
        }
        if (mode !== 'online' && mode !== "cash") {
            alert("Please Select the Mode");
            return;
        }
        // updating the balance
        if (mode === 'online') { // now the mode is online
            if (type === 'debit') { // now amount must be debited from online balance
                if (list[id].type === 'credit') { // previously it was credited
                    if (list[id].mode === 'online') { // it was credited to online balance
                        setOnlineBal(bal => {
                            localStorage.setItem("oBal", Number(bal) - Number(amount) * 2); // debit the amount twice from online balance.
                            return Number(bal) - Number(amount) * 2
                        });
                    } else { // it was credited to cash balance
                        setOnlineBal(bal => {
                            localStorage.setItem("oBal", Number(bal) - Number(amount)); // debit from online
                            return Number(bal) - Number(amount);
                        });
                        setCashBal(bal => {
                            localStorage.setItem("cBal", Number(bal) - Number(list[id].amount)); // debit from cash also as it was credited by mistake.
                            return Number(bal) - Number(list[id].amount);
                        })
                    }
                } else { // previously amount was debited just we want to update the amount to be debited
                    if (list[id].mode === 'online') { // it was debited from online balance
                        setOnlineBal(bal => {
                            localStorage.setItem("oBal", (Number(bal) - (Number(amount) - Number(list[id].amount)))); // update the online balance.
                            return (bal - (Number(amount) - Number(list[id].amount)))
                        });
                    } else { // it was debited from cash balance but we want to debit from online
                        setOnlineBal(bal => {
                            localStorage.setItem("oBal", Number(bal) - Number(amount)); // debit from online balance
                            return Number(bal) - Number(amount);
                        });
                        setCashBal(bal => {
                            localStorage.setItem("cBal", Number(bal) + Number(list[id].amount)); // credit back to cash balance.
                            return Number(bal) + Number(list[id].amount);
                        })
                    }
                }
            }
            else { // amount must be credited to online balance
                if (list[id].type === 'debit') { // previously it was debited
                    if (list[id].mode === 'online') { // debited from online
                        setOnlineBal(bal => {
                            localStorage.setItem("oBal", Number(bal) + Number(amount) * 2); // update the online balance
                            return Number(bal) + Number(amount) * 2
                        });
                    } else { // it was debited from cash balance
                        setOnlineBal(bal => {
                            localStorage.setItem("oBal", Number(bal) + Number(amount)); // credit to online balance
                            return Number(bal) + Number(amount);
                        });
                        setCashBal(bal => {
                            localStorage.setItem("cBal", Number(bal) + Number(list[id].amount)); // credit back to cash balnce
                            return Number(bal) + Number(list[id].amount);
                        })
                    }
                } else { // it was credited and we want to credit also, just change the amount
                    if (list[id].mode === 'online') { // credited from online balance.
                        setOnlineBal(bal => {
                            localStorage.setItem("oBal", (Number(bal) + (Number(amount) - Number(list[id].amount)))); // update the online balance.
                            return (bal + (Number(amount) - Number(list[id].amount)))
                        });
                    } else { // credited to cash but we want to credit to online
                        setOnlineBal(bal => {
                            localStorage.setItem("oBal", Number(bal) + Number(amount)); // credit to online balance.
                            return Number(bal) + Number(amount);
                        });
                        setCashBal(bal => {
                            localStorage.setItem("cBal", Number(bal) - Number(list[id].amount)); // debit back from cash balance.
                            return Number(bal) - Number(list[id].amount);
                        })
                    }
                }
            }
        }
        // ---------------------- mode : cash --------------------------------------
        else {
            if (type === 'debit') { // now we want to debit from cash balance
                if (list[id].type === 'credit') { // it was credited previously
                    if (list[id].mode === 'cash') { // it was credited to cash balance
                        setCashBal(bal => {
                            localStorage.setItem("cBal", Number(bal) - Number(amount) * 2); // debit the amount twice from cash balance.
                            return Number(bal) - Number(amount) * 2
                        });
                    } else { // it was credited to online balance
                        setCashBal(bal => {
                            localStorage.setItem("cBal", Number(bal) - Number(amount)); // debit from cash balance
                            return Number(bal) - Number(amount);
                        });
                        setOnlineBal(bal => {
                            localStorage.setItem("oBal", Number(bal) - Number(list[id].amount)); // debit it from online also as it was credited by mistake.
                            return Number(bal) - Number(list[id].amount);
                        })
                    }
                } else { // it was debited previously, just debit amount changed
                    if (list[id].mode === 'cash') { // it was debited from cash balance
                        setCashBal(bal => {
                            localStorage.setItem("cBal", (Number(bal) - (Number(amount) - Number(list[id].amount)))); // update the cash balance.
                            return (bal - (Number(amount) - Number(list[id].amount)))
                        });
                    } else { // it was debited from online balance but we want to debit from cash
                        setCashBal(bal => {
                            localStorage.setItem("cBal", Number(bal) - Number(amount)); // debit from cash balance
                            return Number(bal) - Number(amount);
                        });
                        setOnlineBal(bal => {
                            localStorage.setItem("oBal", Number(bal) + Number(list[id].amount)); // credit back to online balance.
                            return Number(bal) + Number(list[id].amount);
                        })
                    }
                }
            }
            else { // amount must be credited to cash balance
                if (list[id].type === 'debit') { // previously it was debited
                    if (list[id].mode === 'cash') { // debited from cash balance.
                        setCashBal(bal => {
                            localStorage.setItem("cBal", Number(bal) + Number(amount) * 2); // update the cash balance
                            return Number(bal) + Number(amount) * 2
                        });
                    } else { // it was debited from online balance
                        setCashBal(bal => {
                            localStorage.setItem("cBal", Number(bal) + Number(amount)); // credit to cash balance
                            return Number(bal) + Number(amount);
                        });
                        setOnlineBal(bal => {
                            localStorage.setItem("oBal", Number(bal) + Number(list[id].amount)); // credit back to online balnce
                            return Number(bal) + Number(list[id].amount);
                        })
                    }
                } else { // it was credited and we want to credit also, just change the amount
                    if (list[id].mode === 'cash') { // credited from cash balance.
                        setCashBal(bal => {
                            localStorage.setItem("cBal", (Number(bal) + (Number(amount) - Number(list[id].amount)))); // update the cash balance.
                            return (bal + (Number(amount) - Number(list[id].amount)))
                        });
                    } else { // credited to online but we want to credit to cash
                        setCashBal(bal => {
                            localStorage.setItem("cBal", Number(bal) + Number(amount)); // credit to cash balance.
                            return Number(bal) + Number(amount);
                        });
                        setOnlineBal(bal => {
                            localStorage.setItem("oBal", Number(bal) - Number(list[id].amount)); // debit back from online balance.
                            return Number(bal) - Number(list[id].amount);
                        })
                    }
                }
            }
        }
        // update the list
        list[id].amount = amount;
        list[id].mode = mode;
        list[id].type = type;
        list[id].description = description;
        localStorage.setItem("list", JSON.stringify(list))

        navigate('/', { replace: true })
    }

    const handleDelete = () => {

        // updating the balance
        if (list[id]?.mode === 'online') { // mode was online
            if (list[id]?.type === 'debit') { // amount was debited
                setOnlineBal(bal => {
                    localStorage.setItem("oBal", (bal + Number(list[id]?.amount))); // credit back the amount
                    return (bal + Number(list[id]?.amount));
                });
            } else { // amount was credited
                setOnlineBal(bal => {
                    localStorage.setItem("oBal", (Number(bal) - Number(list[id]?.amount)));
                    return (Number(bal) - Number(list[id]?.amount));
                });
            }
        } else { // mode is cash
            if (list[id]?.type === 'debit') { // amount was debited
                setCashBal(bal => {
                    localStorage.setItem("cBal", (bal + list[id]?.amount)); // credit back the amount
                    return (bal + list[id]?.amount);
                });
            } else { // amount was credited
                setCashBal(bal => {
                    localStorage.setItem("cBal", (Number(bal) - Number(list[id]?.amount))); // debit back the amount
                    return (Number(bal) - Number(list[id]?.amount));
                });
            }
        }
        // remove from list
        list.splice(id, 1);
        localStorage.setItem("list", JSON.stringify(list));

        navigate('/')
    }
    return (
        <div className={`fixed w-full h-full max-w-xl bg-black/80 flex items-center justify-center`}>
            <form className=' overflow-hidden gap-6 bg-dark2 text-white p-4 rounded-lg w-[85%]' onSubmit={(e) => e.preventDefault()}>

                <p className='text-center bg-primary p-4 text-white font-bold'>Edit Transaction</p>

                <div className='flex flex-col overflow-hidden gap-6 p-4 pt-4'>

                    <input value={amount} onChange={(e) => setAmount(e.target.value)} className='px-4 py-3 focus:outline-none  rounded-md bg-dark2 ring-1 ring-pink' type="number" placeholder='Amount' />

                    <input value={description} onChange={(e) => setDesc(e.target.value)} className='px-4 py-3 focus:outline-none rounded-md bg-dark2 ring-1 ring-pink' type="text" placeholder='Description' />

                    <div className='flex items-center justify-center gap-2 px-8'>
                        <label htmlFor="">
                            Online
                        </label>
                        <input value={"online"} onChange={(e) => setMode(e.target.value)} className='mr-auto' type="radio" name="mode" id="" />

                        <label htmlFor="">
                            Cash
                        </label>
                        <input value={"cash"} onChange={(e) => setMode(e.target.value)} className='' type="radio" name="mode" id="" />

                    </div>

                    <div className='flex gap-4'>
                        <button type='button' onClick={() => { handleSubmit("debit") }} className=' w-full bg-[red]/20 text-red-500 font-bold border-0 text-sm p-3 rounded-md'>Debit</button>
                        <button type='button' onClick={() => { handleSubmit("credit") }} className=' w-full  bg-[#1a3522] text-[#38b05f]  font-bold text-green-500 text-sm border-0 p-3 rounded-md'>Credit</button>
                    </div>

                    <button onClick={handleDelete} type="button" className='text-red-500 flex items-center justify-center gap-2'> <MdDelete /> Delete Transaction</button>
                    <Link to={'/'} className='text-gray-500 mx-auto text-sm'>Cancel</Link>
                </div>
            </form>
        </div>
    )
}

export default EditTransaction
