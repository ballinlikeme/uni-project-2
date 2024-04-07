import type { Transaction } from "types";

export const getPreviousWeekDates = (): { first: Date; last: Date } => {
  const date = new Date();
  const day = date.getDay();
  const diff = date.getDate() - day + (day === 0 ? -6 : 1);
  const first = new Date(date.setDate(diff));
  first.setDate(first.getDate() - 7);
  const last = new Date(
    first.getFullYear(),
    first.getMonth(),
    first.getDate() + 7
  );
  return { first, last };
};

export const fillDatesRange = (startDate: Date, endDate: Date): Date[] => {
  const currentDate = new Date(startDate.getTime());
  const dates = [];
  while (currentDate <= endDate) {
    dates.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return dates;
};

export const getFullPreviousWeekDates = (): Date[] => {
  const { first, last } = getPreviousWeekDates();
  return fillDatesRange(first, last);
};

export const getTransactionsForThisMonth = (transactions: Transaction[]) => {
  const thisMonth = new Date().getMonth();
  const transactionsForThisMonth = transactions.filter((transaction) => {
    const transactionMonth = new Date(transaction.date).getMonth();
    return transactionMonth === thisMonth;
  });

  return transactionsForThisMonth;
};
