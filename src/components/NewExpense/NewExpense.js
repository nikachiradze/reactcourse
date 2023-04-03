import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [expenseBtn, setExpenseBtn] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const expenseBtnHandler = () => {
    setExpenseBtn((prevState) => !prevState);
  };

  return (
    <div className="new-expense">
      {expenseBtn ? (
        <ExpenseForm
          handlerExpenseBtn={expenseBtnHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      ) : (
        <button type="button" onClick={expenseBtnHandler}>
          Add New Expense
        </button>
      )}
    </div>
  );
};

export default NewExpense;
