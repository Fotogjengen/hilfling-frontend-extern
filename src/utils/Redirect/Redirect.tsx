import React, { FC } from "react";

interface Props {
  link: string;
}

const Redirect: FC<Props> = ({ link }: Props) => {
  window.location.replace(link);
  return <div>Redirecting...</div>;
};

export default Redirect;
