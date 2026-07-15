"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function DespachoPage() {
  const focusFirstField = (e) => {
    e.preventDefault();
    const formElement = document.getElementById("solicitud-revision");
    formElement?.scrollIntoView({ behavior: "smooth" });
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
                Antes de importar, <br />
                <span className="text-brand-teal">asegúrate de que todo esté listo.</span>
              </h1>

              <div className="space-y-3 opacity-0 animate-fade-in-up delay-75">
                <p className="text-brand-teal font-semibold text-sm sm:text-base uppercase tracking-wider">
                  ¿Qué revisar antes de importar?
                </p>
                <ul className="space-y-4 text-white text-sm sm:text-base">
                  <li className="flex items-start gap-3.5 group">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#0070c0] flex items-center justify-center text-white mt-0.5 transition-transform duration-300 group-hover:scale-110">
                      <svg className="w-3.5 h-3.5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span className="transition-all duration-300 group-hover:text-slate-100 group-hover:translate-x-1 font-semibold">Clasificación arancelaria de la mercancía.</span>
                  </li>
                  <li className="flex items-start gap-3.5 group">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#0070c0] flex items-center justify-center text-white mt-0.5 transition-transform duration-300 group-hover:scale-110">
                      <svg className="w-3.5 h-3.5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span className="transition-all duration-300 group-hover:text-slate-100 group-hover:translate-x-1 font-semibold">Permisos, NOM y regulaciones aplicables.</span>
                  </li>
                  <li className="flex items-start gap-3.5 group">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#0070c0] flex items-center justify-center text-white mt-0.5 transition-transform duration-300 group-hover:scale-110">
                      <svg className="w-3.5 h-3.5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span className="transition-all duration-300 group-hover:text-slate-100 group-hover:translate-x-1 font-semibold">Documentación requerida para el despacho.</span>
                  </li>
                </ul>
              </div>

              <p className="text-slate-200 text-sm sm:text-base leading-relaxed opacity-0 animate-fade-in-up delay-200 max-w-xl">
                Una importación puede detenerse por un permiso faltante, una clasificación incorrecta o un requisito no identificado a tiempo. Validar tu operación antes del embarque ayuda a evitar retrasos, multas y costos innecesarios.
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
            <div className="lg:col-span-6 bg-white rounded-2xl reveal space-y-6">
              <div className="space-y-3">
                <h2 className="font-display font-bold text-2.5xl sm:text-3xl text-text-navy tracking-tight">
                  Revisemos tu operación de importación.
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Comparte los datos de tu operación y un especialista revisará contigo los requisitos, permisos y puntos críticos antes de iniciar el proceso de importación.
                </p>
              </div>
              <div className="min-h-[713px]">
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/MyRakixaLULW87wk35mZ"
                  style={{ width: "100%", height: "713px", border: "none", borderRadius: "4px" }}
                  id="inline-MyRakixaLULW87wk35mZ" 
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="01. Luhai - Landing Page Contenedor."
                  data-height="713"
                  data-layout-iframe-id="inline-MyRakixaLULW87wk35mZ"
                  data-form-id="MyRakixaLULW87wk35mZ"
                  title="01. Luhai - Landing Page Contenedor."
                ></iframe>
                <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
              </div>
            </div>

            {/* Información (Derecha) */}
            <div className="lg:col-span-6 space-y-8 lg:pt-2">
              
              <h3 className="font-display font-extrabold text-xl sm:text-2xl text-text-navy tracking-tight reveal">
                 Los errores más costosos ocurren antes de llegar a la aduana.
              </h3>
              
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed reveal delay-75">
                 Muchos retrasos, retenciones o multas no comienzan durante el despacho, sino antes del embarque. Una validación oportuna puede ayudarte a evitar costos innecesarios y mantener el control de tu importación.
              </p>

              <div className="space-y-3 reveal delay-150 pt-2">
                 <p className="text-brand-navy font-semibold text-sm uppercase tracking-wider">
                   Lo que puedes prevenir
                 </p>
                 <ul className="space-y-3.5 text-slate-700 text-sm sm:text-base">
                   <li className="flex items-center gap-3 group">
                     <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-orange flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110">
                       <svg className="w-3.5 h-3.5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                         <polyline points="20 6 9 17 4 12" />
                       </svg>
                     </span>
                     <span className="font-medium text-slate-700 transition-all duration-300 group-hover:text-slate-900 group-hover:translate-x-1">Clasificaciones arancelarias incorrectas.</span>
                   </li>
                   <li className="flex items-center gap-3 group">
                     <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-orange flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110">
                       <svg className="w-3.5 h-3.5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                         <polyline points="20 6 9 17 4 12" />
                       </svg>
                     </span>
                     <span className="font-medium text-slate-700 transition-all duration-300 group-hover:text-slate-900 group-hover:translate-x-1">Permisos o NOM no considerados.</span>
                   </li>
                   <li className="flex items-center gap-3 group">
                     <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-orange flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110">
                       <svg className="w-3.5 h-3.5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                         <polyline points="20 6 9 17 4 12" />
                       </svg>
                     </span>
                     <span className="font-medium text-slate-700 transition-all duration-300 group-hover:text-slate-900 group-hover:translate-x-1">Documentación incompleta.</span>
                   </li>
                   <li className="flex items-center gap-3 group">
                     <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-orange flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110">
                       <svg className="w-3.5 h-3.5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                         <polyline points="20 6 9 17 4 12" />
                       </svg>
                     </span>
                     <span className="font-medium text-slate-700 transition-all duration-300 group-hover:text-slate-900 group-hover:translate-x-1">Mercancía retenida o retrasos en el despacho.</span>
                   </li>
                 </ul>
              </div>

              {/* Bloque Destacado de Texto (CTA FINAL) */}
              <div className="space-y-3 border-t border-slate-200 pt-6 reveal delay-200">
                <h3 className="font-display text-2xl sm:text-3xl text-text-navy leading-tight">
                  <span className="font-extrabold">Una buena importación</span> <span className="font-normal">comienza con una</span> <br />
                  <span className="font-extrabold">buena planeación.</span>
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                  Revisar tu operación antes del embarque permite tomar mejores decisiones, reducir riesgos y mantener la continuidad de tu cadena de suministro.
                </p>
              </div>

              {/* Botón de Acción Secundario (Azul) */}
              <div className="pt-2 reveal delay-300">
                <a
                  href="#solicitud-revision"
                  onClick={focusFirstField}
                  className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#0070c0] hover:bg-[#005da0] text-white font-semibold text-sm sm:text-base transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 active:scale-95"
                >
                  Solicita una revisión inicial
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
