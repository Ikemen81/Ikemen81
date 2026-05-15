import type { ReactNode } from 'react';

interface HeaderProps {
  title: ReactNode;
}

export function Header({ title }: HeaderProps) {
  return (
    <header className="header">
      <h1 className="title">{title}</h1>
    </header>
  );
}
