import { addExpense, totalExpenses, filterByDateRange, fetchExpenseReport } from './fswd_pr_2_4.mjs';

(async () => {
  await addExpense('Groceries', 50, new Date('2023-10-01'));
  await addExpense('Utilities', 100, new Date('2023-10-05'));
  await addExpense('Rent', 500, new Date('2023-10-10'));

  console.log('Total Expenses:', totalExpenses());

  const filteredExpenses = filterByDateRange(new Date('2023-10-01'), new Date('2023-10-07'));
  console.log('Filtered Expenses:', filteredExpenses);

  try {
    const report = await fetchExpenseReport();
    console.log('Expense Report:', report);
  } catch (error) {
    console.error(`Error fetching expense report: ${error.message}`);
  }
})();