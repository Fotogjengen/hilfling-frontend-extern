import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useState,
} from "react";
import { FormContext, FormProps } from "./types";
import { Grid, Alert, Snackbar } from "@mui/material";
import SubmitButton from "./SubmitButton";

const Context = createContext<FormContext>({
  values: {},
  errors: {},
  onChange: () => null,
});

export const useForm = (): FormContext => useContext<FormContext>(Context);

const Form: FC<FormProps> = ({
  initialValues,
  validate,
  onSubmit,
  submitButtonDisabled,
  submitButtonText = "Last opp",
  variant = "contained",
  children,
}) => {
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [alert, setAlert] = useState<string>("");
  const [alertSeverity, setAlertSeverity] = useState<
    "error" | "info" | "warning" | "success"
  >("success");
  const [values, setValues] = useState<FormContext["values"]>(initialValues);
  const [errors, setErrors] = useState<FormContext["errors"]>({});

  const validateFields = () => {
    setErrors(validate(values));
  };
  useEffect(() => validateFields(), [values]);

  const onChange = (fieldName: string, value: any) => {
    if (!Object.keys(initialValues).includes(fieldName)) {
      throw new Error(
        "The field that you changed is not registered in the initialValues prop",
      );
    }
    setValues((formValues) => ({
      ...formValues,
      [fieldName]: value,
    }));
  };

  const _onSubmit = (e: any) => {
    e.preventDefault();
    return onSubmit(values).then((res) => {
      if (res == true) {
        setAlert("Suksess! :)");
        setShowAlert(true);
        setAlertSeverity("success");
      } else if (res == false) {
        setAlert("Noe gikk feil. :(");
        setShowAlert(true);
        setAlertSeverity("error");
      } else {
        setShowAlert(false);
      }
    });
    //setValues(initialValues);
  };

  return (
    <Context.Provider
      value={{
        values,
        errors,
        onChange,
      }}
    >
      {showAlert && (
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={showAlert}
          autoHideDuration={6000}
          onClose={() => setShowAlert(false)}
          sx={{
            width: "50%"
          }}
        >
          <Alert
            severity={alertSeverity}
            sx={{
              width: "100%",
            }}
            onClose={() => setShowAlert(false)}
          >
            {alert}
          </Alert>
        </Snackbar>
      )}
      <form onKeyDown={(e) => e.key !== "Enter"}>
        {children}
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <SubmitButton
              disabled={submitButtonDisabled}
              onClick={(e) => _onSubmit(e)}
              variant={variant}
            >
              {submitButtonText}
            </SubmitButton>
          </Grid>
        </Grid>
      </form>
    </Context.Provider>
  );
};

export default Form;
