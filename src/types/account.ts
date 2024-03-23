export enum BalanceType {
  CASH = "Cash",
  CARD = "Card",
}

export type Account = {
  name: string;
  balance: number;
  type: BalanceType;
};
