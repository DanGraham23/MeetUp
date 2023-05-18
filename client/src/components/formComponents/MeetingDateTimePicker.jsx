import { TextField } from "@mui/material";
import { useField } from "formik";

function MeetingDateTimePicker({name, ...otherProps}) {

    const [field, meta] = useField(name);

    const configMeetingDateTimePicker = {
        ...field,
        ...otherProps,
        type: 'date',
        variant: 'outlined',
        fullWidth: true,
        InputLabelProps: {
            shrink:true,
        }
    }

    if (meta && meta.touched && meta.error){
        configMeetingDateTimePicker.error = true;
        configMeetingDateTimePicker.helperText = meta.error;
    }

  return (
    <TextField {...configMeetingDateTimePicker}>

    </TextField>
  )
}

export default MeetingDateTimePicker;
