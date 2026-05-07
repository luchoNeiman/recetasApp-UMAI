import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative h-96 overflow-hidden rounded-lg shadow-lg mx-4 mt-4 sm:mx-6 sm:mt-6 lg:mx-8">
      <Image
        src="/banner/banner.jpeg"
        alt="Banner Recetas App"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent flex flex-col justify-center pl-6 sm:pl-10">
        <h1 className="text-4xl sm:text-5xl font-black text-white mb-4 max-w-2xl">
          Cocina rico sin complicarte la vida
        </h1>
        <p className="text-lg text-gray-200 max-w-xl">
          Descubre miles de recetas deliciosas para todos los gustos y niveles de experiencia
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
