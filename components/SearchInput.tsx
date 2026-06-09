import React from 'react';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
  onLoadSample: () => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ value, onChange, onClear, onLoadSample }) => {
  return (
    <div className="flex flex-col h-full bg-white p-6 rounded-xl shadow-sm border border-slate-100">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-slate-800">1. Paste Student List</h2>
        <div className="flex items-center gap-3">
          <button 
            onClick={onLoadSample}
            className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors underline decoration-dotted underline-offset-4"
          >
            Load Sample
          </button>
          <span className="text-slate-300">|</span>
          <button 
            onClick={onClear}
            className="text-sm text-slate-500 hover:text-red-500 transition-colors"
          >
            Clear
          </button>
        </div>
      </div>
      <p className="text-sm text-slate-500 mb-4">
        Paste names (one per line) below. Can be "First Last", "Last, First", or just "Name".
      </p>
      <textarea
        className="flex-1 w-full p-4 bg-slate-50 border border-slate-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-700 font-mono text-sm"
        placeholder="Example:
Ampanyuth, Chatrawee
Sira Arayakul
Seowoo"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        spellCheck={false}
      />
    </div>
  );
};

export default SearchInput;
