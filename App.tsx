import React, { useState, useEffect, useCallback } from 'react';
import SearchInput from './components/SearchInput';
import ResultsList from './components/ResultsList';
import { studentData } from './utils/data';
import { SearchResult, ScoredStudent } from './types';

const CONFERENCE_STOP_WORDS = new Set([
  'am', 'pm', 'est', 'gmt', 'utc',
  'to', 'at', 'with', 'and', 'for', 'in', 'on', 'by', 'of',
  'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday',
  'mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun',
  'january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december',
  'jan', 'feb', 'mar', 'apr', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec',
  'room', 'rm', 'table', 'tbl', 'desk', 'location', 'venue', 'hall', 'seat',
  'grade', 'gr', 'class', 'sec', 'section', 'level', 'year', 'yr',
  'teacher', 'parent', 'father', 'mother', 'guardian', 'mom', 'dad', 'mr', 'mrs', 'ms', 'dr', 'ajarn',
  'ptc', 'conference', 'meeting', 'appointment', 'session', 'slot', 'interview', 'scheduled', 'schedule', 'booked', 'booking',
  'time', 'date', 'status', 'student', 'name', 'email',
  'none', 'na', 'n/a', 'null', 'nil', 'empty',
  'break', 'lunch', 'recess', 'available', 'free', 'open'
]);

const isNoiseToken = (token: string): boolean => {
  if (!token) return true;
  const tLower = token.toLowerCase();
  
  // Contains any numerical digit (usually times like 08, 30, rm101, table5)
  if (/\d/.test(tLower)) return true;
  
  // Non-alphabetic single characters like "-", "/"
  if (tLower.length === 1 && !/[a-z]/i.test(tLower)) return true;
  
  // Part of our stop words list
  if (CONFERENCE_STOP_WORDS.has(tLower)) return true;
  
  return false;
};

const cleanTokenName = (token: string): string => {
  let t = token.toLowerCase();
  // Remove leading level/program/gXX codes e.g. "g8", "gr10", "grade12", "ip", "es", "ms", "hs"
  t = t.replace(/^(?:g\d{1,2}|gr\d{1,2}|grade\d{1,2}|ip|es|ms|hs|kg|pk)\s*/g, '');
  return t;
};

const isTenMinuteAppointment = (query: string): boolean => {
  const qLower = query.toLowerCase();
  
  // 1. Explicit text stating "10 min" or similar
  if (qLower.includes('10 min') || qLower.includes('10-min') || qLower.includes('10min')) {
    return true;
  }
  
  // 2. Check for time ranges indicating ~10 minutes, e.g. "08:30 - 08:40"
  const times = query.match(/(\d{1,2})[:.](\d{2})/g);
  if (times && times.length >= 2) {
    const parseTimeToMinutes = (t: string) => {
      const parts = t.split(/[:.]/).map(Number);
      return parts[0] * 60 + parts[1];
    };
    const diff = Math.abs(parseTimeToMinutes(times[1]) - parseTimeToMinutes(times[0]));
    if (diff > 0 && diff <= 12) {
      return true;
    }
  }
  return false;
};

const App: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);

  // Robust, smart pattern matching that grades candidates with a scoring model
  const searchStudent = useCallback((query: string): ScoredStudent[] => {
    if (!query) return [];
    
    // First, strip email addresses
    const cleanedWithoutEmail = query.replace(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g, ' ');
    
    // Convert to lowercase and replace non-alphabetic/non-name chars with spaces
    const normalizedQuery = cleanedWithoutEmail
      .toLowerCase()
      .replace(/[^a-z0-9'\-]+/g, ' ')
      .trim();
      
    // Split query into lowercase word tokens
    const rawTokens = normalizedQuery
      .split(/\s+/)
      .map(t => t.trim())
      .filter(t => t.length > 0);
      
    // Filter out scheduling/timing noise tokens
    const queryTokens = rawTokens.filter(token => !isNoiseToken(token));
      
    if (queryTokens.length === 0) return [];

    const scoredStudents: ScoredStudent[] = [];

    studentData.forEach(student => {
      const studentFirstName = student.firstName.toLowerCase();
      const studentLastName = student.lastName.toLowerCase();
      const studentNickname = (student.nickname || '').toLowerCase();
      
      const fullFirstLast = `${studentFirstName} ${studentLastName}`;
      const fullLastFirst = `${studentLastName} ${studentFirstName}`;
      
      let score = 0;
      
      // 1. Exact match on full combinations
      if (normalizedQuery === fullFirstLast || normalizedQuery === fullLastFirst) {
        score += 150;
      }
      
      // 2. Exact match on first name & last name
      if (normalizedQuery.includes(studentFirstName) && normalizedQuery.includes(studentLastName)) {
        score += 120;
      }
      
      // 3. Exact match on nickname in query
      if (studentNickname && queryTokens.includes(studentNickname)) {
        score += 100;
      }
      
      const sFirstTokens = studentFirstName.split(/[^a-z0-9'\-]+/).filter(Boolean);
      const sLastTokens = studentLastName.split(/[^a-z0-9'\-]+/).filter(Boolean);
      const sNickTokens = studentNickname.split(/[^a-z0-9'\-]+/).filter(Boolean);
      
      queryTokens.forEach(rawQToken => {
        const qToken = cleanTokenName(rawQToken);
        
        if (sFirstTokens.includes(qToken) || sFirstTokens.includes(rawQToken)) {
          score += 50;
        } else if (sLastTokens.includes(qToken) || sLastTokens.includes(rawQToken)) {
          score += 40;
        } else if (sNickTokens.includes(qToken) || sNickTokens.includes(rawQToken)) {
          score += 45;
        } else if (sLastTokens.some(t => qToken.endsWith(t) && qToken.length > t.length)) {
          score += 35;
        } else if (sFirstTokens.some(t => qToken.endsWith(t) && qToken.length > t.length)) {
          score += 35;
        } else if (qToken.length > 3 && sLastTokens.some(t => qToken.includes(t) || t.includes(qToken))) {
          score += 20;
        } else if (qToken.length > 3 && sFirstTokens.some(t => qToken.includes(t) || t.includes(qToken))) {
          score += 20;
        } else if (qToken.length > 2 && sFirstTokens.some(t => t.startsWith(qToken) || qToken.startsWith(t))) {
          score += 20;
        } else if (qToken.length > 2 && sLastTokens.some(t => t.startsWith(qToken) || qToken.startsWith(t))) {
          score += 15;
        } else if (qToken.length > 3 && (studentFirstName.includes(qToken) || studentLastName.includes(qToken))) {
          score += 5;
        }
      });
      
      // filter out weak accidental substring matches
      const hasValidOverlap = queryTokens.some(rawQToken => {
        const qToken = cleanTokenName(rawQToken);
        return sFirstTokens.includes(qToken) || 
               sFirstTokens.includes(rawQToken) ||
               sLastTokens.includes(qToken) || 
               sLastTokens.includes(rawQToken) ||
               sNickTokens.includes(qToken) ||
               sNickTokens.includes(rawQToken) ||
               sLastTokens.some(t => qToken.endsWith(t)) ||
               sFirstTokens.some(t => qToken.endsWith(t)) ||
               (qToken.length > 2 && sFirstTokens.some(t => t.startsWith(qToken) || qToken.startsWith(t))) ||
               (qToken.length > 2 && sLastTokens.some(t => t.startsWith(qToken) || qToken.startsWith(t)));
      });
      
      if (hasValidOverlap && score > 0) {
        scoredStudents.push({
          ...student,
          score
        });
      }
    });

    // Sort by score descending
    return scoredStudents.sort((a, b) => b.score - a.score);
  }, []);

  const handleLoadSample = () => {
    setInputText(
      `Monday, June 9\n` +
      `Middle School Parent Teacher Conferences\n` +
      `Time Slot\tStudent Name\tRoom\n` +
      `7:15 AM\tunfilled break\n` +
      `8:15 AM\tIPPumipitak, Phoom\n` +
      `8:30 AM\tArayakul, Sira (England) G7\n` +
      `8:45 AM\tAmpanyuth, Chatrawee [10:15am] Room 114\n` +
      `12:00 PM\tLUNCH BREAK\n` +
      `13:00 PM\tESStudent Ahn, Seowoo\n` +
      `13:15 PM\tavailable`
    );
  };

  const handleSelectMatch = useCallback((resultIndex: number, matchIndex: number) => {
    setResults(prev => prev.map((res, idx) => {
      if (idx === resultIndex) {
        return {
          ...res,
          selectedIndex: matchIndex
        };
      }
      return res;
    }));
  }, []);

  useEffect(() => {
    if (!inputText.trim()) {
      setResults([]);
      return;
    }

    const lines = inputText.split('\n');
    const newResults: SearchResult[] = lines
      .map(line => {
        const query = line.trim();
        if (query.length === 0) {
          return {
            query: "",
            type: "empty" as const,
            matches: [],
            selectedIndex: undefined
          };
        }
        
        // Remove common list formatting numbers at the beginning (e.g. "1. ", "02) ", "3- ")
        // ensuring we don't accidentally split times like "08:30" (verify no colon directly follows digits)
        const cleanQuery = query.replace(/^(?:\d+(?!:)\b[\s.\-)]+\s*)+/, ''); 
        
        // Check for 10-minute slots to ignore them from student matches
        if (isTenMinuteAppointment(query)) {
          return {
            query,
            type: "ignored" as const,
            matches: [],
            selectedIndex: undefined
          };
        }
        
        const matches = searchStudent(cleanQuery);
        
        // Extract time of day
        const timeMatch = query.match(/(\d{1,2}:\d{2}\s*(?:AM|PM|am|pm)?)/i);
        const extractedTime = timeMatch ? timeMatch[1].trim() : undefined;

        if (matches.length > 0) {
          return {
            query,
            type: "student" as const,
            extractedTime,
            matches,
            selectedIndex: 0
          };
        }

        // If no matches, check if it's an unfilled break or custom slot
        const qLower = query.toLowerCase();
        const isUnfilledBlock = 
          qLower.includes('unfilled') || 
          qLower.includes('break') || 
          qLower.includes('lunch') || 
          qLower.includes('meeting') || 
          qLower.includes('recess') ||
          qLower.includes('ptc') ||
          qLower.includes('available') ||
          qLower.includes('free') ||
          qLower.includes('empty') ||
          qLower.includes('open slot');

        if (isUnfilledBlock || extractedTime) {
          return {
            query,
            type: "unfilled" as const,
            extractedTime,
            matches: [],
            selectedIndex: undefined
          };
        }

        // Otherwise, it's a date or heading to ignore
        return {
          query,
          type: "ignored" as const,
          extractedTime,
          matches: [],
          selectedIndex: undefined
        };
      });

    setResults(newResults);
  }, [inputText, searchStudent]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50">
      <div className="flex-1 flex flex-col items-center py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <header className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Student Nickname Finder</h1>
          <p className="mt-1.5 text-sm text-slate-600">Quickly align and append student nicknames to slot rosters.</p>
        </header>

        <div className="flex-1 w-full grid grid-cols-1 lg:grid-cols-2 gap-6 h-[calc(100vh-12rem)] min-h-[500px]">
          <SearchInput 
            value={inputText} 
            onChange={setInputText} 
            onClear={() => setInputText('')} 
            onLoadSample={handleLoadSample}
          />
          <ResultsList results={results} onSelectMatch={handleSelectMatch} />
        </div>
        
        <footer className="mt-6 text-slate-400 text-xs font-mono">
          Deduplicated {studentData.length} records • Strict score validation
        </footer>
      </div>
    </div>
  );
};

export default App;
