import { BalanceType } from "types";
import { z } from "zod";

export const accountSchema = z.object({
  name: z.string().min(3),
  type: z.enum([BalanceType.CARD, BalanceType.CASH]),
  balance: z.string(),
});

export type AccountValidationSchema = z.infer<typeof accountSchema>;
