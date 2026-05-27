import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-brand-navy min-h-screen flex flex-col justify-between relative overflow-hidden text-white font-sans antialiased selection:bg-brand-teal selection:text-white">
      {/* Background Decor */}
      <div className="absolute -top-32 -right-32 w-[600px] pointer-events-none select-none opacity-20">
        <img src="/img/despacho/Grupo 232.png" alt="" className="w-full h-auto" />
      </div>
      <div className="absolute -bottom-32 -left-32 w-[600px] pointer-events-none select-none opacity-20">
        <img src="/img/despacho/Grupo 233.png" alt="" className="w-full h-auto" />
      </div>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center px-6 relative z-10 py-16">
        <div className="max-w-4xl w-full text-center space-y-12">
          {/* Logo */}
          <div className="flex justify-center transition-transform duration-300 hover:scale-105">
            <img
              src="/img/despacho/Grupo 1.png"
              alt="Luhai Servicios Aduanales"
              className="h-24 w-auto object-contain"
            />
          </div>

          <div className="space-y-4">
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight text-white">
              Portales de <span className="text-brand-orange">Luhai</span>
            </h1>
            <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto">
              Seleccione una de nuestras páginas de destino especializadas para comenzar su consulta con un especialista.
            </p>
          </div>

          {/* Cards for Landings */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto pt-6">
            
            {/* Card 1 */}
            <Link
              href="/despacho-contenedores"
              className="group relative bg-slate-950/40 hover:bg-slate-950/70 border border-slate-900/60 hover:border-brand-teal/50 p-8 rounded-3xl text-left shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-teal bg-brand-teal/10 rounded-full">
                  Operaciones
                </span>
                <h2 className="font-display font-bold text-2xl text-white group-hover:text-brand-teal transition-colors">
                  Despacho de Contenedores
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Evite retrasos y multas. Obtenga control, visibilidad y cumplimiento operativo especializado en aduanas.
                </p>
              </div>
              <div className="pt-6 flex items-center text-brand-teal font-semibold text-sm gap-1 group-hover:gap-2 transition-all duration-300">
                Ir a la Landing
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

            {/* Card 2 */}
            <Link
              href="/tu-operacion-no-puede-depender-de-improvisacion"
              className="group relative bg-slate-950/40 hover:bg-slate-950/70 border border-slate-900/60 hover:border-brand-orange/50 p-8 rounded-3xl text-left shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-orange bg-brand-orange/10 rounded-full">
                  Prevención
                </span>
                <h2 className="font-display font-bold text-2xl text-white group-hover:text-brand-orange transition-colors">
                  Control y Prevención
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Antes de importar, valide si su mercancía y documentación cumplen con todos los requisitos para evitar PAMAs y multas.
                </p>
              </div>
              <div className="pt-6 flex items-center text-brand-orange font-semibold text-sm gap-1 group-hover:gap-2 transition-all duration-300">
                Ir a la Landing
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-8 border-t border-slate-900/40 relative z-10 bg-slate-950/20 text-center text-xs sm:text-sm text-slate-500 font-medium">
        <span>Luhai © 2026 Todos los derechos reservados.</span>
      </footer>
    </div>
  );
}
