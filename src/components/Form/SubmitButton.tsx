import React from "react";
import { Button, ButtonProps } from "@mui/material";
import { withStyles, WithStyles, createStyles } from "@mui/styles";
import cn from "classnames";
import { useForm } from "./Form";
import { isEmpty } from "lodash";

interface Props {
  children: string;
  float?: "right" | "left";
  disabled?: boolean;
}

const styles = () =>
  createStyles({
    floatLeft: {
      float: "left",
    },
    floatRight: {
      float: "right",
    },
  });

const SubmitButton = ({
  classes,
  float,
  children,
  onClick,
  disabled = true,
  variant
}: Props & ButtonProps & WithStyles<typeof styles>) => {
  const { errors } = useForm();
  return (
    <Button
      color="primary"
      className={cn({
        [classes.floatLeft]: float === "left",
        [classes.floatRight]: float === "right",
      })}
      type="button"
      variant={variant}
      disabled={(!isEmpty(errors) && disabled)}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default withStyles(styles)(SubmitButton);
