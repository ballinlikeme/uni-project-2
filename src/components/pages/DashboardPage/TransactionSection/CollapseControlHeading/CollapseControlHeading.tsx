import React from "react";
import { ExpandMore } from "@mui/icons-material";
import { Stack, Icon, Typography } from "@mui/material";

export const CollapseControlHeading: React.FC<CollapseControlHeadingProps> = ({
  label,
  onClick,
  isCollapsed,
}) => {
  const iconSx = !isCollapsed
    ? { transition: ".3s ease" }
    : { transform: "rotate(180deg)", transition: ".3s ease" };

  const stackSx = { cursor: "pointer", userSelect: "none" };

  return (
    <Stack
      onClick={onClick}
      direction="row"
      alignItems="center"
      gap={1}
      sx={stackSx}
    >
      <Icon sx={iconSx}>
        <ExpandMore />
      </Icon>
      <Typography variant="h6">{label}</Typography>
    </Stack>
  );
};

interface CollapseControlHeadingProps {
  label: string;
  onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  isCollapsed: boolean;
}
