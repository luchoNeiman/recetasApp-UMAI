import CardsGrids from "@/components/CardsGrids";
import HeroSection from "@/components/HeroSection";

const HomeContainer = async () => {
  let items = [];
  let error = false;
  let errorMsg = "";

  try {
    const response = await fetch("https://dummyjson.com/recipes?limit=0", {
      next: { revalidate: 3600 } // Revalidate every hour
    });
    
    if (!response.ok) {
      throw new Error("Error fetching recipes");
    }
    
    const data = await response.json();
    items = data.recipes || [];
  } catch (err) {
    console.error("Error loading recipes:", err);
    error = true;
    errorMsg = "Hubo un error al cargar las recetas. Por favor, intenta más tarde.";
  }

  return (
    <main>
      <HeroSection />
      <section className="bg-gradient-to-b from-slate-50 to-white">
        {!error && <CardsGrids items={items} title={"Recetas App"} />}
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