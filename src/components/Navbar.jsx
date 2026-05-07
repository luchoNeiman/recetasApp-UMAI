import items from "@/lib/navItems";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 flex items-center justify-between bg-slate-950 px-6 py-4 text-white shadow-lg sm:px-10">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Image
                    src="/logos/logo-recetasApp.png"
                    width={40}
                    height={40}
                    alt="Logo de Recetas App"
                    priority
                />
                <span className="hidden text-sm font-black tracking-widest sm:inline">RECETAS</span>
            </Link>
            <ul className="flex gap-6 text-sm font-medium sm:gap-8">
                {items.map((item) => (
                    <li key={item.id}>
                        <Link 
                            href={item.link}
                            className="hover:text-amber-400 transition-colors duration-200"
                        >
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;