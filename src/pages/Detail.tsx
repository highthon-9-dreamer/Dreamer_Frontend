import { Viewer } from "@toast-ui/react-editor";
import { useContentsDetail } from "../api/contents";
import {
  Avatar,
  Box,
  Divider,
  Stack,
  Typography,
  createSvgIcon,
} from "@mui/material";
import { ArrowForwardIosSharp } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import { useEffect } from "react";

const DetailPage = () => {
  const { id: Id } = useParams();
  const { data: contentsDetail } = useContentsDetail(Id as unknown as number);

  const FlugIcon = createSvgIcon(
    <svg
      width="86"
      height="40"
      viewBox="0 0 86 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M86 0H0V40H86L66.5806 19.2593L86 0Z" fill="#9896F1" />
    </svg>,
    "Flug"
  );

  return (
    <Stack gap={2}>
      <Stack gap={1}>
        <Box display={"flex"} alignItems={"center"}>
          <Typography variant="body1" color={"#9896F1"}>
            {contentsDetail?.SeriesTitle}
          </Typography>
          <ArrowForwardIosSharp sx={{ fontSize: 16, color: "#9896F1" }} />
        </Box>

        <Box display={"flex"} alignItems={"center"} gap={1}>
          <Box position={"relative"}>
            <Typography
              variant="caption"
              top={8}
              left={4}
              color={"#FFFFFF"}
              position={"absolute"}
            >
              {contentsDetail?.Number}화
            </Typography>
            <FlugIcon fontSize="large" />
          </Box>

          <Typography variant="h6">{contentsDetail?.Title}</Typography>
        </Box>
      </Stack>

      <Box display={"flex"} gap={1} alignItems={"center"}>
        <Avatar src={contentsDetail?.CreatedBy.Profile} />

        <Box>
          <Typography variant="body1">
            {contentsDetail?.CreatedBy.Name}
          </Typography>
          <Typography variant="body2" color={"GrayText"}>
            2024.02.18
          </Typography>
        </Box>
      </Box>
      <Divider />

      <Viewer
        key={contentsDetail?.Description}
        initialValue={contentsDetail?.Description}
      />
    </Stack>
  );
};

export default DetailPage;
