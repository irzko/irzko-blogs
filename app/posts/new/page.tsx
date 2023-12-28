"use client";
import dynamic from "next/dynamic";
const Editor = dynamic(() => import("@/components/editor"), { ssr: false });
// import Editor from "@/components/editor";
import { SharedHistoryContext } from "@/components/editor/context/SharedHistoryContext";
import PlaygroundNodes from "@/components/editor/nodes/PlaygroundNodes";
import PlaygroundEditorTheme from "@/components/editor/themes/PlaygroundEditorTheme";
import { LexicalComposer } from "@lexical/react/LexicalComposer";

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
          <div className="max-w-screen-lg mx-auto">
            <Editor />
          </div>
        </SharedHistoryContext>
      </LexicalComposer>
    </main>
  );
}
