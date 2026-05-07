const AboutContainer = () => {
  return (
    <main className="flex-grow bg-slate-900 text-white py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Acerca de Recetas App</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Nuestra Misión</h2>
          <p className="text-gray-300 leading-relaxed">
            Recetas App es una plataforma dedicada a compartir y descubrir recetas deliciosas 
            de cocinas de todo el mundo. Nuestro objetivo es inspirar a cocineros de todos los 
            niveles para que exploren nuevos sabores y técnicas culinarias.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">¿Por Qué Elegirnos?</h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex gap-3">
              <span className="text-amber-400 font-bold">✓</span>
              <span>Miles de recetas de diferentes cocinas internacionales</span>
            </li>
            <li className="flex gap-3">
              <span className="text-amber-400 font-bold">✓</span>
              <span>Instrucciones paso a paso y fáciles de seguir</span>
            </li>
            <li className="flex gap-3">
              <span className="text-amber-400 font-bold">✓</span>
              <span>Información completa de tiempos de preparación y dificultad</span>
            </li>
            <li className="flex gap-3">
              <span className="text-amber-400 font-bold">✓</span>
              <span>Comunidad de amantes de la cocina</span>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
};

export default AboutContainer;