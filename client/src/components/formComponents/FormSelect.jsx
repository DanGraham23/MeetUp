import { TextField, MenuItem } from '@mui/material';
import { useField, useFormikContext } from 'formik';

function FormSelect({ name, options, ...otherProps }) {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  function handleChange(e) {
    const { value } = e.target;
    setFieldValue(name, value);
  }

  const configFormSelect = {
    ...field,
    ...otherProps,
    select: true,
    fullWidth: true,
    onChange: handleChange,
  };

  if (meta && meta.touched && meta.error) {
    configFormSelect.error = true;
    configFormSelect.helperText = meta.error;
  }

  return (
    <TextField {...configFormSelect}>
      {Object.keys(options).map((option, idx) => {
        return (
          <MenuItem key={idx} value={option}>
            {options[option]}
          </MenuItem>
        );
      })}
    </TextField>
  );
}

export default FormSelect;
