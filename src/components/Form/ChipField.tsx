import React, { FC, Fragment } from "react";
import { FieldRenderProps } from "react-final-form";
import { Chip, Input } from "@material-ui/core";

const ChipField: FC<FieldRenderProps<typeof Input>> = ({
  input: { name, onChange, restInput, multiple, value },
  meta,
  ...rest
}) => {
  const addChip = () => {
    console.log("Add chip");
    console.log(value);
  };
  return (
    <Fragment>
      <Input
        {...rest}
        onChange={onChange}
        name={name}
        inputProps={restInput}
        onKeyDown={addChip}
      />
    </Fragment>
  );
};

export default ChipField;
