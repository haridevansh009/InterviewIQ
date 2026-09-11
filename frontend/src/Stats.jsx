function Stats() {
  return (
    <section className="bg-indigo-600 py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 text-center text-white md:grid-cols-4">

        <div>
          <p className="text-4xl font-extrabold">10K+</p>
          <p className="mt-2 text-indigo-100">Practice Questions</p>
        </div>

        <div>
          <p className="text-4xl font-extrabold">50+</p>
          <p className="mt-2 text-indigo-100">Technologies</p>
        </div>

        <div>
          <p className="text-4xl font-extrabold">20+</p>
          <p className="mt-2 text-indigo-100">Interview Types</p>
        </div>

        <div>
          <p className="text-4xl font-extrabold">24/7</p>
          <p className="mt-2 text-indigo-100">AI Practice</p>
        </div>

      </div>
    </section>
  );
}

export default Stats;