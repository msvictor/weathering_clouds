export type HeaderType = 'default' | 'back' | 'menu';

export interface HeaderProps {
  type: HeaderType;
  title: string;
}
