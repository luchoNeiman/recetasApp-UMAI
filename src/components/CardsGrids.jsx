import CategorySection from "@/components/CategorySection";

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
        <CategorySection
          key={cuisine}
          cuisine={cuisine}
          recipes={recipes}
          theme={theme}
        />
      ))}
    </div>
  );
};

export default CardsGrids;
