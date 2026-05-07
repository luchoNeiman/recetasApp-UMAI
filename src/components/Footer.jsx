import Link from "next/link";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="mt-auto bg-slate-950 text-white py-8 border-t border-slate-800">
            <div className="container mx-auto px-6 sm:px-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h3 className="font-bold text-lg mb-4">Recetas App</h3>
                        <p className="text-gray-400 text-sm">Explora miles de recetas deliciosas de diferentes cocinas del mundo.</p>
                    </div>
                    <nav>
                        <h3 className="font-bold text-lg mb-4">Enlaces</h3>
                        <ul className="space-y-2">
                            <li><Link href="/" className="text-gray-400 hover:text-amber-400 transition-colors">Home</Link></li>
                            <li><Link href="/about" className="text-gray-400 hover:text-amber-400 transition-colors">Acerca de</Link></li>
                            <li><Link href="/contact" className="text-gray-400 hover:text-amber-400 transition-colors">Contacto</Link></li>
                        </ul>
                    </nav>
                    <div>
                        <h3 className="font-bold text-lg mb-4">Información</h3>
                        <p className="text-gray-400 text-sm">Email: info@recetasapp.com</p>
                        <p className="text-gray-400 text-sm mt-2">Teléfono: +34 000 000 000</p>
                    </div>
                </div>
                <div className="border-t border-slate-800 pt-6 text-center">
                    <p className="text-gray-400 text-sm">&copy; {currentYear} Recetas App. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;