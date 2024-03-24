"use client";
import dynamic from "next/dynamic";
const Editor = dynamic(() => import("@/components/editor"), { ssr: false });
import { SharedHistoryContext } from "@/components/editor/context/SharedHistoryContext";
import PlaygroundNodes from "@/components/editor/nodes/PlaygroundNodes";
import PlaygroundEditorTheme from "@/components/editor/themes/PlaygroundEditorTheme";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { $generateHtmlFromNodes } from "@lexical/html";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

const SavePost = () => {
  const [editor] = useLexicalComposerContext();
  const handleSubmit = () => {
    editor.update(() => {
      const htmlString = $generateHtmlFromNodes(editor);
      console.log(htmlString);
    });
  };
  return (
    <button className="bg-black" onClick={handleSubmit}>
      Save
    </button>
  );
};

export default function Home() {
  const initialConfig = {
    namespace: "Playground",
    nodes: [...PlaygroundNodes],
    onError: (error: Error) => {
      throw error;
    },
    theme: PlaygroundEditorTheme,
  };

  return (
    <main>
      <LexicalComposer initialConfig={initialConfig}>
        <SharedHistoryContext>
          <div className="editor-shell">
            <Editor />
            <SavePost />
          </div>
        </SharedHistoryContext>
        {/* <MyOnChangePlugin onChange={onChange} /> */}
      </LexicalComposer>
    </main>
  );
}
