import React, { useState } from 'react'

import ExpenseItem from "../ExpenseItmes.component/ExpenseItem.component";
import Card from "../Card.component/Card.component"
import ExpenseFilter from '../NewExpenses/ExpenseFilter.component'

import './Expenses.styles.css'

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2019')
  
  const filterChangeHandler = selectYear => {
    setFilteredYear(selectYear)
  }

  const filteredExpenses = props.items.filter(expense => {
      return expense.date.getFullYear().toString() === filteredYear;
      }
    )

return (
  <div>
    <Card className="expenses">
    <ExpenseFilter selected={filteredYear} onChangedFilter={filterChangeHandler} />
      {filteredExpenses.map((expenses) => (
        <ExpenseItem 
          key={expenses.id}
          title={expenses.title} 
          amount={expenses.amount}
          date={expenses.date} 
        />
      ))}
      
    </Card>
  </div>

)
}

export default Expenses