interface HeroProps {
  text: string;
}

export function Hero({ text }: HeroProps) {
  return (
    <section className="hero">
      <p className="hero-text">{text}</p>
    </section>
  );
}
