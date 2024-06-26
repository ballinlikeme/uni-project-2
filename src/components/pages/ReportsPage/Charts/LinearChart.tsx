import { Stack, Typography } from "@mui/material";
import { useAppSelector } from "lib/store";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { transformTransactionsData } from "utils/transformTransactionsDataForLinearChart";

export const LinearChart: React.FC = () => {
  const { transactions } = useAppSelector((state) => state.transactions);

  const data = transformTransactionsData(transactions);

  const totalValue = data.reduce(
    (prev, curr) => prev + curr.totalExpense + curr.totalIncome,
    0
  );

  if (!totalValue) {
    return (
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{ minHeight: "200px" }}
      >
        <Typography>
          There is not data about your transactions for the previous week.
        </Typography>
      </Stack>
    );
  }

  return (
    <ResponsiveContainer width={"100%"} aspect={1}>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="weekDay" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          name="Total Income"
          type="monotone"
          dataKey="totalIncome"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
          label="Total Income"
        />
        <Line
          name="Total Expense"
          type="monotone"
          dataKey="totalExpense"
          stroke="#82ca9d"
          label="Total Expense"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
