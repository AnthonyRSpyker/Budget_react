import React, { useState } from 'react';

import Card from "../Card.component/Card.component"
import ExpenseDate from "../ExpenseDate.component/ExpenseDate.component"
import './ExpenseItem.style.css'

const ExpenseItem = (props) => {

    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {

        setTitle( "updated" );
        console.log(title)
    }
    

    return (
        <li>
        <Card className="expense-item">
            
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            {/* <button onClick={clickHandler}>Change Title</button> */}
        </Card> 
        </li>
        
    )
        
}

export default ExpenseItem;