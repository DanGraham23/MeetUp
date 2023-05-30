import { Switch } from "@mui/material";
import { useThemeContext } from "../../theme/ThemeContext";


function DarkModeSwitch() {

  const {mode, toggleColorMode} = useThemeContext();

  function handleChange(){
    localStorage.setItem("meetup-color-preference", mode === "light" ? "dark" : "light");
    toggleColorMode();
    
  }

  return (
    <Switch
    edge="end"
    onChange={handleChange}
    checked={mode === "dark"}
    inputProps={{
    'aria-labelledby': 'switch-list-label-dark-mode',
    }}
    />
  )
}

export default DarkModeSwitch;
