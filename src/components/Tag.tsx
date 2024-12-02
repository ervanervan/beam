import React, { HTMLAttributes } from "react";

export default function Tag(props: HTMLAttributes<HTMLDivElement>) {
  const { children } = props;
  return (
    <div className="inline-flex border bg-secondary-50 border-secondary-300 rounded-[10px] gap-2 text-text-purple1 px-2.5 py-2 items-center">
      <span className="text-sm">{children}</span>
    </div>
  );
}
