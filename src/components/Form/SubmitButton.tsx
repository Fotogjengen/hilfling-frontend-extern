import React from "react";
import {
  createStyles,
  WithStyles,
  Fab,
  FabProps,
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
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
  const { classes, float, children, onClick, ...rest } = props;
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
      {...rest}
      disabled={!isEmpty(errors)}
      onClick={onClick}
    >
      {children}
    </Fab>
  );
};

export default withStyles(styles)(SubmitButton);
