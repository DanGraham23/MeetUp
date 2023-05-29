import { TextField } from "@mui/material"
import {useField} from 'formik';

function FormTextField({name, ...otherProps}) {

  const [field, meta] = useField(name);

  const configFormTextField = {
    ...field,
    ...otherProps,
    fullWidth: true,
  }

  if (meta && meta.touched && meta.error){
    configFormTextField.error = true;
    configFormTextField.helperText = meta.error;
  }

  return (
    <TextField {...configFormTextField}/>
  )
}

export default FormTextField;
