import { Button } from "@mui/material";
import {useFormikContext} from 'formik';

function MeetingSubmitButton({children, ...otherProps}) {

    const {submitForm} = useFormikContext();

    function handleSubmit(){
        submitForm();
    }

    const configMeetingSubmitButton = {
        ...otherProps,
        variant:'contained',
        fullWidth:true,
        onClick:handleSubmit,
    }

  return (
    <Button 
    {...configMeetingSubmitButton}
    >
        {children}
    </Button>
  )
}

export default MeetingSubmitButton;
