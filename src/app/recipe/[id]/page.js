import Image from "next/image";
import Link from "next/link";

const RecipeDetailPage = async ({ params }) => {
  const { id } = await params;

  let recipe = null;
  let error = false;

  try {
    const response = await fetch(`https://dummyjson.com/recipe/${id}`, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error("Error loading recipe");
    }

    recipe = await response.json();
  } catch (e) {
    console.error("Error loading recipe detail:", e);
    error = true;
  }

  if (error || !recipe) {
    return (
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-red-200 bg-red-50 p-8 text-center">
          <h1 className="text-2xl font-black text-red-700">
            No se pudo cargar la receta
          </h1>
          <p className="mt-2 text-red-600">
            Intenta nuevamente en unos minutos.
          </p>
          <Link
            href="/"
            className="mt-6 inline-block rounded-full bg-[#9a3412] px-5 py-2.5 text-sm font-semibold text-white"
          >
            Volver al inicio
          </Link>
        </div>
      </main>
    );
  }

  const instructions = Array.isArray(recipe.instructions)
    ? recipe.instructions
    : String(recipe.instructions || "")
        .split("\n")
        .filter(Boolean);

  const totalMinutes =
    (recipe.prepTimeMinutes || 0) + (recipe.cookTimeMinutes || 0);

  return (
    <main
      className="pb-[3.8rem]"
      style={{
        background:
          "radial-gradient(circle at 90% 5%, rgba(252, 211, 77, 0.22), transparent 36%), radial-gradient(circle at 8% 28%, rgba(249, 115, 22, 0.16), transparent 34%), #fffdf8",
      }}
    >
      <section
        className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-[1.4rem] px-4 py-[2.2rem] sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8"
        aria-label="Detalle de receta"
      >
        <article className="rounded-[1.25rem] border border-[rgba(180,83,9,0.25)] bg-[rgba(255,255,255,0.92)] p-6 shadow-[0_1rem_2rem_rgba(180,83,9,0.08)]">
          <p className="mb-[0.55rem] text-[0.82rem] font-bold uppercase tracking-[0.14em] text-[#b45309]">
            Detalle de receta
          </p>

          <h1 className="mb-3 text-[clamp(1.9rem,3.8vw,3.2rem)] font-black leading-[1.08] text-balance text-[#1f2937]">
            {recipe.name}
          </h1>

          <p className="mb-4 max-w-[36rem] text-[#4b5563]">
            Receta clasica con ingredientes simples, mucho sabor y un paso a
            paso facil de seguir.
          </p>

          <ul className="mb-[1.15rem] flex list-none flex-wrap gap-2 p-0">
            <li className="rounded-full border border-[rgba(180,83,9,0.28)] bg-[#fff2df] px-3 py-[0.3rem] text-[0.84rem] font-bold text-[#9a3412]">
              {recipe.cuisine || "Global"}
            </li>
            <li className="rounded-full border border-[rgba(180,83,9,0.28)] bg-[#fff2df] px-3 py-[0.3rem] text-[0.84rem] font-bold text-[#9a3412]">
              {recipe.servings || 1} porciones
            </li>
            <li className="rounded-full border border-[rgba(180,83,9,0.28)] bg-[#fff2df] px-3 py-[0.3rem] text-[0.84rem] font-bold text-[#9a3412]">
              Preparacion: {recipe.prepTimeMinutes || 0} min
            </li>
            <li className="rounded-full border border-[rgba(180,83,9,0.28)] bg-[#fff2df] px-3 py-[0.3rem] text-[0.84rem] font-bold text-[#9a3412]">
              Coccion: {recipe.cookTimeMinutes || 0} min
            </li>
            <li className="rounded-full border border-[rgba(180,83,9,0.28)] bg-[#fff2df] px-3 py-[0.3rem] text-[0.84rem] font-bold text-[#9a3412]">
              Total: {totalMinutes} min
            </li>
            <li className="rounded-full border border-[rgba(180,83,9,0.28)] bg-[#fff2df] px-3 py-[0.3rem] text-[0.84rem] font-bold text-[#9a3412]">
              Dificultad: {recipe.difficulty || "N/A"}
            </li>
            <li className="rounded-full border border-[rgba(180,83,9,0.28)] bg-[#fff2df] px-3 py-[0.3rem] text-[0.84rem] font-bold text-[#9a3412]">
              Valoracion: {Number(recipe.rating || 0).toFixed(1)} (
              {recipe.reviewCount || 0} reseñas)
            </li>
          </ul>

          <p className="m-0 flex flex-wrap gap-[0.65rem]">
            <Link
              href="#pasos"
              className="rounded-full bg-[#9a3412] px-4 py-2 text-[0.95rem] font-bold text-white hover:bg-[#7c2d12]"
            >
              Ir a preparacion
            </Link>
            <Link
              href="/"
              className="rounded-full border border-[#9a3412] px-4 py-2 text-[0.95rem] font-bold text-[#9a3412] hover:bg-[#fff3e5]"
            >
              Volver al inicio
            </Link>
          </p>
        </article>

        <figure className="overflow-hidden rounded-[1.25rem] shadow-[0_1.2rem_2.6rem_rgba(15,23,42,0.16)]">
          <Image
            src={recipe.image}
            alt={recipe.name}
            width={900}
            height={675}
            className="aspect-[16/12] w-full object-cover"
            priority
          />
        </figure>
      </section>

      <section
        className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-4 sm:px-6 lg:grid-cols-[minmax(16rem,22rem)_minmax(0,1fr)] lg:px-8"
        aria-label="Informacion completa de la receta"
      >
        <aside className="grid gap-[1.15rem]">
          <article className="rounded-[1.1rem] border border-[rgba(31,41,55,0.1)] bg-white p-5 shadow-[0_0.8rem_1.9rem_rgba(31,41,55,0.08)]">
            <h2 className="mb-3 text-xl font-bold text-[#1f2937]">
              Ingredientes
            </h2>
            <ul className="grid list-none gap-[0.55rem] p-0">
              {(recipe.ingredients || []).map((ingredient, index) => (
                <li
                  key={`${ingredient}-${index}`}
                  className="relative pl-5 text-[#1f2937]"
                >
                  <span className="absolute left-0 text-[#0f766e]">●</span>
                  {ingredient}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-[1.1rem] border border-[rgba(15,118,110,0.32)] bg-gradient-to-b from-white to-[#f0fdfa] p-5 shadow-[0_0.8rem_1.9rem_rgba(31,41,55,0.08)]">
            <h2 className="mb-3 text-xl font-bold text-[#1f2937]">
              Info nutricional aprox.
            </h2>
            <dl className="grid gap-[0.6rem]">
              <div className="flex items-baseline justify-between border-b border-dashed border-[rgba(31,41,55,0.18)] pb-[0.35rem]">
                <dt className="font-semibold text-[#475569]">Calorias</dt>
                <dd className="m-0 font-extrabold text-[#111827]">
                  {recipe.caloriesPerServing || "N/A"} kcal
                </dd>
              </div>
              <div className="flex items-baseline justify-between border-b border-dashed border-[rgba(31,41,55,0.18)] pb-[0.35rem]">
                <dt className="font-semibold text-[#475569]">Cocina</dt>
                <dd className="m-0 font-extrabold text-[#111827]">
                  {recipe.cuisine || "Global"}
                </dd>
              </div>
              <div className="flex items-baseline justify-between border-b border-dashed border-[rgba(31,41,55,0.18)] pb-[0.35rem]">
                <dt className="font-semibold text-[#475569]">Tipo de comida</dt>
                <dd className="m-0 font-extrabold text-[#111827]">
                  {Array.isArray(recipe.mealType)
                    ? recipe.mealType.join(", ")
                    : recipe.mealType || "N/A"}
                </dd>
              </div>
              <div className="flex items-baseline justify-between border-b border-dashed border-[rgba(31,41,55,0.18)] pb-[0.35rem]">
                <dt className="font-semibold text-[#475569]">Etiquetas</dt>
                <dd className="m-0 text-right font-extrabold text-[#111827]">
                  {Array.isArray(recipe.tags)
                    ? recipe.tags.join(", ")
                    : recipe.tags || "N/A"}
                </dd>
              </div>
            </dl>
          </article>
        </aside>

        <section id="pasos" className="scroll-mt-28 grid gap-[1.15rem]">
          <article className="rounded-[1.1rem] border border-[rgba(31,41,55,0.1)] bg-white p-5 shadow-[0_0.8rem_1.9rem_rgba(31,41,55,0.08)]">
            <h2 className="mb-3 text-xl font-bold text-[#1f2937]">
              Paso a paso
            </h2>
            <ol className="m-0 grid list-none gap-[0.85rem] p-0">
              {instructions.map((step, index) => (
                <li
                  key={`${index}-${step}`}
                  className="relative rounded-[0.85rem] border border-[rgba(180,83,9,0.2)] bg-[#fffbf5] py-3 pl-10 pr-3 text-[#1f2937]"
                >
                  <span className="absolute left-[0.7rem] top-[0.7rem] inline-flex h-[1.4rem] w-[1.4rem] items-center justify-center rounded-full bg-[#b45309] text-[0.82rem] font-bold text-white">
                    {index + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </article>

          <article className="rounded-[1.1rem] border border-[rgba(31,41,55,0.1)] bg-white p-5 shadow-[0_0.8rem_1.9rem_rgba(31,41,55,0.08)]">
            <h2 className="mb-3 text-xl font-bold text-[#1f2937]">
              Resumen de origen
            </h2>
            <ul className="grid list-none gap-[0.55rem] p-0">
              <li className="relative pl-5 text-[#1f2937]">
                <span className="absolute left-0 text-[#0f766e]">●</span>
                Endpoint: https://dummyjson.com/recipe/{recipe.id}
              </li>
              <li className="relative pl-5 text-[#1f2937]">
                <span className="absolute left-0 text-[#0f766e]">●</span>
                ID de receta: {recipe.id}
              </li>
              <li className="relative pl-5 text-[#1f2937]">
                <span className="absolute left-0 text-[#0f766e]">●</span>
                Nombre original: {recipe.name}
              </li>
            </ul>
          </article>
        </section>
      </section>
    </main>
  );
};

export default RecipeDetailPage;
