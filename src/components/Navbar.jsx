import items from "@/lib/navItems";
import Image from "next/image";

const Navbar = () => {
    
    return (
        <div className="flex items-center justify-between bg-slate-950 px-6 py-4 text-white shadow-md sm:px-10">
            <div className="text-sm font-black tracking-[0.24em]">
                <Image
                    src={"/logos/logo-recetasApp.png"}
                    width={100}
                    height={100}
                    alt="Logo de Recetas App"
                />
            </div>
            <nav>
                <ul className="flex gap-6 text-sm font-medium sm:gap-8">
                    {items.map((item, index) => (
                        <li key={index}>{item.name}</li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;