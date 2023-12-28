import { EmojiNode } from "./nodes/EmojiNode";
// import ExampleTheme from "./themes/ExampleTheme";

const exampleTheme = {
  ltr: "ltr",
  rtl: "rtl",
  placeholder: "editor-placeholder",
  paragraph: "editor-paragraph",
};

const editorConfig = {
  theme: exampleTheme,
  namespace: "editor",
  onError(error) {

    throw error;
  },
  nodes: [EmojiNode],
};

export default editorConfig;
