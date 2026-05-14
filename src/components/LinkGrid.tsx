import { LinkCard } from './LinkCard';

interface Link {
  title: string;
  desc: string;
  emoji: string;
  url: string;
}

interface LinkGridProps {
  links: Link[];
}

export function LinkGrid({ links }: LinkGridProps) {
  return (
    <div className="link-grid">
      {links.map((link, index) => (
        <div key={index} className="link-card-wrapper">
          <LinkCard {...link} />
        </div>
      ))}
    </div>
  );
}
