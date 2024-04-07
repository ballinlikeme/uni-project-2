import React from "react";
import { PieChart as MUIPieChart } from "@mui/x-charts";
import { Box, Stack, Typography } from "@mui/material";
import { useAppSelector } from "lib/store";
import { transformTransactionsDataForPieChart } from "utils/transformTransactionsDataForPieChart";

export const PieChart: React.FC = () => {
  const { transactions } = useAppSelector((state) => state.transactions);
  const { categories } = useAppSelector((state) => state.categories);

  const data = transformTransactionsDataForPieChart(transactions, categories);

  if (!data.length) {
    return (
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{ minHeight: "200px" }}
      >
        <Typography>
          There is not data about your transactions for this week.
        </Typography>
      </Stack>
    );
  }

  return (
    <Box width="50%">
      <MUIPieChart
        width={600}
        height={500}
        series={[
          {
            data: data,
          },
        ]}
        slotProps={{ legend: { hidden: true } }}
      />
    </Box>
  );
};
