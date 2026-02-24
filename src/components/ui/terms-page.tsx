import React from 'react';

export function TermsPage() {
  return (
    <div className="w-full min-h-screen py-32 lg:py-40 bg-zinc-950 text-zinc-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tighter font-serif font-bold text-white mb-12">
          Términos y Condiciones
        </h1>
        
        <div className="space-y-10 text-lg font-light leading-relaxed">
          <section>
            <h2 className="text-2xl font-serif font-bold text-[#ffcd75] mb-4">1. Introducción</h2>
            <p>
              Bienvenido a la página web de AD Madureira Madrid. Al acceder y utilizar este sitio web, usted acepta cumplir con los siguientes Términos y Condiciones. Si no está de acuerdo con alguna parte de estos términos, le rogamos que no utilice nuestro sitio web.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-[#ffcd75] mb-4">2. Uso del Sitio Web</h2>
            <p>
              El contenido de las páginas de este sitio web es para su información y uso general. Está sujeto a cambios sin previo aviso. Ni nosotros ni ningún tercero ofrecemos ninguna garantía en cuanto a la exactitud, puntualidad, rendimiento, integridad o idoneidad de la información y los materiales encontrados u ofrecidos en este sitio web para cualquier propósito particular.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-[#ffcd75] mb-4">3. Propiedad Intelectual</h2>
            <p>
              Este sitio web contiene material que es de nuestra propiedad o del cual tenemos licencia. Este material incluye, pero no se limita a, el diseño, la presentación, el aspecto, la apariencia y los gráficos. Queda prohibida la reproducción salvo de conformidad con el aviso de copyright, que forma parte de estos términos y condiciones.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-[#ffcd75] mb-4">4. Enlaces a Terceros</h2>
            <p>
              De vez en cuando, este sitio web también puede incluir enlaces a otros sitios web. Estos enlaces se proporcionan para su conveniencia para proporcionar más información. No significan que respaldemos el(los) sitio(s) web. No tenemos ninguna responsabilidad por el contenido del(los) sitio(s) web vinculado(s).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-[#ffcd75] mb-4">5. Limitación de Responsabilidad</h2>
            <p>
              El uso de cualquier información o material en este sitio web es bajo su propio riesgo, por lo cual no seremos responsables. Será su propia responsabilidad asegurarse de que cualquier producto, servicio o información disponible a través de este sitio web cumpla con sus requisitos específicos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-[#ffcd75] mb-4">6. Modificaciones</h2>
            <p>
              AD Madureira Madrid se reserva el derecho de revisar estos términos y condiciones en cualquier momento. Al utilizar este sitio web, se espera que revise estos términos de forma regular para asegurarse de que comprende todos los términos y condiciones que rigen el uso de este sitio web.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
