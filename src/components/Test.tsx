import React, { useState, useEffect } from "react";
import { getTest } from "../utils/api/api";
import { CardTitle, Button } from "hilfling-gui/lib";

const Test = (props: any) => {
  const [test, setTest] = useState("");

  useEffect(() => {
    getTest().then(setTest);
  }, []);

  useEffect(() => {
    console.log(test);
  }, [test]);

  return (
    <div>
      Hello Hilflinger! {test} <CardTitle title="fuck yes" />
      <Button label="hei" />
    </div>
  );
};

export default Test;
