import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { StorageKeys } from "constant";
import { DataStorageService } from "services";
import type { Transaction } from "types";

interface TransactionsState {
  transactions: Transaction[];
}

const initialState: TransactionsState = {
  transactions: DataStorageService.retrieveData(StorageKeys.TRANSACTIONS) || [],
};

export const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    addNewTransaction: (state, action: PayloadAction<Transaction>) => {
      state.transactions.push(action.payload);
      DataStorageService.saveData(state.transactions, StorageKeys.TRANSACTIONS);
    },

    deleteTransaction: (state, action: PayloadAction<Transaction>) => {
      state.transactions = state.transactions.filter(
        (transaction) => transaction.id !== action.payload.id
      );
      DataStorageService.saveData(state.transactions, StorageKeys.TRANSACTIONS);
    },
  },
});

export const transactionsReducer = transactionsSlice.reducer;
export const { addNewTransaction, deleteTransaction } =
  transactionsSlice.actions;
