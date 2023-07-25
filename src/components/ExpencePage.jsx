import { useState } from "react";

function ExpensePage() {
  const [expense, setExpense] = useState(0);

  const handleExpenseChange = (e) => {
    setExpense(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Expense:', expense);
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Expense Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={expense}
          onChange={handleExpenseChange}
          placeholder="Enter Expense Amount"
          className="border p-2 mb-2"
        />
        <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded">
          Add Expense
        </button>
      </form>
    </div>
  );
}

export default ExpensePage;
