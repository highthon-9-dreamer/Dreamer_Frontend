import "@toast-ui/editor/dist/toastui-editor.css";
import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import "@toast-ui/editor/dist/i18n/ko-kr";
import { Editor } from "@toast-ui/react-editor";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
import styled from "styled-components";

function App() {
  return (
    <Editor
      plugins={[colorSyntax, codeSyntaxHighlight]}
      placeholder="당신의 이야기를 적어보세요."
      height="auto"
      minHeight="600px"
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
    />
  );
}

// const CustomEditor = styled(Editor)`
//   .toastui-editor-toolbar {
//     position: fixed !important;
//     bottom: 0;
//   }
// `;

export default App;
