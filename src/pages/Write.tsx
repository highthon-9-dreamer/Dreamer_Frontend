import "@toast-ui/editor/dist/toastui-editor.css";
import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import "@toast-ui/editor/dist/i18n/ko-kr";
import { Editor } from "@toast-ui/react-editor";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
import AddIcon from "@mui/icons-material/Add";
import { useRef, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useSeriesList, useWriteContents } from "../api/contents";
import { ArrowForward } from "@mui/icons-material";

const WritePage = () => {
  const [isNewSeries, setIsNewSeries] = useState(false);
  const editorRef = useRef<Editor>(null);

  //const { data: seriesList } = useSeriesList();
  const { mutate: contentsMutate } = useWriteContents();

  const { handleSubmit, register, getValues } = useForm();

  const onClickSubmit = () => {
    const { Title } = getValues();
    contentsMutate({
      Title: Title,
      Description: editorRef.current?.getInstance().getMarkdown() || "",
      SeriesTitle: "시리즈 제목",
      SeriesId: null,
    });
  };

  return (
    <Stack gap={2}>
      {isNewSeries ? (
        <FormControl fullWidth>
          <TextField
            {...register("SeriesTitle")}
            label="새로운 시리즈 이름을 입력해주세요."
          />
          <Box display={"flex"} justifyContent={"end"}>
            <Button
              size="small"
              endIcon={<ArrowForward />}
              onClick={() => setIsNewSeries(false)}
            >
              기존 시리즈에서 선택하기
            </Button>
          </Box>
        </FormControl>
      ) : (
        <FormControl fullWidth>
          <InputLabel>시리즈를 선택해주세요.</InputLabel>
          <Select label="시리즈를 선택해주세요.">
            <MenuItem onClick={() => setIsNewSeries(true)}>
              <Button startIcon={<AddIcon />}>새로 만들기</Button>
            </MenuItem>
            {/* {seriesList?.SeriesList.map((series) => (
              <MenuItem>{series.Title}</MenuItem>
            ))} */}
          </Select>
        </FormControl>
      )}

      <FormControl fullWidth>
        <TextField
          {...register("Title", {
            required: "title is required",
          })}
          label="제목을 입력해주세요."
        />
      </FormControl>

      <Editor
        plugins={[colorSyntax, codeSyntaxHighlight]}
        placeholder="당신의 이야기를 적어보세요."
        height="auto"
        minHeight="400px"
        initialEditType="wysiwyg"
        initialValue=" "
        toolbarItems={[
          ["heading", "bold", "italic", "strike"],
          ["hr", "quote"],
          ["ul", "ol", "task"],
          ["table", "image", "link"],
          ["scrollSync"],
        ]}
        language="ko-KR"
        hideModeSwitch={true}
        ref={editorRef}
      />

      <Box display={"flex"} justifyContent={"end"}>
        <Button onClick={handleSubmit(onClickSubmit)} variant="contained">
          작성 완료
        </Button>
      </Box>
    </Stack>
  );
};

export default WritePage;
