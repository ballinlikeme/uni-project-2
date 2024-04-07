import React from "react";
import { Box, Typography } from "@mui/material";
import { useAppSelector } from "lib/store";
import { TransactionsItem } from "./TransactionsItem/TransactionsItem";
import { theme } from "lib/theme";
import { Transaction } from "types";

export const TransactionsList: React.FC = () => {
  const { transactions } = useAppSelector((state) => state.transactions);

  const sortedTransactions = sortTransactions([...transactions]);

  const transactionsToMap =
    sortedTransactions.length > 10
      ? sortedTransactions.slice(transactions.length - 5, transactions.length)
      : sortedTransactions;

  return (
    <Box
      border="1px solid"
      borderColor={theme.palette.grey["400"]}
      borderRadius="8px"
    >
      {transactionsToMap.length === 0 && (
        <Box p={16} display="flex" justifyContent="center" alignItems="center">
          <Typography>No recent transactions found</Typography>
        </Box>
      )}

      {transactionsToMap.reverse().map((transaction) => (
        <TransactionsItem key={transaction.id} transaction={transaction} />
      ))}
    </Box>
  );
};

const sortTransactions = (transactions: Transaction[]) => {
  return transactions.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
};
