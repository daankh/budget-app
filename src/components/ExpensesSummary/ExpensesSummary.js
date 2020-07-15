import React from 'react';
import numeral from "numeral";
import { useSelector } from "react-redux";
import { getVisibleExpenses } from "../../redux/selectors/expenses";
import { selectExpensesTotal } from "../../redux/selectors/expenses-total"

const ExpensesSummary = () => {
    const expensesCount = useSelector(state => getVisibleExpenses(state.expenses, state.filters).length);
    const expensesTotal = useSelector(state => selectExpensesTotal(getVisibleExpenses(state.expenses, state.filters)));
    const expenseWord = `${expensesCount > 1 ? "expenses" : "expense"}`;
    const formatedExpensesTotal = numeral(expensesTotal / 100).format("$0,0.00")
    return (
        <h2>{`Viewing of ${expensesCount} ${expenseWord} totalling ${formatedExpensesTotal} `}</h2>
    )
}

export default ExpensesSummary