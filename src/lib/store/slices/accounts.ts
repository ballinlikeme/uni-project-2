import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { StorageKeys } from "constant";
import { DataStorageService } from "services";
import type { Account } from "types";

interface AccountsState {
  accounts: Account[];
}

const initialState: AccountsState = {
  accounts: DataStorageService.retrieveData(StorageKeys.ACCOUNTS) || [],
};

export const accountsSlice = createSlice({
  name: "accounts",
  initialState,
  reducers: {
    addAccount: (state, action: PayloadAction<Account>) => {
      state.accounts.push(action.payload);
      DataStorageService.saveData(state.accounts, StorageKeys.ACCOUNTS);
    },

    updateAccount: (state, action: PayloadAction<Account>) => {
      const index = state.accounts.findIndex(
        (account) => account.name === action.payload.name
      );
      if (index !== -1) {
        state.accounts[index] = action.payload;
      }
      DataStorageService.saveData(state.accounts, StorageKeys.ACCOUNTS);
    },

    removeAccount: (state, action: PayloadAction<Account>) => {
      state.accounts = state.accounts.filter(
        (account) => account.name !== action.payload.name
      );
      DataStorageService.saveData(state.accounts, StorageKeys.ACCOUNTS);
    },
  },
});

export const accountsReducer = accountsSlice.reducer;
export const { addAccount, updateAccount, removeAccount } =
  accountsSlice.actions;
