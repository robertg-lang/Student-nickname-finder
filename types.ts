export interface Student {
  id: string;
  firstName: string;
  lastName: string;
  nickname: string | null;
  originalString: string;
}

export interface ScoredStudent extends Student {
  score: number;
}

export interface SearchResult {
  query: string;
  type: 'student' | 'unfilled' | 'ignored' | 'empty';
  extractedTime?: string;
  matches: ScoredStudent[];
  selectedIndex?: number;
}

