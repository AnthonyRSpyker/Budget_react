import React, { useState } from "react"

import './NewExpenseForm.style.css'

const NewExpenseForm = () => {

    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enterDate, setEntereddate] = useState('')

    const titleChangeHandler = (event) => {

        setEnteredTitle(event.target.value)
    }

    const amountChangeHandler = (event) => {

        setEnteredAmount(event.taget.value)
    }

    const dateChangeHandler = (event) => {

        setEntereddate(event.taget.value)
    }

    return (
            <form>
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label>Title</label>
                        <input type='text' onChange={titleChangeHandler}/>
                    </div>
                    <div className='new-expense__control'>
                        <label>Amount</label>
                        <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler}/>
                    </div>
                    <div className='new-expense__control'>
                        <label>date</label>
                        <input type='date' min='2019-01-01' step='2022-12-31' onChange={dateChangeHandler}/>
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button type='submit'>Add Expense</button>
                </div>
            </form>
        
    )
}

export default NewExpenseForm