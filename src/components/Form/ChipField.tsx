import React, {
  FC,
  Fragment,
  useState,
  ReactElement,
  KeyboardEvent,
  ChangeEvent,
} from "react";
import {
  Chip,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
} from "@material-ui/core";
import { FormHelperTextWrapperProps } from "./types";

const ChipField: FC<FormHelperTextWrapperProps<typeof Input>> = ({
  input: { name, onChange, restInput, value },
  meta,
  formControlProps,
  label,
  ...rest
}) => {
  const [chips, setChips] = useState<string[]>(["caro", "schmaro"]);
  const [interimValue, setInterimValue] = useState<string>("");

  const onChangeInterimValue = (event: ChangeEvent) => {
    setInterimValue((event.target as HTMLTextAreaElement).value);
    console.log(onChange);
  };

  const addChip = (event: KeyboardEvent) => {
    if (
      event.key === " " &&
      !chips.includes(interimValue.trim()) &&
      interimValue.trim() !== ""
    ) {
      setChips([interimValue.trim(), ...chips]);
      setInterimValue("");
    } else if (
      interimValue.trim() === "" ||
      chips.includes(interimValue.trim())
    ) {
      setInterimValue("");
    }
  };

  const handleDelete = (chipToDelete: string) => {
    const newChips = chips.filter((chip) => chip !== chipToDelete);
    setChips(newChips);
  };

  const chipRenderer: ReactElement[] = chips.map(
    (chip: string, index: number) => {
      return (
        <Chip
          key={`chip-${index}`}
          label={chip}
          onDelete={() => handleDelete(chip)}
          size="small"
        />
      );
    },
  );

  return (
    <Fragment>
      {chips && chipRenderer}
      <FormControl {...formControlProps}>
        <InputLabel htmlFor={name}>{label}</InputLabel>
        <Input
          {...rest}
          onChange={onChangeInterimValue}
          name={name}
          inputProps={restInput}
          onKeyDown={addChip}
          value={interimValue}
        />
        {meta.error && <FormHelperText>{meta.error}</FormHelperText>}
      </FormControl>
    </Fragment>
  );
};

export default ChipField;
