import React, { useState } from "react";
import { Box, Collapse, Stack } from "@mui/material";
import { AddNewAccountForm } from "./AddNewAccountForm/AddNewAccountForm";
import { theme } from "lib/theme";
import { CollapseControlHeading } from "../TransactionSection/CollapseControlHeading/CollapseControlHeading";

export const AccountsSection: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleHeadingClick = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <Stack sx={{ p: 2 }}>
      <Stack direction="column" gap={1}>
        <CollapseControlHeading
          label="Accounts"
          isCollapsed={isCollapsed}
          onClick={handleHeadingClick}
        />
        <Collapse in={!isCollapsed}>
          <Box
            border="1px solid"
            borderColor={theme.palette.grey["400"]}
            borderRadius="8px"
          >
            <Box p="16px">
              <AddNewAccountForm />
            </Box>
          </Box>
        </Collapse>
      </Stack>
    </Stack>
  );
};
