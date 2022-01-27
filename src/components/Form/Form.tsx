import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useState,
} from "react";
import { FormContext, FormProps } from "./types";
import { Grid } from "@mui/material";
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
  submitButtonColor,
  submitButtonDisabled,
  submitButtonText = "Last opp",
  children,
}) => {
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
    onSubmit(values);
    setValues(initialValues);
  };

  return (
    <Context.Provider
      value={{
        values,
        errors,
        onChange,
      }}
    >
      <form onKeyDown={(e) => e.key !== "Enter"}>
        {children}
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <SubmitButton
              disabled={submitButtonDisabled}
              backgroundColor={submitButtonColor}
              onClick={(e) => _onSubmit(e)}
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
