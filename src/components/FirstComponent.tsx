import React, { useState, useEffect } from "react";
import { getTest } from "../utils/api/api";

interface ComponentProps {
  test: string;
}

interface ReduxProps {
  testRedux: string;
}

type Props = ComponentProps & ComponentProps;

const FirstComponent: React.FC<Props> = (props: Props) => {
  const [test, setTest] = useState<string>("");

  useEffect(() => {
    getTest().then(setTest);
  }, []);

  useEffect(() => {
    console.log(test);
  }, [test]);

  return <div>Hello Hilflinger! {test}</div>;
};

export default FirstComponent;
