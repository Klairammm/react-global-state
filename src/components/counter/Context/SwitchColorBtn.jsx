import style from "./style.module.scss";
import { useContext } from "react";

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

const ThemeContext = React.createContext(themes.light);

function SwitchColorButton() {
  return (
    <ThemeContext.Provider value={dark}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);

  return (
    <>
      <button style={{ background: theme.background, color: theme.foreground }}>
        Switch Color
      </button>
    </>
  );
}

export default SwitchColorButton;
