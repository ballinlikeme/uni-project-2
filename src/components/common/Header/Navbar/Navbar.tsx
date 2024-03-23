import React from "react";
import { Box, Stack, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { theme } from "lib/theme";
import { AppRoutes } from "lib/router";

export const Navbar: React.FC = () => {
  return (
    <Box component="nav">
      <Stack direction="row" alignItems="center" gap={3}>
        <Link to={AppRoutes.DASHBOARD}>
          <Button sx={{ color: theme.palette.primary.contrastText }}>
            Dashboard
          </Button>
        </Link>
        <Link to={AppRoutes.TRANSACTIONS}>
          <Button sx={{ color: theme.palette.primary.contrastText }}>
            Transactions
          </Button>
        </Link>
        <Link to={AppRoutes.REPORTS}>
          <Button sx={{ color: theme.palette.primary.contrastText }}>
            Reports
          </Button>
        </Link>
      </Stack>
    </Box>
  );
};
