const services = [
  {
    title: "Web & App Development",
    description:
      "We build scalable, high-performance web and mobile apps tailored to your needs.",
  },
  {
    title: "SaaS Product Design",
    description:
      "MVPs, platforms, and internal tools — we help you launch fast and iterate smart.",
  },
  {
    title: "Branding & Design",
    description:
      "Visual identities that elevate your presence and build trust with your users.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 px-6 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-10">What We Do</h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {services.map((s, i) => (
            <div key={i} className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-gray-600">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
