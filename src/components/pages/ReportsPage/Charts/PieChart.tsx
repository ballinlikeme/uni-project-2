import React from "react";
import { PieChart as MUIPieChart } from "@mui/x-charts";
import { Box } from "@mui/material";
import { useAppSelector } from "lib/store";
import { transformTransactionsDataForPieChart } from "utils/transformTransactionsDataForPieChart";

export const PieChart: React.FC = () => {
  const { transactions } = useAppSelector((state) => state.transactions);
  const { categories } = useAppSelector((state) => state.categories);

  const data = transformTransactionsDataForPieChart(transactions, categories);

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
