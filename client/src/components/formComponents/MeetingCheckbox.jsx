import { 
    Checkbox, 
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel

} from "@mui/material";

import { useField, useFormikContext } from "formik";

function MeetingCheckbox({
    name,
    label,
    legend,
    ...otherProps
}) {

    const [field, meta] = useField(name);
    const {setFieldValue} = useFormikContext();
    function handleChange(e){
        const {checked} = e.target
        setFieldValue(name, checked)
    }

    const configMeetingCheckbox = {
        ...otherProps,
        ...field,
        onChange: handleChange,
    };

    const configFormControl = {}

    if (meta && meta.touched && meta.error){
        configFormControl.error = true;
    }

  return (
    <FormControl {...configFormControl}>
        <FormLabel component='legend'>{legend}</FormLabel>
        <FormGroup>
            <FormControlLabel
            control={<Checkbox {...configMeetingCheckbox}/>}
            label={label}
            />
        </FormGroup>
    </FormControl>
  )
}

export default MeetingCheckbox;
