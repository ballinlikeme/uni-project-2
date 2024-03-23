import React, { useState } from "react";
import {
  Stack,
  Tabs,
  Tab,
  TextField,
  Autocomplete,
  Box,
  InputAdornment,
  Button,
  MenuItem,
  Typography,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { useForm, type SubmitHandler, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import {
  TransactionValidationSchema,
  transactionSchema,
} from "./addNewTransaction.schema";
import { useAppDispatch, useAppSelector } from "lib/store";
import { addNewTransaction } from "lib/store/slices/transactions";
import { v4 as uuidv4 } from "uuid";
import { type Category, TransactionType } from "types";
import { JetBrainsFont, theme } from "lib/theme";
import { addCategory } from "lib/store/slices/categories";
import { updateAccount } from "lib/store/slices/accounts";

const mapCategoryValues = (values: string[]): Category[] =>
  values.map((val) => ({ name: val }));

export const AddNewTransactionForm: React.FC = () => {
  const [tabValue, setTabValue] = useState<TransactionType>(
    TransactionType.INCOME
  );

  const { accounts } = useAppSelector((state) => state.accounts);
  const { categories } = useAppSelector((state) => state.categories);

  const { register, handleSubmit, reset, control, setValue } =
    useForm<TransactionValidationSchema>({
      resolver: zodResolver(transactionSchema),
    });

  const handleTabChange = (
    _event: React.SyntheticEvent<Element, Event>,
    value: TransactionType
  ) => {
    setTabValue(value);
  };

  const customHandleAutoCompleteChange = (
    event: React.SyntheticEvent,
    data: string[],
    onChange: (...event: any[]) => void
  ) => {
    onChange(data);

    data.forEach((val) => {
      if (!categories.map((category) => category.name).includes(val)) {
        dispatch(addCategory({ name: val }));
      }
    });

    return data;
  };

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<TransactionValidationSchema> = (data) => {
    const selectedAccount = accounts.filter(
      (account) => account.name === data.recipient
    )[0];

    const newAccountState = { ...selectedAccount };

    const transactionAmount = Number(data.amount);

    if (tabValue === TransactionType.INCOME) {
      newAccountState.balance += transactionAmount;
    } else {
      newAccountState.balance -= transactionAmount;
    }

    dispatch(updateAccount(newAccountState));

    dispatch(
      addNewTransaction({
        ...data,
        categories: mapCategoryValues(data.categories),
        amount: transactionAmount,
        type: tabValue,
        id: uuidv4(),
      })
    );
    setValue("categories", []);
    setValue("recipient", "");
    reset();
  };

  return (
    <Box
      border="1px solid"
      borderColor={theme.palette.grey["400"]}
      borderRadius="8px"
    >
      <Stack gap={3}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          sx={{ width: "100%" }}
        >
          <Tab
            sx={{ width: "50%" }}
            label={TransactionType.INCOME}
            value={TransactionType.INCOME}
          />
          <Tab
            sx={{ width: "50%" }}
            label={TransactionType.EXPENSE}
            value={TransactionType.EXPENSE}
          />
        </Tabs>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack direction="column" gap={2} p={2} pt={0}>
            <Stack direction="row" gap={1}>
              <Stack flex="70%">
                <Controller
                  control={control}
                  name="recipient"
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      select
                      size="small"
                      label="Account"
                    >
                      {accounts.map((account) => (
                        <MenuItem key={account.name} value={account.name}>
                          <Stack
                            direction="row"
                            alignItems="center"
                            justifyContent="space-between"
                            width="100%"
                          >
                            <Box width="100%">
                              <Typography>{account.name}</Typography>
                            </Box>
                            <Box width="100%" alignSelf="flex-end">
                              <Typography
                                fontFamily={JetBrainsFont}
                                textAlign="right"
                              >
                                {account.balance.toFixed(2)} USD
                              </Typography>
                            </Box>
                          </Stack>
                        </MenuItem>
                      ))}
                    </TextField>
                  )}
                />
              </Stack>
              <Stack flex="30%">
                <TextField
                  {...register("amount")}
                  fullWidth
                  size="small"
                  label="Amount"
                  type="number"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AttachMoneyIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Stack>
            </Stack>
            <Stack direction="row" gap={1}>
              <Stack flex="70%">
                <Controller
                  name="categories"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <Autocomplete
                      autoComplete
                      multiple
                      freeSolo
                      value={value}
                      ChipProps={{ size: "small" }}
                      options={categories.map((category) => category.name)}
                      sx={{ width: "100%" }}
                      onChange={(_, data) => {
                        return customHandleAutoCompleteChange(
                          _,
                          data,
                          onChange
                        );
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          fullWidth
                          size="small"
                          label="Categories"
                        />
                      )}
                    />
                  )}
                />
              </Stack>
              <Stack flex="30%">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <Controller
                    control={control}
                    name="date"
                    render={({ field: { onChange, ...rest } }) => (
                      <DatePicker
                        {...rest}
                        sx={{ width: "100%" }}
                        slotProps={{ textField: { size: "small" } }}
                        onChange={(val) => {
                          if (val) {
                            onChange(new Date(val));
                          }
                          return val;
                        }}
                      />
                    )}
                  />
                </LocalizationProvider>
              </Stack>
            </Stack>
            <Stack direction="row" gap={1}>
              <Stack flex="70%">
                <TextField size="small" label="Note" />
              </Stack>
              <Stack flex="30%">
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ height: "100%" }}
                >
                  Add Transaction
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </form>
      </Stack>
    </Box>
  );
};
