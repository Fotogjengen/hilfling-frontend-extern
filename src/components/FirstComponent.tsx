import React, { useState, useEffect } from "react";
import { getTest } from "../utils/api/api";
import { Button, Card } from "hilfling-gui/lib";
import styles from "hilfling-gui/lib/styles/utilities.module.css";

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

  return (
    <div className={styles.contentContainer}>
      Hello Hilflinger! {test}
      <div>
        <Button primary>Klikk meg</Button>
        <Card type="uka">hei på deg</Card>
      </div>
    </div>
  );
};

export default FirstComponent;
