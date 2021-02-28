import { Validate } from "../Field/types";

export interface FormContext {
  values: { [fieldName: string]: unknown };
  errors: { [fieldName: string]: string | undefined };
  onChange: (fieldName: string, value: unknown) => void;
}

export interface FormProps {
  initialValues: Record<string, unknown>;
  validate: Validate<Record<string, unknown>>;
  onSubmit: (values: unknown) => void;
}
