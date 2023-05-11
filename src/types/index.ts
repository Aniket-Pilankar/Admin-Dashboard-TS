import { AccessLevel } from '../components/form/types';

export enum Mode {
  LIGHT = 'light',
  DARK = 'dark',
}

export interface ChartProps {
  isDashboard?: boolean;
}

export interface ITeam {
  id: number | string;
  name: string;
  email: string;
  age: number;
  contact: string;
  accessLevel: AccessLevel | '';
}
