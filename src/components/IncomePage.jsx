
import  { useState } from 'react';

function IncomePage() {
  const [income, setIncome] = useState(0);

  const handleIncomeChange = (e) => {
    setIncome(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
 
    console.log('Income:', income);
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Income Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={income}
          onChange={handleIncomeChange}
          placeholder="Enter Income Amount"
          className="border p-2 mb-2"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Income
        </button>
      </form>
    </div>
  );
}

export default IncomePage;
