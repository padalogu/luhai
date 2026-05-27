"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function DespachoGraciasPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return null;
  }

  const name = sessionStorage.getItem("leadName");
  const company = sessionStorage.getItem("leadCompany");

  const msg = name ? (
    <>
      ¡Gracias, <span className="text-brand-orange font-semibold">{name}</span>! Hemos recibido tu solicitud
      {company && (
        <>
          {" "}
          para la empresa <span className="text-white font-semibold">{company}</span>
        </>
      )}
      . Un especialista de <span className="text-brand-teal font-semibold">Luhai</span> se comunicará contigo a la brevedad para realizar la revisión inicial de tus contenedores.
    </>
  ) : (
    <>
      Gracias por ponerte en contacto. Un especialista de{" "}
      <span className="text-brand-teal font-semibold">Luhai</span> se comunicará contigo a la brevedad para coordinar la revisión de tus contenedores.
    </>
  );


  return (
    <div className="bg-brand-navy text-slate-200 font-sans antialiased selection:bg-brand-teal selection:text-white min-h-screen flex flex-col justify-between relative overflow-hidden">
      {/* Decoración de Red en la esquina superior derecha */}
      <div className="absolute -top-16 -right-16 sm:-top-24 sm:-right-24 md:-top-32 md:-right-32 lg:-top-40 lg:-right-40 w-[280px] sm:w-[380px] md:w-[450px] lg:w-[550px] pointer-events-none select-none z-0 opacity-40">
        <img src="/img/despacho/Grupo 232.png" alt="Decoración de red" className="w-full h-auto object-contain" />
      </div>

      {/* Decoración de Red en la esquina inferior izquierda */}
      <div className="absolute -bottom-16 -left-16 sm:-bottom-24 sm:-left-24 md:-bottom-32 md:-left-32 lg:-bottom-40 lg:-left-40 w-[280px] sm:w-[380px] md:w-[450px] lg:w-[550px] pointer-events-none select-none z-0 opacity-40">
        <img src="/img/despacho/Grupo 233.png" alt="Decoración de red" className="w-full h-auto object-contain" />
      </div>

      {/* Header / Logo */}
      <header className="w-full max-w-7xl mx-auto px-6 py-8 relative z-10 flex justify-center sm:justify-start">
        <Link href="/despacho-contenedores" className="opacity-0 animate-fade-in">
          <img src="/img/despacho/Grupo 1.png" alt="Luhai Servicios Aduanales" className="h-16 w-auto object-contain transition-transform duration-300 hover:scale-105" />
        </Link>
      </header>

      {/* Contenido Central */}
      <main className="flex-grow flex items-center justify-center px-6 relative z-10 my-12">
        <div className="max-w-2xl text-center space-y-8 bg-slate-950/40 backdrop-blur-md border border-slate-900/60 p-8 sm:p-12 rounded-3xl shadow-2xl opacity-0 animate-fade-in-up">
          
          {/* Icono de Éxito */}
          <div className="mx-auto w-20 h-20 rounded-full bg-brand-teal/10 flex items-center justify-center border border-brand-teal/30">
            <svg className="w-10 h-10 text-brand-teal check-svg" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          {/* Títulos y Mensaje Personalizado */}
          <div className="space-y-4">
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight text-white">
              ¡Tu solicitud ha sido recibida con éxito!
            </h1>
            
            <p id="thank-you-msg" className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-lg mx-auto">
              {msg}
            </p>
          </div>

          {/* Información adicional */}
          <div className="border-t border-slate-800/80 pt-6 space-y-2">
            <p className="text-slate-400 text-sm">¿Tienes una urgencia operativa con un contenedor?</p>
            <p className="text-white font-semibold font-display text-base">
              Llámanos o escríbenos directamente para acelerar el proceso.
            </p>
          </div>

          {/* Botón de retorno */}
          <div className="pt-4">
            <div className="animate-idle-float inline-block">
              <Link href="/despacho-contenedores" className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-brand-teal hover:bg-[#008f84] text-white font-semibold text-sm transition-all duration-300 shadow-lg shadow-brand-teal/20 hover:shadow-brand-teal/40 hover:shadow-xl hover:scale-105 active:scale-95">
                Volver al inicio
                <svg className="w-4 h-4 transform -translate-x-0.5 group-hover:-translate-x-1.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </Link>
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-8 border-t border-slate-900/40 relative z-10 bg-slate-950/20">
        <div className="max-w-7xl mx-auto px-6 text-center text-xs sm:text-sm text-slate-500 font-medium">
          <span>Luhai © 2026 Todos los derechos reservados.</span>
        </div>
      </footer>
    </div>
  );
}
