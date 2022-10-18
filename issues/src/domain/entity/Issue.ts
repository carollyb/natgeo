export type TIssue = {
  id?: string;
  number: number;
  date: Date;
  cover: string;
  file: string;
  language: string;
  topics: string
}

export default class Issue {
  constructor({ 
    id,
    number,
    date,
    cover,
    file,
    language,
    topics }: TIssue) {}
}

export type TIssueOutput = {
  id: string;
  number: number;
  date: Date;
  cover: string;
  file: string;
  language: string;
  topics: string
}