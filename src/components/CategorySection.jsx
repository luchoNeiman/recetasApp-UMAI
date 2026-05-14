import RecipeCard from "@/components/RecipeCard";

const CategorySection = ({ cuisine, recipes, theme }) => {
  const kickerClass = theme?.kickerClass || "text-[#7c2d12]";
  const badgeClass =
    theme?.badgeClass || "bg-[#fef2f2] text-[#7c2d12] border border-[#7c2d1247]";
  const hoverShadow =
    theme?.hoverShadow || "hover:shadow-[0_24px_48px_rgba(124,45,18,0.18)]";

  return (
    <section
      id={`cuisine-${cuisine.toLowerCase().replace(/\s+/g, "-")}`}
      className="scroll-mt-28 space-y-8"
    >
      {/* Cabecera de categoría */}
      <header className="rounded-3xl bg-white/80 p-6 shadow-sm ring-1 ring-black/5">
        <p
          className={`mb-2 text-sm font-semibold uppercase tracking-[0.16em] ${kickerClass}`}
        >
          Colección destacada
        </p>
        <h2
          className="font-black leading-tight text-[#7c2d12]"
          style={{ fontSize: "clamp(1.65rem, 2.5vw, 2.5rem)" }}
        >
          {cuisine}
        </h2>
        <p className="mt-2 max-w-3xl text-[#575757]">{theme?.description}</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${badgeClass}`}
          >
            {recipes.length} recetas
          </span>
          <span className="rounded-full bg-[#f4f4f5] px-3 py-1 text-xs font-semibold text-[#575757]">
            Grilla simple
          </span>
          <span className="rounded-full bg-[#f4f4f5] px-3 py-1 text-xs font-semibold text-[#575757]">
            Inspiración diaria
          </span>
        </div>
      </header>

      {/* Grilla normal: 1 col mobile, 2 en tablet, 4 en desktop */}
      <ul className="m-0 grid list-none grid-cols-1 gap-5 p-0 sm:grid-cols-2 lg:grid-cols-4">
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <RecipeCard
              recipe={recipe}
              accentColor={theme?.accentColor ?? "#9a3412"}
              hoverShadow={hoverShadow}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CategorySection;
