import React, { useState } from 'react';
import { SearchResult } from '../types';

interface ResultsListProps {
  results: SearchResult[];
  onSelectMatch: (resultIndex: number, matchIndex: number) => void;
}

const ResultsList: React.FC<ResultsListProps> = ({ results, onSelectMatch }) => {
  const [copiedType, setCopiedType] = useState<'nicknames' | 'table' | 'clean' | 'clean_schedule' | null>(null);
  const [showIgnored, setShowIgnored] = useState<boolean>(false);

  if (results.length === 0) {
    return (
      <div className="flex flex-col h-full bg-white p-6 rounded-xl shadow-sm border border-slate-100 items-center justify-center text-center">
        <div className="bg-slate-50 p-4 rounded-full mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-slate-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-slate-900">No results yet</h3>
        <p className="text-slate-500 mt-2 max-w-xs text-sm">Paste student names or schedule slots on the left to automatically align and find nicknames.</p>
      </div>
    );
  }

  // Count metrics for visual summary
  const matchedCount = results.filter(r => r.type === 'student').length;
  const unfilledCount = results.filter(r => r.type === 'unfilled').length;
  const ignoredCount = results.filter(r => r.type === 'ignored' || r.type === 'empty').length;

  const handleCopyCleanSchedule = () => {
    // Copies clean list as: [Time] \t [unfilled/nickname (Full Name)]
    const text = results
      .map(r => {
        if (r.type === 'student' && r.matches.length > 0) {
          const selectedIdx = r.selectedIndex ?? 0;
          const match = r.matches[selectedIdx] || r.matches[0];
          const timePrefix = r.extractedTime ? `${r.extractedTime}\t` : '';
          const nick = match.nickname || match.firstName;
          const fullName = `${match.lastName}, ${match.firstName}`;
          return `${timePrefix}${nick} (${fullName})`;
        }
        if (r.type === 'unfilled') {
          const timePrefix = r.extractedTime ? `${r.extractedTime}\t` : '';
          // clean up description of timing
          let label = r.query;
          label = label.replace(/^\d{1,2}:\d{2}\s*(?:AM|PM)?\s*(?:-\s*\d{1,2}:\d{2}\s*(?:AM|PM)?)?/i, '').trim();
          if (!label) {
            label = 'unfilled break';
          }
          return `${timePrefix}${label}`;
        }
        return '';
      })
      .filter(Boolean)
      .join('\n');

    navigator.clipboard.writeText(text).then(() => {
      setCopiedType('clean_schedule');
      setTimeout(() => setCopiedType(null), 2000);
    });
  };

  const handleCopyNicknames = () => {
    // Aligned Nickname Column: preserves index alignment so pasting next to timestamps fits exactly!
    const text = results
      .map(r => {
        if (r.type === 'student' && r.matches.length > 0) {
          const selectedIdx = r.selectedIndex ?? 0;
          const match = r.matches[selectedIdx] || r.matches[0];
          return match.nickname || match.firstName; // Use nickname or fallback first name
        }
        if (r.type === 'unfilled') {
          return 'Unfilled';
        }
        return ''; // blank line for ignored/empty rows to maintain alignment
      })
      .join('\n');
    
    navigator.clipboard.writeText(text).then(() => {
      setCopiedType('nicknames');
      setTimeout(() => setCopiedType(null), 2000);
    });
  };

  const handleCopyCleanNicknames = () => {
    // Filtered Nicknames Only: copies only names for student matches, one per line (no empty rows)
    const text = results
      .filter(r => r.type === 'student' && r.matches.length > 0)
      .map(r => {
        const selectedIdx = r.selectedIndex ?? 0;
        const match = r.matches[selectedIdx] || r.matches[0];
        return match.nickname || match.firstName;
      })
      .join('\n');

    navigator.clipboard.writeText(text).then(() => {
      setCopiedType('clean');
      setTimeout(() => setCopiedType(null), 2000);
    });
  };

  const handleCopyTable = () => {
    // Tab-delimited text (Original Row \t Nickname)
    const text = results
      .map(r => {
        if (r.type === 'empty') {
          return '\t';
        }
        if (r.type === 'student' && r.matches.length > 0) {
          const selectedIdx = r.selectedIndex ?? 0;
          const match = r.matches[selectedIdx] || r.matches[0];
          const nick = match.nickname || match.firstName;
          return `${r.query}\t${nick}`;
        }
        if (r.type === 'unfilled') {
          return `${r.query}\tUnfilled`;
        }
        return `${r.query}\t(Ignored)`;
      })
      .join('\n');

    navigator.clipboard.writeText(text).then(() => {
      setCopiedType('table');
      setTimeout(() => setCopiedType(null), 2000);
    });
  };

  // Only display student matches and unfilled breaks by default
  const filteredResults = results.filter(r => r.type === 'student' || r.type === 'unfilled' || (showIgnored && (r.type === 'ignored' || r.type === 'empty')));

  return (
    <div className="flex flex-col h-full bg-white p-6 rounded-xl shadow-sm border border-slate-100">
      {/* Header controls and counts */}
      <div className="pb-4 border-b border-slate-100 mb-4 flex flex-col xl:flex-row xl:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-800">Schedules & Matches</h2>
          <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs mt-1">
            <span className="text-blue-600 bg-blue-50/75 px-1.5 py-0.5 rounded font-medium">
              Matched: <strong className="font-semibold">{matchedCount}</strong>
            </span>
            <span className="text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded font-medium">
              Unfilled: <strong className="font-semibold">{unfilledCount}</strong>
            </span>
            {ignoredCount > 0 && (
              <span className="text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded font-medium">
                Hidden Lines: <strong className="font-semibold">{ignoredCount}</strong>
              </span>
            )}
          </div>
        </div>
        
        {/* Toggle to inspect original structure */}
        <div className="flex items-center gap-2 text-xs">
          {ignoredCount > 0 && (
            <button
              onClick={() => setShowIgnored(!showIgnored)}
              className={`px-2.5 py-1.5 rounded-lg border text-xs transition-all ${
                showIgnored 
                  ? 'bg-slate-100 border-slate-300 text-slate-700 font-medium' 
                  : 'bg-white border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-slate-700'
              }`}
            >
              {showIgnored ? 'Hide Header / Format Lines' : 'Show Ignored Lines'}
            </button>
          )}
        </div>
      </div>

      {/* Copy Actions Panel */}
      <div className="flex flex-col gap-2 mb-4">
        <button
          onClick={handleCopyCleanSchedule}
          className={`w-full py-2.5 rounded-lg text-sm font-bold border transition-all flex items-center justify-center gap-2 ${
            copiedType === 'clean_schedule'
              ? 'bg-blue-600 border-blue-600 text-white shadow-sm'
              : 'bg-blue-50 border-blue-100 text-blue-700 hover:bg-blue-100'
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801-1.25c.307-.107.63-.163.955-.163h2.336c.325 0 .648.056.955.163m-4.246 1c.07-.156.162-.301.278-.432a1.875 1.875 0 012.556 0c.116.13.208.276.278.432m-5.116-.25c0-.966.784-1.75 1.75-1.75h5a1.75 1.75 0 011.75 1.75v1.5a1.75 1.75 0 01-1.75 1.75h-5a1.75 1.75 0 01-1.75-1.75v-1.5zM3 10.5h1.5a1.75 1.75 0 011.75 1.75v7.51c0 .404-.097.803-.284 1.166C5.514 21.752 4.3 21.75 3 21.75h-.5a.75.75 0 01-.75-.75V11.25a.75.75 0 01.75-.75H3z" />
          </svg>
          {copiedType === 'clean_schedule' ? 'Copied Clean Schedule!' : 'Copy Clean Schedule (Timestamps + Names)'}
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 bg-slate-50 p-2 rounded-lg border border-slate-100">
          <button
            onClick={handleCopyNicknames}
            title="Keeps blanks in place of headings & empty lines so nicknames align perfectly with your timestamps when pasted in Excel."
            className={`px-2 py-2 rounded-lg text-[11px] font-semibold border transition-all flex flex-col items-center justify-center text-center gap-0.5 ${
              copiedType === 'nicknames'
                ? 'bg-slate-800 border-slate-800 text-white shadow-sm'
                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          >
            <span>{copiedType === 'nicknames' ? 'Copied Aligned Column!' : 'Copy Aligned Column'}</span>
            <span className="text-[9px] font-normal opacity-70">(Excel Timestamps)</span>
          </button>

          <button
            onClick={handleCopyCleanNicknames}
            title="Copies names for found student matches consecutively, skipping all empty or unfilled slots."
            className={`px-2 py-2 rounded-lg text-[11px] font-semibold border transition-all flex flex-col items-center justify-center text-center gap-0.5 ${
              copiedType === 'clean'
                ? 'bg-slate-800 border-slate-800 text-white shadow-sm'
                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          >
            <span>{copiedType === 'clean' ? 'Copied Clean Names!' : 'Copy Names Only'}</span>
            <span className="text-[9px] font-normal opacity-70">(No space rows)</span>
          </button>

          <button
            onClick={handleCopyTable}
            title="Copies original line alongside resolved nickname in a two-column tabbed layout, great for direct spreadsheet pasting."
            className={`px-2 py-2 rounded-lg text-[11px] font-semibold border transition-all flex flex-col items-center justify-center text-center gap-0.5 ${
              copiedType === 'table'
                ? 'bg-slate-800 border-slate-800 text-white shadow-sm'
                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          >
            <span>{copiedType === 'table' ? 'Copied Table!' : 'Copy Aligned Table'}</span>
            <span className="text-[9px] font-normal opacity-70">(Line + Name)</span>
          </button>
        </div>
      </div>

      {/* Main interactive matches scroll area */}
      <div className="flex-1 overflow-y-auto pr-1 space-y-2">
        {filteredResults.map((result, idx) => {
          if (result.type === 'ignored' || result.type === 'empty') {
            return (
              <div 
                key={`ignored-${idx}`} 
                className="py-1 px-3 bg-slate-50/60 border border-slate-100 rounded-lg text-xs text-slate-400 select-none flex items-center justify-between italic"
              >
                <span>Ignored Non-Slot Line ({result.query || 'Blank Line'})</span>
                <span className="text-[9px] uppercase font-bold tracking-wider text-slate-300 bg-slate-100 px-1.5 py-0.5 rounded">
                  {result.type === 'empty' ? 'Blank' : 'Date / Header'}
                </span>
              </div>
            );
          }

          if (result.type === 'unfilled') {
            return (
              <div 
                key={`unfilled-${idx}`}
                className="p-3 bg-slate-50 border border-slate-200 rounded-lg transition-all hover:bg-slate-100/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div className="flex items-center gap-3">
                  {/* Time Badge */}
                  {result.extractedTime ? (
                    <span className="px-2 py-1 bg-slate-200 text-slate-700 font-mono text-xs font-bold rounded-md flex items-center gap-1 shadow-sm shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5 text-slate-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {result.extractedTime}
                    </span>
                  ) : (
                    <span className="px-2 py-1 bg-slate-100 text-slate-400 font-mono text-xs font-medium rounded-md shrink-0">
                      Slot
                    </span>
                  )}
                  
                  {/* Label */}
                  <div>
                    <h4 className="text-sm font-semibold text-slate-600">
                      unfilled break
                    </h4>
                  </div>
                </div>

                <div className="text-[11px] font-bold text-slate-400 bg-slate-200/50 px-2 py-0.5 rounded uppercase font-mono tracking-wider">
                  Unfilled
                </div>
              </div>
            );
          }

          // 'student' matched row
          const selectedIdx = result.selectedIndex ?? 0;
          const activeMatch = result.matches[selectedIdx] || result.matches[0];
          const hasNickname = !!activeMatch.nickname;
          const displayNick = activeMatch.nickname || activeMatch.firstName;

          return (
            <div 
              key={`student-${idx}-${result.query}`}
              className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 transition-all shadow-xs"
            >
              {/* Row info header */}
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  {result.extractedTime && (
                    <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded font-mono border border-blue-100 flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3 text-blue-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {result.extractedTime}
                    </span>
                  )}
                </div>
                <span className="text-[10px] text-slate-400 max-w-[200px] truncate font-mono italic">
                  From: "{result.query}"
                </span>
              </div>

              {/* Match values body */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  {/* Hero display of resolved Nickname */}
                  <div className="flex flex-col">
                    <span className="text-xl font-bold text-blue-700 bg-blue-100/70 px-2.5 py-1 rounded-lg tracking-tight inline-block border border-blue-200/60 shadow-2xs">
                      {displayNick}
                    </span>
                    {!hasNickname && (
                      <span className="text-[9px] text-slate-400 font-medium mt-1 font-mono">
                        (First name fallback)
                      </span>
                    )}
                  </div>

                  {/* Legal Name */}
                  <div className="ml-1">
                    <h3 className="text-sm font-bold text-slate-800">
                      {activeMatch.firstName} {activeMatch.lastName}
                    </h3>
                    <p className="text-[11px] text-slate-400">
                      Full name matched
                    </p>
                  </div>
                </div>

                {/* Score Tag / Confidence badge */}
                <div className="flex flex-col items-end shrink-0">
                  <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-bold font-mono bg-emerald-50 text-emerald-700 border border-emerald-100">
                    Match Confidence
                  </span>
                </div>
              </div>

              {/* Only the single best match is active and shown */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ResultsList;
