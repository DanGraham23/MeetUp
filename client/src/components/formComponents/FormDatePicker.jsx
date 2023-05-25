import { TextField } from "@mui/material";
import { useField } from "formik";

function FormDatePicker({name, ...otherProps}) {

    const [field, meta] = useField(name);

    const configFormDatePicker = {
        ...field,
        ...otherProps,
        type: 'date',
        variant: 'outlined',
        fullWidth: true,
        InputLabelProps: {
            shrink:true,
        },
    }

    if (meta && meta.touched && meta.error){
      configFormDatePicker.error = true;
      configFormDatePicker.helperText = meta.error;
    }

  return (
    <TextField {...configFormDatePicker}>

    </TextField>
  )
}

export default FormDatePicker;
