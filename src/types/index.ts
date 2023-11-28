export interface ICompanies {
  id: number;
  name: string;
  start: number;
  current: number;
  info: string;
  img: string;
}

export type PropsButtonOpen = { open: boolean; handlerButton: () => void };
