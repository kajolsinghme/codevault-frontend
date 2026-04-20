import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-css";
import "prismjs/components/prism-json";

const SnippetList = ({ snippets, onDelete }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [snippets]);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  const getLanguage = (lang) => {
    if (!lang) return "javascript";

    const l = lang.toLowerCase();

    if (l.includes("js")) return "javascript";
    if (l.includes("react")) return "jsx";
    if (l.includes("css")) return "css";
    if (l.includes("json")) return "json";

    return "javascript";
  };

  if (snippets.length === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-slate-300">
        <p className="text-slate-400 font-medium">No snippets found</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {snippets.map((snippet) => (
        <div
          key={snippet._id}
          className="bg-white rounded-2xl border border-slate-200 p-5 hover:shadow-md transition-shadow group"
        >
          <div className="flex justify-between items-start mb-3">
            <div>
              <h3 className="font-bold text-slate-800">{snippet.title}</h3>
              <p className="text-xs text-blue-500 font-semibold mt-1 uppercase">
                {snippet.language}
              </p>
            </div>

            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                onClick={() => copyToClipboard(snippet.code)}
                className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                title="Copy"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16h8M8 12h8m-6-8h6a2 2 0 012 2v12a2 2 0 01-2 2H8a2 2 0 01-2-2V6a2 2 0 012-2z"
                  />
                </svg>
              </button>

              <button
                onClick={() => onDelete(snippet._id)}
                className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg"
              >
                🗑
              </button>
            </div>
          </div>

          <div className="mb-4 flex flex-wrap gap-1.5">
            {snippet.tags?.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-[10px] uppercase"
              >
                {tag}
              </span>
            ))}
          </div>

          <pre className="bg-slate-900 text-sm rounded-xl overflow-x-auto p-4">
            <code className={`language-${getLanguage(snippet.language)}`}>
              {snippet.code}
            </code>
          </pre>
        </div>
      ))}
    </div>
  );
};

export default SnippetList;
