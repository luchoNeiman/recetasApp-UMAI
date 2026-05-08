import CardsGrids from "@/components/CardsGrids";

const CUISINE_THEME = {
  Italian: {
    shadow: "#b45309",
    badge: "#b45309",
    description:
      "Sabores clasicos de Italia con foco en pastas, salsas y texturas reconfortantes.",
  },
  Mexican: {
    shadow: "#b91c1c",
    badge: "#b91c1c",
    description:
      "Platos intensos con especias, frescura y contrastes tipicos de la cocina mexicana.",
  },
  Asian: {
    shadow: "#0f766e",
    badge: "#0f766e",
    description:
      "Preparaciones aromaticas y equilibradas inspiradas en cocinas del continente asiatico.",
  },
  Global: {
    shadow: "#475569",
    badge: "#475569",
    description:
      "Recetas internacionales para explorar tecnicas y sabores de distintas regiones.",
  },
};

const resolveTheme = (cuisine) => {
  if (!cuisine) return CUISINE_THEME.Global;
  if (/asian/i.test(cuisine)) return CUISINE_THEME.Asian;
  return CUISINE_THEME[cuisine] || CUISINE_THEME.Global;
};

const groupByCuisine = (recipes) => {
  const grouped = recipes.reduce((acc, recipe) => {
    const cuisine = recipe.cuisine || "Global";
    if (!acc[cuisine]) {
      acc[cuisine] = [];
    }
    acc[cuisine].push(recipe);
    return acc;
  }, {});

  return Object.entries(grouped)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([cuisine, recipes]) => ({
      cuisine,
      recipes,
      theme: resolveTheme(cuisine),
    }));
};

const HomeContainer = async () => {
  let items = [];
  let sections = [];
  let error = false;
  let errorMsg = "";

  try {
    const response = await fetch("https://dummyjson.com/recipes?limit=0");

    if (!response.ok) {
      throw new Error("Error fetching recipes");
    }

    const data = await response.json();
    items = data.recipes || [];
    sections = groupByCuisine(items);
  } catch (err) {
    console.error("Error loading recipes:", err);
    error = true;
    errorMsg =
      "Hubo un error al cargar las recetas. Por favor, intenta más tarde.";
  }

  return (
    <main>
      <section
        id="intro-acerca"
        className="scroll-mt-24 bg-gradient-to-b from-white to-[#fff8ef] py-6"
      >
        <div className="mx-auto max-w-4xl rounded-[1.5rem] bg-white/90 p-8 shadow-[0_12px_28px_-20px_rgba(0,0,0,0.35)] ring-1 ring-black/5 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#575757]">
            Acerca de esta web
          </p>
          <h1 className="mt-2 text-[clamp(1.7rem,2.8vw,2.6rem)] font-black leading-tight text-[#7c2d12]">
            Un lugar para cocinar rico, simple y con identidad
          </h1>
          <p className="mt-4 text-base leading-relaxed text-[#575757] sm:text-lg">
            Esta pagina reune recetas reales, practicas y sabrosas para el dia a
            dia. La idea es que encuentres inspiracion por cocina, dificultad y
            tiempo, con una experiencia visual clara y agradable.
          </p>
        </div>
      </section>

      <section
        id="inicio-recetas"
        className="scroll-mt-24 bg-gradient-to-b from-[#fff8ef] to-white py-16"
      >
        {!error && <CardsGrids sections={sections} />}
        {error && (
          <div className="max-w-7xl mx-auto px-4 py-12 text-center">
            <p className="text-lg text-red-600 font-semibold">{errorMsg}</p>
          </div>
        )}
      </section>
    </main>
  );
};

export default HomeContainer;
