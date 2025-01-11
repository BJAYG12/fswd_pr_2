const expenses = [];

/**
 * Add a new expense to the array.
 * @param {string} description - Description of the expense.
 * @param {number} amount - Amount spent.
 * @param {Date} date - Date of the expense.
 */
export async function addExpense(description, amount, date) {
  try {
    if (!description || typeof description !== 'string') {
      throw new Error('Invalid description.');
    }
    if (typeof amount !== 'number' || amount <= 0) {
      throw new Error('Amount must be a positive number.');
    }
    if (!(date instanceof Date) || isNaN(date.getTime())) {
      throw new Error('Invalid date.');
    }

    expenses.push({ description, amount, date });
    console.log(`Expense added: ${description}, ${amount}, ${date}`);
  } catch (error) {
    console.error(`Error adding expense: ${error.message}`);
  }
}

/**
 * Calculate the total amount spent.
 * @returns {number} - Total amount spent.
 */
export function totalExpenses() {
  return expenses.reduce((total, expense) => total + expense.amount, 0);
}

/**
 * Filter expenses within a specific date range.
 * @param {Date} startDate - Start date of the range.
 * @param {Date} endDate - End date of the range.
 * @returns {Array} - Filtered expenses.
 */
export function filterByDateRange(startDate, endDate) {
  return expenses.filter(
    (expense) => expense.date >= startDate && expense.date <= endDate
  );
}

/**
 * Simulate fetching an expense report asynchronously.
 * @returns {Promise} - Promise that resolves with the expense report.
 */
export async function fetchExpenseReport() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (expenses.length > 0) {
        resolve(expenses);
      } else {
        reject(new Error('No expenses found.'));
      }
    }, 1000);
  });
}

export { expenses };