import React from "react";
import {
  Stack,
  TextField,
  MenuItem,
  Button,
  InputAdornment,
} from "@mui/material";
import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  accountSchema,
  type AccountValidationSchema,
} from "./addNewAccount.schema";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { useAppDispatch } from "lib/store";
import { addAccount } from "lib/store/slices/accounts";

export const AddNewAccountForm: React.FC = () => {
  const { register, control, reset, handleSubmit } =
    useForm<AccountValidationSchema>({
      resolver: zodResolver(accountSchema),
    });

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<AccountValidationSchema> = (data) => {
    dispatch(addAccount({ ...data, balance: Number(data.balance) }));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack direction="column" gap={2}>
        <TextField label="Account name" size="small" {...register("name")} />
        <Controller
          control={control}
          name="type"
          render={({ field, fieldState: { error } }) => (
            <TextField
              select
              {...field}
              size="small"
              label="Account type"
              error={Boolean(error)}
              helperText={error?.message}
            >
              <MenuItem value="Cash">Cash</MenuItem>
              <MenuItem value="Card">Card</MenuItem>
            </TextField>
          )}
        />

        <TextField
          {...register("balance")}
          fullWidth
          size="small"
          label="Initial Balance"
          type="number"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AttachMoneyIcon />
              </InputAdornment>
            ),
          }}
        />
        <Button type="submit" size="small" variant="contained">
          CONFIRM
        </Button>
      </Stack>
    </form>
  );
};
