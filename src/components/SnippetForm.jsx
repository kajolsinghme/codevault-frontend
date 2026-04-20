import React, { useState } from 'react';
import { createSnippet } from "../services/api";

const SnippetForm = ({ refresh }) => {
  const [formData, setFormData] = useState({
    title: '', language: '', tags: '', code: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.code) return;

    try {
      await createSnippet({
        ...formData,
        tags: formData.tags
          .split(',')
          .map(tag => tag.trim())
          .filter(tag => tag !== '')
      });
      console.log("snippet created successfully")

      setFormData({ title: '', language: '', tags: '', code: '' });
      refresh();

    } catch (err) {
      console.error(err);
    }
  };

  const inputClass = "w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm";

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            placeholder="Title"
            value={formData.title}
            onChange={(e) => setFormData({...formData, title: e.target.value})}
            className={inputClass}
          />

          <input
            placeholder="Language"
            value={formData.language}
            onChange={(e) => setFormData({...formData, language: e.target.value})}
            className={inputClass}
          />
        </div>

        <input
          placeholder="Tags (comma separated)"
          value={formData.tags}
          onChange={(e) => setFormData({...formData, tags: e.target.value})}
          className={inputClass}
        />

        <textarea
          placeholder="Code..."
          rows="5"
          value={formData.code}
          onChange={(e) => setFormData({...formData, code: e.target.value})}
          className={`${inputClass} font-mono text-xs`}
        />

        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl cursor-pointer">
          Save Snippet
        </button>

      </form>
    </div>
  );
};

export default SnippetForm;