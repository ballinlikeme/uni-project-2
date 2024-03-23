import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#10B981",
      light: "#1EEBA7",
      dark: "#0B835B",
      contrastText: "#ffffff",
    },
    error: {
      main: "#A82727",
    },
    text: {
      primary: "#000000",
      secondary: "#2E2E2E",
    },
    background: {
      default: "#FFE8DB",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

export const JetBrainsFont = "JetBrains Mono Variable, monospace";

export { theme };
