function addExpense() {
  const expenseDiv = document.createElement('div');
  expenseDiv.className = 'expense-item';
  expenseDiv.innerHTML = `
    <input type="text" placeholder="Expense name">
    <input type="number" placeholder="Amount">
  `;
  document.getElementById('expenses').appendChild(expenseDiv);
}

function calculateBudget() {
  const income = parseFloat(document.getElementById('income').value);
  const expenseItems = document.querySelectorAll('.expense-item');
  let totalExpenses = 0;

  expenseItems.forEach(item => {
    const amount = parseFloat(item.children[1].value);
    if (!isNaN(amount)) {
      totalExpenses += amount;
    }
  });

  const balance = income - totalExpenses;
  document.getElementById('result').textContent = `Remaining: ${balance} AMD`;
}
