import React, { useState } from "react";
import { Stack, Collapse } from "@mui/material";

import { AddNewTransactionForm } from "./AddNewTransactionForm/AddNewTransactionForm";
import { TransactionsList } from "./TransactionsList/TransactionsList";
import { CollapseControlHeading } from "./CollapseControlHeading/CollapseControlHeading";

export const TransactionSection: React.FC = () => {
  const [isFormCollapsed, setIsFormCollapsed] = useState<boolean>(false);
  const [isListCollapsed, setIsListCollapsed] = useState<boolean>(false);

  return (
    <Stack direction="column" gap={2} sx={{ p: 2 }}>
      <Stack direction="column" gap={1}>
        <CollapseControlHeading
          isCollapsed={isFormCollapsed}
          label="New Transaction"
          onClick={() => setIsFormCollapsed((prev) => !prev)}
        />
        <Collapse in={!isFormCollapsed}>
          <AddNewTransactionForm />
        </Collapse>
      </Stack>
      <Stack direction="column" gap={1}>
        <CollapseControlHeading
          isCollapsed={isListCollapsed}
          label="Recent Transactions"
          onClick={() => setIsListCollapsed((prev) => !prev)}
        />
        <Collapse in={!isListCollapsed}>
          <TransactionsList />
        </Collapse>
      </Stack>
    </Stack>
  );
};
