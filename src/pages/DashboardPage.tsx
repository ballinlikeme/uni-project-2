import React from "react";
import { Paper, Box, Stack } from "@mui/material";
import { TransactionSection } from "components/pages/DashboardPage/TransactionSection/TransactionSection";
import { AccountsSection } from "components/pages/DashboardPage/AccountsSection/AccountsSection";

export const DashboardPage: React.FC = () => {
  return (
    <Box py={5}>
      <Paper elevation={2}>
        <Stack direction="row" justifyContent="space-between" gap={3}>
          <Stack p={2} flex="40%">
            <AccountsSection />
          </Stack>
          <Stack p={2} flex="60%">
            <TransactionSection />
          </Stack>
        </Stack>
      </Paper>
    </Box>
  );
};
