import React from 'react';

export function PrivacyPage() {
  return (
    <div className="w-full min-h-screen py-32 lg:py-40 bg-zinc-950 text-zinc-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tighter font-serif font-bold text-white mb-12">
          Política de Privacidad
        </h1>
        
        <div className="space-y-10 text-lg font-light leading-relaxed">
          <section>
            <h2 className="text-2xl font-serif font-bold text-[#ffcd75] mb-4">1. Introducción</h2>
            <p>
              En AD Madureira Madrid, nos tomamos muy en serio la privacidad de nuestros usuarios y visitantes. Esta Política de Privacidad describe cómo recopilamos, utilizamos y protegemos la información personal que usted nos proporciona al utilizar nuestro sitio web y nuestros servicios.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-[#ffcd75] mb-4">2. Información que Recopilamos</h2>
            <p>
              Podemos recopilar información personal que usted nos proporciona voluntariamente, como su nombre, dirección de correo electrónico, número de teléfono y cualquier otra información que decida compartir con nosotros a través de formularios de contacto, suscripciones a boletines o al registrarse para eventos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-[#ffcd75] mb-4">3. Uso de la Información</h2>
            <p>
              La información que recopilamos se utiliza para comprender sus necesidades y brindarle un mejor servicio, en particular por las siguientes razones:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-zinc-400">
              <li>Mantenimiento de registros internos.</li>
              <li>Mejora de nuestros servicios y comunicaciones.</li>
              <li>Envío de correos electrónicos promocionales sobre nuevos eventos, servicios u otra información que consideremos de su interés.</li>
              <li>Para contactarlo con fines de investigación de mercado o encuestas.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-[#ffcd75] mb-4">4. Seguridad de los Datos</h2>
            <p>
              Estamos comprometidos a asegurar que su información esté segura. Con el fin de evitar el acceso o divulgación no autorizados, hemos implementado procedimientos físicos, electrónicos y administrativos adecuados para salvaguardar y asegurar la información que recopilamos en línea.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-[#ffcd75] mb-4">5. Uso de Cookies</h2>
            <p>
              Nuestro sitio web puede utilizar "cookies" para mejorar la experiencia del usuario. Una cookie es un pequeño archivo que pide permiso para ser colocado en el disco duro de su ordenador. Una vez que usted acepta, el archivo se añade y la cookie ayuda a analizar el tráfico web o le permite saber cuándo visita un sitio en particular. Puede elegir aceptar o rechazar las cookies modificando la configuración de su navegador.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-[#ffcd75] mb-4">6. Enlaces a Otros Sitios Web</h2>
            <p>
              Nuestro sitio web puede contener enlaces a otros sitios de interés. Sin embargo, una vez que haya utilizado estos enlaces para salir de nuestro sitio, debe tener en cuenta que no tenemos ningún control sobre ese otro sitio web. Por lo tanto, no podemos ser responsables de la protección y privacidad de cualquier información que usted proporcione mientras visita dichos sitios.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-[#ffcd75] mb-4">7. Sus Derechos</h2>
            <p>
              Usted tiene derecho a solicitar detalles de la información personal que tenemos sobre usted. Si cree que cualquier información que tenemos sobre usted es incorrecta o está incompleta, por favor escríbanos o envíenos un correo electrónico lo antes posible. Corregiremos rápidamente cualquier información que sea incorrecta.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
