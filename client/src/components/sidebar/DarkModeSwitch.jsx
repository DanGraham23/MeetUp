import { Switch } from "@mui/material";
import { useThemeContext } from "../../theme/ThemeContext";


function DarkModeSwitch() {

  const {mode, toggleColorMode} = useThemeContext();

  return (
    <Switch
    edge="end"
    onChange={toggleColorMode}
    inputProps={{
    'aria-labelledby': 'switch-list-label-dark-mode',
    }}
    />
  )
}

export default DarkModeSwitch;
