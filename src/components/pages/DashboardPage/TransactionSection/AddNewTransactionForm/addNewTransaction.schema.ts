import { z } from "zod";

export const transactionSchema = z.object({
  recipient: z.string().min(1),
  amount: z.string(),
  categories: z.array(z.string()).min(1),
  date: z.string(),
  note: z.string().optional(),
});

export type TransactionValidationSchema = z.infer<typeof transactionSchema>;
