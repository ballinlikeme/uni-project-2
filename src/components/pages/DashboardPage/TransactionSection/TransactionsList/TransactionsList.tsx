import React from "react";
import { Box, Typography } from "@mui/material";
import { useAppSelector } from "lib/store";
import { TransactionsItem } from "./TransactionsItem/TransactionsItem";
import { theme } from "lib/theme";

export const TransactionsList: React.FC = () => {
  const { transactions } = useAppSelector((state) => state.transactions);

  return (
    <Box
      border="1px solid"
      borderColor={theme.palette.grey["400"]}
      borderRadius="8px"
    >
      {transactions.length === 0 && (
        <Box p={16} display="flex" justifyContent="center" alignItems="center">
          <Typography>No recent transactions found</Typography>
        </Box>
      )}
      {transactions.map((transaction) => (
        <TransactionsItem key={transaction.id} transaction={transaction} />
      ))}
    </Box>
  );
};
