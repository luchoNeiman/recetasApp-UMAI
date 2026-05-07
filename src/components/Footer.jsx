import Link from "next/link";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="mt-auto py-8 border-t" style={{ backgroundColor: "#1f2937", borderColor: "#374151" }}>
            <div className="container mx-auto px-6 sm:px-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h3 className="font-bold text-lg mb-4" style={{ color: "#ffffff" }}>Recetas App</h3>
                        <p className="text-sm" style={{ color: "#d1d5db" }}>Explora miles de recetas deliciosas de diferentes cocinas del mundo.</p>
                    </div>
                    <nav>
                        <h3 className="font-bold text-lg mb-4" style={{ color: "#ffffff" }}>Enlaces</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link 
                                    href="/" 
                                    className="transition-colors duration-200"
                                    style={{ color: "#dbeafe" }}
                                    onMouseEnter={(e) => e.target.style.color = "#fbbf24"}
                                    onMouseLeave={(e) => e.target.style.color = "#dbeafe"}
                                >
                                    Inicio
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="/about" 
                                    className="transition-colors duration-200"
                                    style={{ color: "#dbeafe" }}
                                    onMouseEnter={(e) => e.target.style.color = "#fbbf24"}
                                    onMouseLeave={(e) => e.target.style.color = "#dbeafe"}
                                >
                                    Acerca de
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div>
                        <h3 className="font-bold text-lg mb-4" style={{ color: "#ffffff" }}>Información</h3>
                        <p className="text-sm" style={{ color: "#d1d5db" }}>Email: info@recetasapp.com</p>
                        <p className="text-sm mt-2" style={{ color: "#d1d5db" }}>Teléfono: +34 000 000 000</p>
                    </div>
                </div>
                <div className="pt-6 text-center" style={{ borderTop: "1px solid #374151" }}>
                    <p className="text-sm" style={{ color: "#d1d5db" }}>&copy; {currentYear} Recetas App. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;