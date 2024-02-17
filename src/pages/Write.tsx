import "@toast-ui/editor/dist/toastui-editor.css";
import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import "@toast-ui/editor/dist/i18n/ko-kr";
import { Editor } from "@toast-ui/react-editor";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
import { useRef } from "react";
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

const WritePage = () => {
  const editorRef = useRef<Editor>(null);

  return (
    <Stack gap={2}>
      <FormControl fullWidth>
        <InputLabel>시리즈를 선택해주세요.</InputLabel>
        <Select label="시리즈를 선택해주세요.">
          <MenuItem>새로 만들기</MenuItem>
          <MenuItem>내가 만든 시리즈1</MenuItem>
          <MenuItem>내가 만든 시리즈2</MenuItem>
          <MenuItem>내가 만든 시리즈3</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <TextField label="제목을 입력해주세요." />
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
        <Button variant="contained">작성 완료</Button>
      </Box>
    </Stack>
  );
};

export default WritePage;
