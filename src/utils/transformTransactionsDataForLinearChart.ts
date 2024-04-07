import { Transaction, TransactionType } from "types";
import { getFullPreviousWeekDates, getPreviousWeekDates } from "./dates";

type TransformedDate = {
  label: string;
  weekDay: string;
  date: Date;
};

type DateWithIncomeAndExpense = TransformedDate & {
  totalExpense: number;
  totalIncome: number;
};

function transformTransactionsDates(
  transactions: Transaction[]
): TransformedDate[] {
  const dates: TransformedDate[] = [];

  const previousWeekDates = getPreviousWeekDates();
  const fullPreviousWeekDates = getFullPreviousWeekDates();

  const weekDays = [
    { label: "Sun", index: 0 },
    { label: "Mon", index: 1 },
    { label: "Tue", index: 2 },
    { label: "Wed", index: 3 },
    { label: "Thu", index: 4 },
    { label: "Fri", index: 5 },
    { label: "Sat", index: 6 },
  ];

  for (let i = 0; i < transactions.length; i++) {
    const transaction = transactions[i];
    const transactionDate = new Date(transaction.date);
    const splittedTransactionDate = transactionDate.toDateString().split(" ");
    const dateLabel = `${splittedTransactionDate[2]} ${splittedTransactionDate[1]}`;

    if (
      transactionDate >= previousWeekDates.first &&
      transactionDate <= previousWeekDates.last &&
      !dates.filter((val) => val.label === dateLabel).length
    ) {
      const weekDay = weekDays[transactionDate.getDay()];
      dates.push({
        date: transactionDate,
        label: dateLabel,
        weekDay: weekDay.label,
      });
    }
  }

  for (let i = 0; i < weekDays.length; i++) {
    const weekDay = weekDays[i];
    const isInArray = Boolean(
      dates.filter((value) => value.weekDay === weekDay.label).length
    );

    if (!isInArray) {
      const date = fullPreviousWeekDates.filter(
        (date) => date.getDay() === weekDay.index
      )[0];

      const splittedDate = date.toDateString().split(" ");
      const dateLabel = `${splittedDate[2]} ${splittedDate[1]}`;

      dates.push({ date, label: dateLabel, weekDay: weekDay.label });
    }
  }

  return dates;
}

function transformTransactionsAmount(
  transactions: Transaction[],
  dates: TransformedDate[]
): DateWithIncomeAndExpense[] {
  const datesWithIncomeAndExpense: DateWithIncomeAndExpense[] = [];

  for (let i = 0; i < dates.length; i++) {
    const transactionDatesInfo = dates[i];
    const transactionDate = transactionDatesInfo.date;
    const resultTransactionObject: DateWithIncomeAndExpense = {
      ...dates[i],
      totalExpense: 0,
      totalIncome: 0,
    };

    const transactionsForDate = transactions.filter(
      (transaction) =>
        new Date(transaction.date).toDateString() ===
        transactionDate.toDateString()
    );

    const expenseValues = transactionsForDate
      .filter((transaction) => transaction.type === TransactionType.EXPENSE)
      .map((transaction) => transaction.amount);

    const incomeValues = transactionsForDate
      .filter((transaction) => transaction.type === TransactionType.INCOME)
      .map((transaction) => transaction.amount);

    if (expenseValues.length) {
      const totalExpense = expenseValues.reduce((prev, curr) => prev + curr);
      resultTransactionObject.totalExpense = totalExpense;
    }

    if (incomeValues.length) {
      const totalIncome = incomeValues.reduce((prev, curr) => prev + curr);
      resultTransactionObject.totalIncome = totalIncome;
    }

    datesWithIncomeAndExpense.push(resultTransactionObject);
  }

  return datesWithIncomeAndExpense;
}

export function transformTransactionsData(transactions: Transaction[]) {
  const dates = transformTransactionsDates(transactions);
  const datesWithIncomeAndExpense = transformTransactionsAmount(
    transactions,
    dates
  );

  const sortedTransactionsData = datesWithIncomeAndExpense.sort(
    (a, b) => a.date.getTime() - b.date.getTime()
  );

  return sortedTransactionsData;
}
