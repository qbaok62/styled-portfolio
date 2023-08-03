"use client";
import { theme } from "@/constants";
import StyledComponentsRegistry from "@/lib/registry";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./globals";

interface IThemeProps {
  children: React.ReactNode;
}

const Theme = (props: IThemeProps) => (
  <StyledComponentsRegistry>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {props.children}
    </ThemeProvider>
  </StyledComponentsRegistry>
);

export default Theme;
