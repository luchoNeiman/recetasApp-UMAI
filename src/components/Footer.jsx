"use client";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer-contacto" className="bg-gray-800 text-gray-200 mt-0">
      <section
        className="container px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-x-6 gap-y-6 py-[2.2rem]"
        aria-label="Pie de página"
      >
        <div>
          <h2 className="text-white text-[1.35rem] mb-[0.6rem] font-semibold">
            Web de Recetas
          </h2>

          <p className="text-slate-300 m-0">
            Ideas simples, sabores reales y recetas para todos los días. Cocinar
            también puede ser una experiencia linda.
          </p>
        </div>

        <nav aria-label="Navegación del sitio">
          <h3 className="text-white text-[1.1rem] mb-3 font-semibold">
            Explorar
          </h3>

          <ul className="grid gap-[0.45rem] list-none m-0 p-0" role="list">
            <li>
              <Link
                href="/"
                className="text-blue-100 w-fit hover:text-amber-400 hover:underline focus-visible:text-amber-400 focus-visible:underline"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                href="/#inicio-recetas"
                className="text-blue-100 w-fit hover:text-amber-400 hover:underline focus-visible:text-amber-400 focus-visible:underline"
              >
                Recetas
              </Link>
            </li>
            <li>
              <Link
                href="/#intro-acerca"
                className="text-blue-100 w-fit hover:text-amber-400 hover:underline focus-visible:text-amber-400 focus-visible:underline"
              >
                Acerca de
              </Link>
            </li>
            <li>
              <Link
                href="/#footer-contacto"
                className="text-blue-100 w-fit hover:text-amber-400 hover:underline focus-visible:text-amber-400 focus-visible:underline"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </nav>

        <div aria-label="Tipos de recetas">
          <h3 className="text-white text-[1.1rem] mb-3 font-semibold">
            Categorías
          </h3>

          <ul className="grid gap-[0.45rem] list-none m-0 p-0" role="list">
            <li>
              <Link
                href="/#cuisine-italian"
                className="text-blue-100 w-fit hover:text-amber-400 hover:underline focus-visible:text-amber-400 focus-visible:underline"
              >
                Italiana
              </Link>
            </li>

            <li>
              <Link
                href="/#cuisine-asian"
                className="text-blue-100 w-fit hover:text-amber-400 hover:underline focus-visible:text-amber-400 focus-visible:underline"
              >
                Asiática
              </Link>
            </li>

            <li>
              <Link
                href="/#cuisine-mediterranean"
                className="text-blue-100 w-fit hover:text-amber-400 hover:underline focus-visible:text-amber-400 focus-visible:underline"
              >
                Mediterránea
              </Link>
            </li>

            <li>
              <Link
                href="/#cuisine-mexican"
                className="text-blue-100 w-fit hover:text-amber-400 hover:underline focus-visible:text-amber-400 focus-visible:underline"
              >
                Mexicana
              </Link>
            </li>

            <li>
              <Link
                href="/#cuisine-moroccan"
                className="text-blue-100 w-fit hover:text-amber-400 hover:underline focus-visible:text-amber-400 focus-visible:underline"
              >
                Marroquí
              </Link>
            </li>
          </ul>
        </div>

        <div className="grid gap-[0.35rem] not-italic">
          <h3 className="text-white text-[1.1rem] mb-3 font-semibold">
            Contacto
          </h3>

          <p className="text-slate-300 m-0">neimanlucho@gmail.com</p>

          <p className="text-slate-300 m-0">+54 11-6033-1228</p>

          <p className="text-slate-300 m-0">Buenos Aires, Argentina</p>
        </div>
      </section>

      <section className="px-10 bg-gray-900 border-t border-white/10 py-[0.85rem]">
        <p className="container text-gray-400 text-[0.9rem] m-0">
          © 2026 Web de Recetas · Luciano Neiman · Hecho para practicar Next.js.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
