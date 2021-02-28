export type OnChange<T = string> = (fieldName: string, value: T | null) => void;

export type Validate<
  T extends { [key: string]: unknown } = Record<string, never>
> = (fields: T) => { [k in keyof T]?: string };

export type Errors<
  T extends { [key: string]: unknown } = Record<string, never>
> = {
  [k in string | keyof T]?: string | null;
};
