export interface Source {
  uri: string;
  title: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  sources?: Source[];
}

export interface HealthNews {
  title: string;
  summary: string;
  url: string;
}
