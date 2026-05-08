import RecipeCard from "@/components/RecipeCard";

const TILE_PATTERN = [
  "hero",
  "tall",
  "default",
  "wide",
  "default",
  "tall",
  "wide",
  "default",
];

const TILE_CLASS = {
  hero: "col-span-12 md:col-span-8 md:row-span-2",
  tall: "col-span-12 sm:col-span-6 md:col-span-4 md:row-span-2",
  wide: "col-span-12 sm:col-span-6 md:col-span-8",
  default: "col-span-12 sm:col-span-6 md:col-span-4",
};

const CardsGrids = ({ sections }) => {
  if (!sections?.length) {
    return (
      <div className="mx-auto max-w-7xl rounded-3xl bg-white/70 p-8 text-center text-[#575757] shadow-sm">
        No encontramos recetas para mostrar en este momento.
      </div>
    );
  }

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-16">
      {sections.map(({ cuisine, recipes, theme }) => (
        <section
          key={cuisine}
          id={`cuisine-${cuisine.toLowerCase().replace(/\s+/g, "-")}`}
          className="scroll-mt-28 space-y-8"
        >
          <header className="rounded-3xl bg-white/80 p-6 shadow-sm ring-1 ring-black/5">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#575757]">
              Coleccion destacada
            </p>
            <h2
              className="font-black leading-tight text-[#7c2d12]"
              style={{ fontSize: "clamp(1.65rem, 2.5vw, 2.5rem)" }}
            >
              {cuisine}
            </h2>
            <p className="mt-2 max-w-3xl text-[#575757]">{theme.description}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <span
                className="rounded-full px-3 py-1 text-xs font-semibold text-white"
                style={{ backgroundColor: theme.badge }}
              >
                {recipes.length} recetas
              </span>
              <span className="rounded-full bg-[#f4f4f5] px-3 py-1 text-xs font-semibold text-[#575757]">
                Grilla editorial
              </span>
              <span className="rounded-full bg-[#f4f4f5] px-3 py-1 text-xs font-semibold text-[#575757]">
                Inspiracion diaria
              </span>
            </div>
          </header>

          <div className="grid grid-cols-12 auto-rows-[9rem] gap-5">
            {recipes.map((recipe, index) => {
              const tileType = TILE_PATTERN[index % TILE_PATTERN.length];
              return (
                <div key={recipe.id} className={TILE_CLASS[tileType]}>
                  <RecipeCard
                    recipe={recipe}
                    accentColor={theme.badge}
                    shadowColor={theme.shadow}
                    tileType={tileType}
                  />
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
};

export default CardsGrids;