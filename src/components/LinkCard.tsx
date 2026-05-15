import type { ReactNode } from 'react';

interface LinkCardProps {
  title: string;
  desc: string;
  icon: ReactNode;
  url: string;
}

export function LinkCard({ title, desc, icon, url }: LinkCardProps) {
  return (
    <a href={url} className="link-card">
      <div className="link-card-inner">
        <span className="card-icon">{icon}</span>
        <div className="card-content">
          <h2 className="card-title">{title}</h2>
          <p className="card-desc">{desc}</p>
        </div>
      </div>
    </a>
  );
}
