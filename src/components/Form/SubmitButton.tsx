import React from "react";
import { Fab, FabProps } from "@mui/material";
import { withStyles, WithStyles, createStyles } from "@mui/styles";
import cn from "classnames";
import { useForm } from "./Form";
import { isEmpty } from "lodash";

interface Props {
  children: string;
  float?: "right" | "left";
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

const SubmitButton = (props: Props & FabProps & WithStyles<typeof styles>) => {
  const { classes, float, children, onClick } = props;
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
      disabled={!isEmpty(errors)}
      onClick={onClick}
    >
      {children}
    </Fab>
  );
};

export default withStyles(styles)(SubmitButton);
