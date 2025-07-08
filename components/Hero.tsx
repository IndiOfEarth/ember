export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 px-6 bg-gradient-to-br from-black to-gray-900 text-white">
      <h1 className="text-5xl font-bold mb-4">
        Empowering Ideas, Crafted by Ember
      </h1>
      <p className="text-xl max-w-xl mb-6">
        A digital agency building bold software and beautiful brands.
      </p>
      <a
        href="#contact"
        className="px-6 py-3 bg-white text-black rounded-xl font-medium hover:bg-gray-200 transition"
      >
        Let's Work Together
      </a>
    </section>
  );
}
