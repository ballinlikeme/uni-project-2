import { Category, Transaction, TransactionType } from "types";

type CategoryWithAmount = { value: number; id: number; label: string };

export function transformTransactionsDataForPieChart(
  transactions: Transaction[],
  categories: Category[]
) {
  const output: CategoryWithAmount[] = [];

  const expenceTransactions = transactions.filter(
    (transaction) => transaction.type === TransactionType.EXPENSE
  );

  for (let i = 0; i < categories.length; i++) {
    const category = categories[i].name;

    const transactionsWithCategory = expenceTransactions.filter(
      (transaction) => {
        const transactionCategories = transaction.categories.map(
          (category) => category.name
        );
        return transactionCategories.includes(category);
      }
    );

    if (!transactionsWithCategory.length) {
      continue;
    }

    const amount = transactionsWithCategory.reduce(
      (prev, curr) => prev + curr.amount,
      0
    );
    output.push({ id: i, label: category, value: amount });
  }

  return output;
}
