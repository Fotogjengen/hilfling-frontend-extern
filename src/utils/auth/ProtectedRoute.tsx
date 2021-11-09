import React, { ComponentType } from "react";
import { Route, RouteProps } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";


interface Props extends RouteProps {
  component: ComponentType<any>;
}

const ProtectedRoute = ({ component, ...args }: Props) => (
  <Route component={withAuthenticationRequired(component)} {...args} />
);

export default ProtectedRoute;
