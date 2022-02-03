import React, { useState } from "react"

import './NewExpenseForm.style.css'

const NewExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    
    // alternatives
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })
    
    const titleChangeHandler = (event) => {
        console.log(event)
        setEnteredTitle (event.target.value)

        //alternative 1
        // setUserInput({
        // ...userInput,
        // enteredTitle: event.target.value
        // })
        //alternative 2
        //if your state updated depends on the previous form
        //use this function form.
        // setUserInput((prevState) => {
        //     return {...prevState, enteredTitle: event.target.value }
        // })
    };

    const amountChangeHandler = (event) => {

        setEnteredAmount (event.target.value)
        
        // alternatives
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        //     })
        //alternative 2
        //if your state updated depends on the previous form
        //use this function form.
        // setUserInput((prevState) => {
        //     return {...prevState, enteredAmount: event.target.value }
        // })
    }

    const dateChangeHandler = (event) => {
        console.log(event.target.value)
        setEnteredDate(event.taget.value)

        //alternativers
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        //     })
        //alternative 2
        
        // setUserInput((prevState) => {
            //     return {...prevState, entereDate: event.target.value }
            // })
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        
        
        props.onSaveExpenseData(expenseData)
        setEnteredAmount('');
        setEnteredDate('')
        setEnteredTitle('')
    }
    // const submitHandler = event => {
    //     event.preventDefault();
    //     let myHours = new Date().getHours();
    //     if (myHours < 10) { myHours = '0' + myHours; }
    //     const expenseData = {
    //       title: enteredTitle,
    //       amount: enteredAmount,
    //       date: new Date(
    //         `${enteredDate}T${myHours}:00:00`
    //       )
    //     };
    //     console.log(
    //       'ExpenseForm > submitHandler > expenseData: ',
    //       expenseData
    //     );
    //     console.log(enteredDate, typeof enteredDate);
    //   };
    

        return (
            <form onSubmit={submitHandler}>
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label>Title</label>
                        <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
                    </div>
                    <div className='new-expense__control'>
                        <label>Amount</label>
                        <input type='number' value={enteredAmount} min='0.01' step='0.01' onChange={amountChangeHandler}/>
                    </div>
                    <div className='new-expense__control'>
                        <label>Date</label>
                        <input 
                        type='date' 
                        min='2019-01-01' 
                        max='2022-12-31' 
                        value={enteredDate}
                        onChange={dateChangeHandler}
                        />
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button type='submit'>Add Expense</button>
                </div>
            </form>
        
    )
}

export default NewExpenseForm