import React, { useState, useEffect } from "react";
import { MotiveDto } from "../../../../generated";
import { MotiveApi } from "../../../utils/api/MotiveApi";

/*
[]

*/

const Motives = () => {
  const [motives, setMotives] = useState<MotiveDto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    MotiveApi.getAll()
      .then((res) => setMotives(res.data.currentList))
      .catch((e) => console.log(e));
  }, []);



  return <div>Motives</div>;
};

export default Motives;
