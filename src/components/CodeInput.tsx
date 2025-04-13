import React, { JSX } from "react";

export default function CodeInput(): JSX.Element {
  return (
    <div>
      <textarea
        className="border border-[#171717] rounded-3xl w-full bg-[#171717]/20 p-6 focus:outline-0 text-white"
        rows={20}
      />
    </div>
  );
}
