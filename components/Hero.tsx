export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 px-6 bg-gradient-to-br from-black to-gray-900 text-white">
      {/* <h1 className="font-figtree font-semibold text-5xl mb-4">
        <span className="font-figtree font-light">Empowering Ideas</span>,
        Crafted by ember.
      </h1> */}
      <h1 className="font-figtree font-extrabold text-8xl mb-4">
        <span className="font-figtree font-extralight text-5xl">
          Empowering ideas, powered by
        </span>{" "}
        ember.
      </h1>
      <p className="font-figtree text-xl max-w-xl mb-6">
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
