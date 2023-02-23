export type Query = {
  page: number;
  limit?: number;
  sort?: string[];
  type?: string;
  ext?: string;
  date?: string;
  block?: number;
  censored?: boolean | null;
};
