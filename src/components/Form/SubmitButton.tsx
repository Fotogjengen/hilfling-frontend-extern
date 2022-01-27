import React from "react";
import { Fab, FabProps } from "@mui/material";
import { withStyles, WithStyles, createStyles } from "@mui/styles";
import cn from "classnames";
import { useForm } from "./Form";
import { isEmpty } from "lodash";

interface Props {
  children: string;
  float?: "right" | "left";
  backgroundColor?: string;
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
  backgroundColor = "#7793DA",
  disabled = false,
}: Props & FabProps & WithStyles<typeof styles>) => {
  const { errors } = useForm();
  return (
    <Fab
      color="primary"
      variant="extended"
      className={cn({
        [classes.floatLeft]: float === "left",
        [classes.floatRight]: float === "right",
      })}
      type="button"
      disabled={!isEmpty(errors) || disabled}
      onClick={onClick}
      sx={{
        backgroundColor: backgroundColor,
      }}
    >
      {children}
    </Fab>
  );
};

export default withStyles(styles)(SubmitButton);
