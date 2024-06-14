import { Button } from '@mui/material';
import { useFormikContext } from 'formik';

function FormSubmitButton({ children, ...otherProps }) {
  const { submitForm } = useFormikContext();

  function handleSubmit() {
    submitForm();
  }

  const configFormSubmitButton = {
    ...otherProps,
    variant: 'contained',
    fullWidth: true,
    onClick: handleSubmit,
  };

  return <Button {...configFormSubmitButton}>{children}</Button>;
}

export default FormSubmitButton;
