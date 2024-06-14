import { TextField } from '@mui/material';
import { useField } from 'formik';

function FormTimePicker({ name, ...otherProps }) {
  const [field, meta] = useField(name);

  const configFormTimePicker = {
    ...otherProps,
    ...field,
    type: 'time',
    fullWidth: true,
    InputLabelProps: {
      shrink: true,
    },
  };

  if (meta && meta.touched && meta.error) {
    configFormTimePicker.error = true;
    configFormTimePicker.helperText = meta.error;
  }

  return <TextField {...configFormTimePicker} />;
}

export default FormTimePicker;
