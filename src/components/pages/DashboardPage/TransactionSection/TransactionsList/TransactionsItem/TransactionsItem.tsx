import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Stack, Typography } from "@mui/material";
import { TransactionType, type Transaction } from "types";
import { theme, JetBrainsFont } from "lib/theme";

export const TransactionsItem: React.FC<TransactionsItemProps> = ({
  transaction,
}) => {
  const isIncome = transaction.type === TransactionType.INCOME;

  return (
    <Box p="16px">
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" gap={1} alignItems="center">
          <Typography
            variant="body2"
            color={theme.palette.grey["500"]}
            lineHeight="normal"
          >
            {localFormatDate(transaction.date)}
          </Typography>
          <Typography>{transaction.recipient}</Typography>
          {isIncome ? (
            <ArrowBackIcon fontSize="small" />
          ) : (
            <ArrowForwardIcon fontSize="small" />
          )}
          <Typography>
            {transaction.categories.map((val) => val.name).join(" ")}
          </Typography>
          <Typography>{transaction.note}</Typography>
        </Stack>
        <Stack>
          <Typography
            fontWeight={500}
            fontSize="18px"
            fontFamily={JetBrainsFont}
            color={
              isIncome ? theme.palette.success.main : theme.palette.error.main
            }
          >
            {transaction.amount.toFixed(2)} USD
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

interface TransactionsItemProps {
  transaction: Transaction;
}

const localFormatDate = (date: Date | string): string => {
  const arr = new Date(date).toDateString().split(" ");

  return `${arr[2]} ${arr[1]}`;
};
