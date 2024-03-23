import { SxProps } from "@mui/material";
import { theme } from "lib/theme";

export type CustomSxProps = SxProps<typeof theme>;
export type StyleProps = { [key: string]: CustomSxProps };
