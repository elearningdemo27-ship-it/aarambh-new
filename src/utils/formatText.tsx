import React from "react";

export function renderHighlightedText(text: string) {
  if (!text) return null;

  return text.split(/(\*\*[^*]+\*\*)/g).map((chunk, i) => {
    if (chunk.startsWith("**") && chunk.endsWith("**")) {
      return (
        <span key={i} className="text-primary font-semibold">
          {chunk.slice(2, -2)}
        </span>
      );
    }
    return <span key={i}>{chunk}</span>;
  });
}