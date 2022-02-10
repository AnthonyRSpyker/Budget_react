import React, { useState } from "react";

import ExpensesList from '../ExpensesList/ExpensesList.component'
import Card from "../Card.component/Card.component";
import ExpenseFilter from "../NewExpenses/ExpenseFilter.component";
import ExpensesChart from '../ExpensesChart/ExpensesChart.components'

import "./Expenses.styles.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2019");

  const filterChangeHandler = (selectYear) => {
    setFilteredYear(selectYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangedFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
