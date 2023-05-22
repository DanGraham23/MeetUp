import { TextField } from "@mui/material";
import { useField} from "formik";

function MeetingTimePicker({name, ...otherProps}) {

    const [field, meta] = useField(name);

    const configMeetingTimePicker = {
        ...otherProps,
        ...field,
        variant:'outlined',
        type:'time',
        fullWidth: true,
        InputLabelProps: {
            shrink:true,
        },
    }

    if (meta && meta.touched && meta.error){
        configMeetingTimePicker.error = true;
        configMeetingTimePicker.helperText = meta.error;
    }

  return (
    <TextField 
    {...configMeetingTimePicker}
    />
  )
}

export default MeetingTimePicker;
