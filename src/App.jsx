import React, { useState, useEffect  } from 'react';
import SearchBar from './components/SearchBar';
import SnippetForm from './components/SnippetForm';
import SnippetList from './components/SnippetList';
import { getSnippets, searchSnippets, deleteSnippet } from './services/api';

const App = () => {
  const [snippets, setSnippets] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchSnippets = async () => {
    const res = await getSnippets();
    setSnippets(res.data);
  };

 useEffect(() => {
  const loadSnippets = async () => {
    await fetchSnippets();
  };

  loadSnippets();
}, []);

const handleSearch = async (query) => {
  setSearchQuery(query);

  if (!query) {
    return fetchSnippets(); // get all
  }

  try {
    const res = await searchSnippets(query);
    setSnippets(res.data);
  } catch (err) {
    console.error(err);
  }
};

  const handleDelete = async (id) => {
    await deleteSnippet(id);
    fetchSnippets();
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-20">
      <header className="bg-white border-b border-slate-200 py-6 mb-8">
        <div className="max-w-3xl mx-auto px-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight text-blue-600">
            Code<span className="text-slate-800">Vault</span>
          </h1>
          <span className="text-xs font-medium bg-blue-50 text-blue-600 px-2 py-1 rounded-full uppercase tracking-wider">
            Dev Tools
          </span>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 space-y-8">
        <section className="space-y-4">
          <SearchBar searchQuery={searchQuery} onSearch={handleSearch} />
        </section>

        <section>
          <SnippetForm refresh={fetchSnippets} />
        </section>

        <section className="pt-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Your Snippets
            </h2>
            <span className="text-xs text-slate-400">{snippets.length} items</span>
          </div>
          
          <SnippetList 
            snippets={snippets} 
            onDelete={handleDelete} 
          />
        </section>
      </main>
    </div>
  );
};

export default App;