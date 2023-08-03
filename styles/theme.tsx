import { theme } from "@/constants";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./globals";

interface IThemeProps {
  children: React.ReactNode;
}

const Theme = (props: IThemeProps) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {props.children}
  </ThemeProvider>
);

export default Theme;
