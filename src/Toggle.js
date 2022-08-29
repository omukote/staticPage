import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./Themes.js";

//const styledApp = styled.div`
//color: ${(props) => props.theme.fontColor};
//`;

export default function Toggle() {
  const [theme, setTheme] = useState("dark");

  //function to change theme
  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <styledApp>
        <button onClick={() => toggleTheme()} className="button">
          Change Theme
        </button>
      </styledApp>
    </ThemeProvider>
  );
}
