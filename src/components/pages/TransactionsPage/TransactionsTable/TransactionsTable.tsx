import React, { useState } from "react";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
  Typography,
  Stack,
} from "@mui/material";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { useAppSelector } from "lib/store";
import { JetBrainsFont } from "lib/theme";

const ROWS_PER_PAGE = 10;

export const TransactionsTable: React.FC = () => {
  const { transactions } = useAppSelector((state) => state.transactions);

  const [page, setPage] = useState(0);
  const [dataToDisplay, setDataToDisplay] = useState(
    transactions.slice(0, ROWS_PER_PAGE + 1)
  );

  const handlePageChange = (
    _event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    page: number
  ) => {
    setPage(page);
    setDataToDisplay(
      transactions.slice(ROWS_PER_PAGE * page, ROWS_PER_PAGE * (page + 1))
    );
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Account</TableCell>
              <TableCell>Transaction Type</TableCell>
              <TableCell>Categories</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Amount</TableCell>
            </TableRow>
          </TableHead>
          {dataToDisplay.length ? (
            <TableBody>
              {dataToDisplay.map((transaction) => (
                <TableRow>
                  <TableCell>{transaction.recipient}</TableCell>
                  <TableCell>{transaction.type}</TableCell>
                  <TableCell>
                    {transaction.categories
                      .map((category) => category.name)
                      .join(", ")}
                  </TableCell>
                  <TableCell>
                    {new Date(transaction.date).toISOString().split("T")[0]}
                  </TableCell>
                  <TableCell align="center" sx={{ fontFamily: JetBrainsFont }}>
                    ${transaction.amount.toFixed(2)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          ) : null}
        </Table>
        {dataToDisplay.length === 0 ? (
          <Stack
            justifyContent="center"
            alignItems="center"
            minHeight="200px"
            gap={1}
          >
            <WarningAmberIcon sx={{ fontSize: "50px", color: "grey" }} />
            <Typography variant="body1" color="grey">
              There is not data about your transactions
            </Typography>
          </Stack>
        ) : null}
        <TablePagination
          component="div"
          count={transactions.length}
          onPageChange={handlePageChange}
          page={page}
          rowsPerPage={10}
          rowsPerPageOptions={[10]}
        />
      </TableContainer>
    </>
  );
};
