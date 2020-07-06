export const getVisibleExpenses = (expenses, filters) => {
  const { text: filterText, sortBy, startDate, endDate } = filters;
  return expenses
    .filter((expense) => {
      const { createdAt, description: expenseText } = expense;
      const startDateMatch =
        typeof startDate !== "number" || createdAt >= startDate;
      const endDateMatch = typeof endDate !== "number" || createdAt <= endDate;
      const textMatch = expenseText
        .toLowerCase()
        .includes(filterText.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt - b.createdAt;
      } else {
        return a.amount - b.amount;
      }
    });
};
