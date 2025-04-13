import CodeInput from "@/components/CodeInput";
import React, { JSX } from "react";

export default function fixCode(): JSX.Element {
  return (
    <main className="md:mt-40 mt-30 space-y-28">
      <CodeInput />
    </main>
  );
}
