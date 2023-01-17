import React, { ComponentType, FC } from "react";
import { Route, RouteProps } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";

type Props = RouteProps & {
  element: ComponentType<any>;
}

const ProtectedRoute: FC<Props> = ({ element, ...args }) => (
  <Route element={withAuthenticationRequired(element)} {...args} />
);

export default ProtectedRoute;
