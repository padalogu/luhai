"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function DespachoPage() {
  const router = useRouter();
  const nameInputRef = useRef(null);

  const focusFirstField = (e) => {
    e.preventDefault();
    nameInputRef.current?.focus();
    const formElement = document.getElementById("solicitud-revision");
    formElement?.scrollIntoView({ behavior: "smooth" });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const company = formData.get("company");
    
    sessionStorage.setItem("leadName", name);
    sessionStorage.setItem("leadCompany", company);
    
    router.push("/despacho-contenedores/gracias");
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* 1. HERO SECTION */}
      <section
        className="relative bg-brand-navy py-16 lg:py-20 border-b border-slate-900/30 overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/img/despacho/Banner copia.jpg')" }}
      >
        <div className="w-[90%] min-[1200px]:w-[80%] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          
          {/* Logo en Cabecera */}
          <div className="mb-14 flex justify-start opacity-0 animate-fade-in">
            <a href="#">
              <img
                src="/img/despacho/Grupo 1.png"
                alt="Luhai Servicios Aduanales"
                className="h-16 w-auto object-contain transition-transform duration-300 hover:scale-105"
              />
            </a>
          </div>

          {/* Contenido en Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Textos (Izquierda) */}
            <div className="lg:col-span-7 space-y-8">
              
              <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight text-white opacity-0 animate-fade-in-up">
                <span className="text-brand-orange">Despacho de contenedores</span> <br />
                <span className="text-brand-teal">con control y seguimiento real</span>
              </h1>

              <ul className="space-y-4 text-white text-sm sm:text-base opacity-0 animate-fade-in-up delay-100">
                <li className="flex items-start gap-3.5 group">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#0070c0] flex items-center justify-center text-white mt-0.5 transition-transform duration-300 group-hover:scale-110">
                    <svg className="w-3.5 h-3.5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span className="transition-all duration-300 group-hover:text-slate-100 group-hover:translate-x-1">Control documental antes del despacho</span>
                </li>
                <li className="flex items-start gap-3.5 group">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#0070c0] flex items-center justify-center text-white mt-0.5 transition-transform duration-300 group-hover:scale-110">
                    <svg className="w-3.5 h-3.5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span className="transition-all duration-300 group-hover:text-slate-100 group-hover:translate-x-1">Seguimiento claro durante la operación</span>
                </li>
                <li className="flex items-start gap-3.5 group">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#0070c0] flex items-center justify-center text-white mt-0.5 transition-transform duration-300 group-hover:scale-110">
                    <svg className="w-3.5 h-3.5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span className="transition-all duration-300 group-hover:text-slate-100 group-hover:translate-x-1">Reducción de errores, retenciones y retrasos</span>
                </li>
              </ul>

              <p className="text-slate-200 text-sm sm:text-base leading-relaxed opacity-0 animate-fade-in-up delay-200 max-w-xl">
                Para empresas importadoras que necesitan mayor visibilidad, cumplimiento y continuidad en cada operación.
              </p>

              <div className="pt-2 opacity-0 animate-fade-in-up delay-300">
                <div className="animate-idle-float inline-block">
                  <a
                    href="#solicitud-revision"
                    className="group inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-brand-teal hover:bg-[#008f84] text-white font-semibold text-sm transition-all duration-300 shadow-lg shadow-brand-teal/20 hover:shadow-brand-teal/40 hover:shadow-xl hover:scale-105 active:scale-95 animate-pulse-glow"
                  >
                    Solicita una revisión inicial
                    <svg className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>

            </div>

            <div className="lg:col-span-5 pointer-events-none select-none">
              <div className="h-32 sm:h-48 lg:h-[450px]"></div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. FORM & INFO SECTION */}
      <section id="solicitud-revision" className="relative bg-white text-slate-800 py-16 lg:py-24 overflow-hidden">
        <div className="absolute -top-16 -right-16 sm:-top-24 sm:-right-24 md:-top-32 md:-right-32 lg:-top-48 lg:-right-48 w-[320px] sm:w-[420px] md:w-[480px] lg:w-[650px] pointer-events-none select-none z-0">
          <img src="/img/despacho/Grupo 232.png" alt="Decoración de red" className="w-full h-auto object-contain" />
        </div>

        <div className="w-[90%] min-[1200px]:w-[80%] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Formulario (Izquierda) */}
            <div className="lg:col-span-6 bg-white rounded-2xl space-y-6 reveal">
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-text-navy tracking-tight">
                Solicita una revisión inicial
              </h2>
              
              <form onSubmit={handleFormSubmit} id="contact-form" className="space-y-4">
                
                <div>
                  <input
                    type="text"
                    name="name"
                    ref={nameInputRef}
                    required
                    placeholder="Nombre"
                    className="w-full px-4 py-3.5 rounded-lg border border-slate-300 hover:border-slate-400 focus:outline-none focus:border-brand-teal focus:ring-4 focus:ring-brand-teal/20 text-slate-800 placeholder-slate-400 text-sm sm:text-base transition-all duration-300"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="company"
                    required
                    placeholder="Empresa"
                    className="w-full px-4 py-3.5 rounded-lg border border-slate-300 hover:border-slate-400 focus:outline-none focus:border-brand-teal focus:ring-4 focus:ring-brand-teal/20 text-slate-800 placeholder-slate-400 text-sm sm:text-base transition-all duration-300"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Correo corporativo"
                    className="w-full px-4 py-3.5 rounded-lg border border-slate-300 hover:border-slate-400 focus:outline-none focus:border-brand-teal focus:ring-4 focus:ring-brand-teal/20 text-slate-800 placeholder-slate-400 text-sm sm:text-base transition-all duration-300"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="Teléfono"
                    className="w-full px-4 py-3.5 rounded-lg border border-slate-300 hover:border-slate-400 focus:outline-none focus:border-brand-teal focus:ring-4 focus:ring-brand-teal/20 text-slate-800 placeholder-slate-400 text-sm sm:text-base transition-all duration-300"
                  />
                </div>

                <div>
                  <select
                    name="frequency"
                    required
                    defaultValue=""
                    className="w-full px-4 py-3.5 rounded-lg border border-slate-300 hover:border-slate-400 focus:outline-none focus:border-brand-teal focus:ring-4 focus:ring-brand-teal/20 text-slate-800 placeholder-slate-400 text-sm sm:text-base transition-all duration-300 bg-white"
                  >
                    <option value="" disabled hidden>¿Cada cuánto importas contenedores?</option>
                    <option value="Semanalmente">Semanalmente</option>
                    <option value="Mensualmente">Mensualmente</option>
                    <option value="Eventualmente">Eventualmente</option>
                    <option value="Más de 5 contenedores al mes">Más de 5 contenedores al mes</option>
                  </select>
                </div>

                <div>
                  <select
                    name="situation"
                    required
                    defaultValue=""
                    className="w-full px-4 py-3.5 rounded-lg border border-slate-300 hover:border-slate-400 focus:outline-none focus:border-brand-teal focus:ring-4 focus:ring-brand-teal/20 text-slate-800 placeholder-slate-400 text-sm sm:text-base transition-all duration-300 bg-white"
                  >
                    <option value="" disabled hidden>¿Qué necesitas revisar?</option>
                    <option value="Próximo despacho de contenedor">Próximo despacho de contenedor</option>
                    <option value="Importaciones recurrentes">Importaciones recurrentes</option>
                    <option value="Cambio de proveedor aduanal">Cambio de proveedor aduanal</option>
                    <option value="Mercancía detenida o con retraso">Mercancía detenida o con retraso</option>
                    <option value="Revisión documental / cumplimiento">Revisión documental / cumplimiento</option>
                  </select>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-brand-teal hover:bg-[#008f84] text-white font-semibold text-sm sm:text-base transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 active:scale-95"
                  >
                    Hablar con un especialista
                    <svg className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>

              </form>
            </div>

            {/* Información (Derecha) */}
            <div className="lg:col-span-6 space-y-8 lg:pt-2">
              
              <h3 className="font-display font-bold text-xl sm:text-2xl text-text-navy tracking-tight reveal">
                ¿Cuándo solicitar una revisión?
              </h3>
              
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed reveal delay-75">
                Si tu empresa importa contenedores de forma recurrente, LUHAI puede ayudarte a revisar los puntos críticos antes de avanzar con el despacho.
              </p>

              <ul className="space-y-3.5 text-slate-700 text-sm sm:text-base reveal delay-150">
                <li className="flex items-center gap-3 group">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-orange flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110">
                    <svg className="w-3.5 h-3.5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span className="font-medium text-slate-700 transition-all duration-300 group-hover:text-slate-900 group-hover:translate-x-1">Importaciones recurrentes o próximas a despachar</span>
                </li>
                <li className="flex items-center gap-3 group">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-orange flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110">
                    <svg className="w-3.5 h-3.5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span className="font-medium text-slate-700 transition-all duration-300 group-hover:text-slate-900 group-hover:translate-x-1">Cambio de proveedor aduanal</span>
                </li>
                <li className="flex items-center gap-3 group">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-orange flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110">
                    <svg className="w-3.5 h-3.5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span className="font-medium text-slate-700 transition-all duration-300 group-hover:text-slate-900 group-hover:translate-x-1">Operaciones con poca visibilidad del avance</span>
                </li>
                <li className="flex items-center gap-3 group">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-orange flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110">
                    <svg className="w-3.5 h-3.5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span className="font-medium text-slate-700 transition-all duration-300 group-hover:text-slate-900 group-hover:translate-x-1">Necesidad de revisar documentación antes de liberar mercancía</span>
                </li>
              </ul>

              {/* Bloque Destacado de Texto (CTA FINAL) */}
              <div className="space-y-2 border-t border-slate-200 pt-6 reveal delay-200">
                <h3 className="font-display text-2xl sm:text-3xl text-text-navy leading-tight">
                  <span className="font-extrabold">Tu operación</span> <span className="font-normal">no puede</span> <br />
                  <span className="font-normal">depender de un</span> <span className="font-extrabold">despacho improvisado.</span>
                </h3>
                <p className="text-slate-500 text-sm sm:text-base font-medium">
                  Solicita una revisión y detecta cómo mejorar el control de tus importaciones.
                </p>
              </div>

              {/* Botón de Acción Secundario (Azul) */}
              <div className="pt-2 reveal delay-300">
                <a
                  href="#contact-form"
                  onClick={focusFirstField}
                  className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#0070c0] hover:bg-[#005da0] text-white font-semibold text-sm sm:text-base transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 active:scale-95"
                >
                  Solicitar revisión inicial
                  <svg className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 4. MIDDLE VESSEL BANNER */}
      <section className="w-full bg-[#001030] overflow-hidden reveal">
        <img
          src="/img/despacho/Banner-2.jpg"
          alt="Luhai Vessel Banner"
          className="w-full h-auto object-cover transition-transform duration-1000 hover:scale-[1.02]"
        />
      </section>

      {/* 5. FOOTER */}
      <footer className="relative bg-white text-slate-500 py-16 border-t border-slate-100 overflow-hidden">
        <div className="absolute -bottom-12 -left-12 sm:-bottom-16 sm:-left-16 md:-bottom-24 md:-left-24 lg:-bottom-36 lg:-left-36 w-[240px] sm:w-[320px] md:w-[400px] lg:w-[550px] pointer-events-none select-none z-0">
          <img src="/img/despacho/Grupo 233.png" alt="Decoración de red" className="w-full h-auto object-contain" />
        </div>

        <div className="w-[90%] min-[1200px]:w-[80%] mx-auto px-6 text-center space-y-6 relative z-10 reveal">
          
          <div className="flex justify-center transition-transform duration-300 hover:scale-105">
            <img src="/img/despacho/Grupo 11.png" alt="Luhai Servicios Aduanales Logo" className="h-16 w-auto object-contain" />
          </div>

          <div className="text-xs sm:text-sm text-slate-400 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 font-medium">
            <span>Luhai © 2026 Todos los derechos reservados.</span>
            <a href="#" className="hover:text-brand-teal transition-colors">Aviso de Privacidad.</a>
          </div>

        </div>
      </footer>
    </>
  );
}
