import React, { useEffect, useState } from "react";

import { Box, Stack, Typography } from "@mui/material";

import { MotiveDto } from "../../../../generated";
import { MotiveApi } from "../../../utils/api/MotiveApi";
import ShowGoodMotive from "../../../components/ImageViewer/ShowGoodMotive";

const Expo = () => {
  const [motiveResponse, setMotiveResponse] = useState<MotiveDto[]>([]);

  const motiveItems = motiveResponse.map((motive: MotiveDto, index: number) => {
    return <ShowGoodMotive key={index} id={motive.motiveId.id} index={index} />;
  });

  useEffect(() => {
    // TODO: Fix response type
    MotiveApi.getAll()
      .then((res) => setMotiveResponse(res.data.currentList))
      .catch((e) => console.log(e));
  }, []);

  return (
    <Box sx={{ p: "1rem", bgcolor: "white" }}>
      <Stack spacing={1}>
        <Typography
          sx={{
            width: "100%",
            pb: "0.5rem",
            mb: "0.5rem",
            textAlign: "center",
            fontSize: 28,
            borderBottom: "0.1rem solid black",
          }}
        >
          Bra bilder!!
        </Typography>
        {motiveItems}
      </Stack>
    </Box>
  );
};

export default Expo;
