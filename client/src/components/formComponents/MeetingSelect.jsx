import { TextField, MenuItem } from "@mui/material"
import { useField, useFormikContext } from "formik"


function MeetingSelect({name, options, ...otherProps}) {

    const {setFieldValue} = useFormikContext();
    const [field, meta] = useField(name);

    function handleChange(e) {
        const {value} = e.target;
        setFieldValue(name, value);
    }

    const configMeetingSelect = {
        ...field,
        ...otherProps,
        select: true,
        variant: 'outlined',
        fullWidth:true,
        onChange: handleChange,
    }

    if (meta && meta.touched && meta.error){
        configMeetingSelect.error = true;
        configMeetingSelect.helperText = meta.error;
    }

  return (
    <TextField 
    {...configMeetingSelect}
    >
    {Object.keys(options).map((option, idx) => {
        return (
            <MenuItem key={idx} value={option}>
                {options[option]}
            </MenuItem>
        )
    })}
    </TextField>
  )
}

export default MeetingSelect