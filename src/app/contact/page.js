export default function Contact() {
  return (
    <main className="flex-grow bg-slate-900 text-white py-12 px-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Contacto</h1>
        <p className="text-gray-300 mb-8">
          ¿Tienes preguntas o sugerencias? Nos encantaría escucharte.
        </p>
        
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Nombre</label>
            <input 
              type="text" 
              className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-400"
              placeholder="Tu nombre"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input 
              type="email" 
              className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-400"
              placeholder="tu@email.com"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Mensaje</label>
            <textarea 
              className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 h-32 resize-none"
              placeholder="Tu mensaje..."
            ></textarea>
          </div>
          
          <button 
            type="submit"
            className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-2 px-4 rounded-lg transition-colors"
          >
            Enviar
          </button>
        </form>
      </div>
    </main>
  );
}
