import React from "react";
import { Container } from "@mui/material";
import { Header } from "../Header/Header";

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
};
