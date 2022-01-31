import React from 'react'

import NewExpenseForm from './NewExpenseForm.component'
import './NewExpense.style.css'



const NewExpense = () => {
    return (
        <div className='new-expense'>
            <NewExpenseForm />
        </div>
    )
}

export default NewExpense