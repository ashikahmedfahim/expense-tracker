import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  if (props.filteredExpenses.length === 0) {
    return <h2 class="expenses-list__fallback ">No Expenses Found</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
