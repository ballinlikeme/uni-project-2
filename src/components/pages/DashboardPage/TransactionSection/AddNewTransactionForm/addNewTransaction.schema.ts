import { z } from "zod";

export const transactionSchema = z.object({
  recipient: z.string(),
  amount: z.string(),
  categories: z.array(z.string()).min(1),
  date: z.date(),
  note: z.string().optional(),
});

export type TransactionValidationSchema = z.infer<typeof transactionSchema>;
