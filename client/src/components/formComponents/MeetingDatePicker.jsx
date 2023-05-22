import { TextField } from "@mui/material";
import { useField } from "formik";

function MeetingDatePicker({name, ...otherProps}) {

    const [field, meta] = useField(name);

    const configMeetingDatePicker = {
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
      configMeetingDatePicker.error = true;
      configMeetingDatePicker.helperText = meta.error;
    }

  return (
    <TextField {...configMeetingDatePicker}>

    </TextField>
  )
}

export default MeetingDatePicker;
