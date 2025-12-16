interface Props {
  title: string;
  description: string;
}
export default function ServiceSection({ title, description }: Props) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-primary">{title}</h2>
      <p>{description}</p>
    </section>
  );
}