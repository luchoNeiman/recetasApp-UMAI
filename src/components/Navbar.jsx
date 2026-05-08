"use client";

import items from "@/lib/navItems";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HeroSection from "./HeroSection";

const Navbar = () => {
  const pathname = usePathname();

  const isActive = (link) => {
    if (link === "/") return pathname === "/";
    return pathname?.startsWith(link);
  };

  return (
    <header className="bg-gradient-to-b from-[#fff8ef] to-white shadow-[0_0.125rem_0.5rem_rgba(0,0,0,0.04)] mb-6">
      <nav
        className="container flex flex-wrap items-center justify-between gap-4 py-4 px-6 sm:px-8 lg:px-16"
        aria-label="Navegación principal"
      >
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logos/logo-recetasApp.png"
            alt="Logo Web de Recetas"
            className="h-[3.4rem] w-auto rounded-xl"
            width={50}
            height={50}
            priority // prioriza la carga de esta imagen para mejorar el rendimiento del sitio
          />

          <span className="grid gap-[0.1rem]">
            <span className="text-[#7c2d12] text-[1.45rem] font-extrabold leading-none">
              RECETAS
            </span>
            <span className="text-[#575757] text-[0.85rem]">
              Sabores caseros de todo el mundo
            </span>
          </span>
        </Link>
        <ul className="flex flex-wrap items-center gap-[0.35rem] list-none m-0 p-0">
          {items.map((item) => (
            <li key={item.id}>
              {item.name === "Contacto" ? (
                <Link
                  className="bg-teal-700 text-white font-bold rounded-full px-4 py-[0.45rem] transition-colors duration-150 hover:bg-teal-800 focus-visible:bg-teal-800"
                  href="#footer-contacto"
                >
                  {item.name}
                </Link>
              ) : (
                item.name === "Inicio" ? (
                  <Link
                    className="rounded-full bg-[#fdebd6] text-[#9a3412] font-semibold px-[0.9rem] py-[0.45rem] transition-colors duration-150"
                    href={item.link}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <Link
                    className="rounded-full text-[#2b2b2b] font-semibold px-[0.9rem] py-[0.45rem] transition-colors duration-150 hover:bg-[#fdebd6] hover:text-[#9a3412] focus-visible:bg-[#fdebd6] focus-visible:text-[#9a3412]"
                    href={item.link}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </li>
          ))}
        </ul>
      </nav>

      <section>
        <HeroSection />
      </section>
    </header>

    // <nav
    //   className="sticky top-0 z-50 flex items-center justify-between py-4 shadow-md sm:px-10"
    //   style={{
    //     background: "linear-gradient(180deg, #fff8ef 0%, #ffffff 100%)",
    //   }}
    // >
    //   <Link
    //     href="/"
    //     className="flex items-center gap-2 hover:opacity-80 transition-opacity"
    //   >
    //     <Image
    //       src="/logos/logo-recetasApp.png"
    //       width={50}
    //       height={50}
    //       alt="Logo de Recetas App"
    //       priority //prioriza la carga de esta imagen para mejorar el rendimiento del sitio
    //     />
    //     <div>
    //       <span
    //         className="font-black tracking-widest sm:inline"
    //         style={{ color: "#7c2d12" }}
    //       >
    //         RECETAS
    //       </span>

    //       <p className="text-sm" style={{ color: "#7c2d12" }}>
    //         Sabores caseros de todo el mundo
    //       </p>
    //     </div>
    //   </Link>
    //   <ul className="flex items-center font-medium sm:gap-4">
    //     {items.map((item) => (
    //       <li key={item.id}>
    //         {item.name === "Contacto" ? (
    //           <a
    //             href="#footer-contacto"
    //             className="inline-flex items-center rounded-full px-3 py-1.5 text-white transition-colors hover:bg-blue-700"
    //             style={{
    //               backgroundColor: "#0f766e",
    //               border: "2px solid #0f766e",
    //               fontWeight: 700,
    //               scrollBehavior: "smooth",
    //             }}
    //           >
    //             {item.name}
    //           </a>
    //         ) : (
    //           <Link
    //             href={item.link}
    //             className="inline-flex items-center rounded-full px-3 py-1.5 transition-colors"
    //             style={{
    //               color: isActive(item.link) ? "#7c2d12" : "#2b2b2b",
    //               backgroundColor: isActive(item.link)
    //                 ? "#fdebd6"
    //                 : "transparent",
    //               fontWeight: isActive(item.link) ? 700 : 500,
    //               border: "2px solid transparent",
    //             }}
    //           >
    //             {item.name}
    //           </Link>
    //         )}
    //       </li>
    //     ))}
    //   </ul>
    // </nav>
  );
};

export default Navbar;
