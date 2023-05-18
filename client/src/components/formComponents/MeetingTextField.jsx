import { TextField } from "@mui/material"
import {useField} from 'formik';

function MeetingTextField({name, ...otherProps}) {

  const [field, meta] = useField(name);

  const configMeetingTextField = {
    ...field,
    ...otherProps,
    fullWidth: true,
    variant: 'outlined',
  }

  if (meta && meta.touched && meta.error){
    configMeetingTextField.error = true;
    configMeetingTextField.helperText = meta.error;
  }

  return (
    <TextField {...configMeetingTextField}/>
  )
}

export default MeetingTextField;
