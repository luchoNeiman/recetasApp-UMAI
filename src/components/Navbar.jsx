import items from "@/lib/navItems";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="navbar-gradient sticky top-0 z-50 flex items-center justify-between px-6 py-4 shadow-md sm:px-10">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Image
                    src="/logos/logo-recetasApp.png"
                    width={50}
                    height={50}
                    alt="Logo de Recetas App"
                    priority
                />
                <span className="hidden text-lg font-black tracking-widest sm:inline" style={{ color: "#7c2d12" }}>
                    RECETAS
                </span>
            </Link>
            <ul className="flex gap-6 text-sm font-medium sm:gap-8">
                {items.map((item) => (
                    <li key={item.id}>
                        <Link 
                            href={item.link}
                            className="transition-colors duration-200"
                            style={{ 
                                color: "#575757",
                                textDecoration: "none"
                            }}
                            onMouseEnter={(e) => e.target.style.color = "#fdebd6"}
                            onMouseLeave={(e) => e.target.style.color = "#575757"}
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