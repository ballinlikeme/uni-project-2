import React from "react";
import PaidIcon from "@mui/icons-material/Paid";
import { Box, Stack, Typography, Container, Paper } from "@mui/material";
import { theme } from "lib/theme";
import { Navbar } from "./Navbar/Navbar";

export const Header: React.FC = () => {
  return (
    <Box component="header">
      <Paper elevation={4} sx={{ background: theme.palette.primary.main }}>
        <Container>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Stack
              direction="row"
              alignItems="center"
              gap={2}
              sx={{ height: "80px" }}
            >
              <PaidIcon
                sx={{ fontSize: 50, color: theme.palette.primary.contrastText }}
              />
              <Typography
                variant="h5"
                color={theme.palette.primary.contrastText}
              >
                SpendSmart
              </Typography>
            </Stack>
            <Navbar />
          </Stack>
        </Container>
      </Paper>
    </Box>
  );
};
