import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Popover,
  Typography,
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

import { useField, useFormikContext } from 'formik';
import { useState } from 'react';

function FormTosCheckbox({ name, label, legend, ...otherProps }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [field, meta] = useField(name);
  const { setFieldValue } = useFormikContext();

  function handleChange(e) {
    const { checked } = e.target;
    setFieldValue(name, checked);
  }

  const configFormTosCheckbox = {
    ...otherProps,
    ...field,
    onChange: handleChange,
  };

  const handlePopoverOpen = () => {
    setAnchorEl(tos);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const isPopoverOpen = Boolean(anchorEl);

  const configFormControl = {};

  if (meta && meta.touched && meta.error) {
    configFormControl.error = true;
  }

  return (
    <>
      <FormControl {...configFormControl}>
        <FormLabel component="legend" style={{ display: 'flex', gap: '5px' }}>
          {legend}
          <InfoIcon onClick={handlePopoverOpen} style={{ cursor: 'pointer' }} />
        </FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox {...configFormTosCheckbox} id="tos" />}
            label={label}
          />
        </FormGroup>
      </FormControl>
      <Popover
        open={isPopoverOpen}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography style={{ padding: '10px' }}>
          I will abide by the meeting time that I have chosen. Otherwise, I will
          let the meeting host know to cancel as early as possible.
        </Typography>
      </Popover>
    </>
  );
}

export default FormTosCheckbox;
