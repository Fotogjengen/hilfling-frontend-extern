import { FieldRenderProps } from "react-final-form";
import { FormControlProps } from "@material-ui/core";

export interface FormHelperTextWrapperProps<T> extends FieldRenderProps<T> {
  label: string;
  formControlProps: FormControlProps;
}

export type FormFieldProps<T> = Omit<
  T,
  "onChange" | "name" | "error" | "onBlur" | "value"
> & {
  name: string;
  label: string;
};

export type OnChange<T = string> = (fieldName: string, value: T | null) => void;

export type Validate<T extends { [key: string]: any } = {}> = (
  fields: T,
) => { [k in keyof T]?: string };

export type Errors<T extends { [key: string]: any } = {}> = {
  [k in string | keyof T]?: string | null;
};

export interface FormContext {
  values: { [fieldName: string]: any };
  errors: { [fieldName: string]: string | undefined };
  onChange: (fieldName: string, value: any) => void;
}

export interface FormProps {
  initialValues: any;
  validate: Validate<any>;
  onSubmit: (values: any) => boolean | void;
}
