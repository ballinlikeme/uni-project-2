import React from "react";
import { Box } from "@mui/material";
import { TransactionsTable } from "components/pages/TransactionsPage/TransactionsTable/TransactionsTable";

export const TransactionsPage: React.FC = () => {
  return (
    <Box py={5}>
      <TransactionsTable />
    </Box>
  );
};
