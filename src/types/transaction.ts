import type { Category } from "./category";

export enum TransactionType {
  INCOME = "Income",
  EXPENSE = "Expense",
}

export type Transaction = {
  id: string;
  type: TransactionType;
  recipient: string;
  date: Date | string;
  amount: number;
  note?: string;
  categories: Category[];
};
