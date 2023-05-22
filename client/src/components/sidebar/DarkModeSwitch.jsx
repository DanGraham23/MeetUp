import { Switch } from "@mui/material";


function DarkModeSwitch() {
  return (
    <Switch
    edge="end"
    onChange={() => console.log("toggled")}
    inputProps={{
    'aria-labelledby': 'switch-list-label-dark-mode',
    }}
    />
  )
}

export default DarkModeSwitch;
