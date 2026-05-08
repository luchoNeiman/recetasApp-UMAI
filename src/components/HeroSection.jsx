import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative isolate min-h-[40rem] overflow-hidden px-4 py-16 sm:px-8 lg:px-16">
      <Image
        src="/banner/banner.jpeg"
        alt="Banner Recetas App"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/20" /> {/* Capa de oscurecimiento para mejorar legibilidad */}

      <article className="relative z-10 mx-auto flex min-h-[40rem] w-full max-w-7xl items-center">
        <div className="max-w-[36rem] rounded-[1.5rem] bg-[rgba(255,255,255,0.9)] p-8 shadow-xl backdrop-blur-sm sm:p-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#575757]">
            Especial de temporada
          </p>
          <h1 className="text-4xl font-black leading-tight text-[#7c2d12] sm:text-5xl">
            Cocina rico sin complicarte la vida
          </h1>
          <p className="mt-4 text-base leading-relaxed text-[#575757] sm:text-lg">
            Descubre recetas practicas para todos los dias con ingredientes
            accesibles y pasos claros.
          </p>
        </div>
      </article>
    </section>
  );
};

export default HeroSection;
