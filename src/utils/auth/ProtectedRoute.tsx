import React, { ComponentType, FC } from "react";
import { Route, RouteProps } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";

interface Props extends RouteProps {
  component: ComponentType<any>;
}

const ProtectedRoute: FC<Props> = ({ component, ...args }) => (
  <Route
    component={withAuthenticationRequired(component)}
    {...args}
  />
);

export default ProtectedRoute;
