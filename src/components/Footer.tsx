interface FooterProps {
  copyright: string;
}

export function Footer({ copyright }: FooterProps) {
  return (
    <footer className="footer">
      <p>{copyright}</p>
    </footer>
  )
}
