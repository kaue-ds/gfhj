import React from 'react';

import { ArrowLeft } from "lucide-react";

export function BlogPostPage({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
  return (
    <div className="min-h-screen bg-zinc-950 pt-32 pb-24 text-zinc-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        
        <button 
          onClick={() => setCurrentPage('blog')}
          className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors w-fit mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al Blog
        </button>

        {/* Header Image */}
        <div className="w-full h-[400px] rounded-2xl overflow-hidden mb-12 relative">
          <img 
            src="https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=2000&auto=format&fit=crop" 
            alt="El Nuevo Nacimiento" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent" />
        </div>

        {/* Blog Content */}
        <article className="prose prose-invert prose-zinc max-w-none prose-headings:font-serif prose-headings:text-white prose-a:text-[#ffcd75] prose-a:no-underline hover:prose-a:underline">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">El Nuevo Nacimiento: Tu Nueva Vida en la Familia de Dios</h1>
          
          <p className="text-lg leading-relaxed mb-8">
            ¿Alguna vez te has preguntado qué significa realmente "nacer de nuevo"? Si has entregado tu vida a Jesucristo, estás experimentando algo extraordinario: el inicio de una <strong>relación eterna con Dios</strong>. Este proceso no es simplemente un cambio de religión, sino una <strong>metamorfosis espiritual</strong> profunda y real.
          </p>

          <p className="text-lg leading-relaxed mb-12">
            En este artículo, exploraremos juntos lo que la Palabra de Dios enseña sobre este nuevo comienzo, confirmando cada verdad con las Escrituras para que tengas la certeza absoluta de que este camino es auténtico y transformador.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-white">¿Qué es el Nuevo Nacimiento?</h2>
          
          <p className="text-lg leading-relaxed mb-6">
            Jesús mismo explicó este concepto a Nicodemo, un principal entre los judíos. En esa conversación nocturna, Jesús aclaró que no estaba hablando de un nacimiento físico, sino de un <strong>proceso espiritual</strong> fundamental.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            <strong>Jesús le dijo:</strong> <em>"De cierto, de cierto te digo, que el que no naciere de agua y del Espíritu, no puede entrar en el reino de Dios"</em> (<a href="https://www.biblegateway.com/passage/?search=Juan+3%3A5&version=RVR1960" target="_blank" rel="noopener noreferrer"><strong>Juan 3:5</strong></a>).
          </p>

          <p className="text-lg leading-relaxed mb-12">
            Esto significa algo poderoso: has dejado de pertenecer al "reino de las tinieblas" para ser <strong>trasladado al Reino de su amado Hijo</strong> (<a href="https://www.biblegateway.com/passage/?search=Colosenses+1%3A13&version=RVR1960" target="_blank" rel="noopener noreferrer"><strong>Colosenses 1:13</strong></a>). Tu vida tiene ahora un nuevo Rey, una nueva dirección, y un nuevo destino.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Una Nueva Identidad: Eres Hijo de Dios</h2>
          
          <p className="text-lg leading-relaxed mb-6">
            Imagina por un momento la magnitud de esto: al nacer de nuevo, dejas de ser un extraño para convertirte en un <strong>miembro de la familia de Dios</strong>. Ya no estás fuera mirando hacia dentro; ahora estás dentro, con pleno acceso a una herencia eterna.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            La Biblia lo declara claramente: <em>"Mas a todos los que le recibieron, a los que creen en su nombre, les dio potestad de ser hechos hijos de Dios"</em> (<a href="https://www.biblegateway.com/passage/?search=Juan+1%3A12&version=RVR1960" target="_blank" rel="noopener noreferrer"><strong>Juan 1:12</strong></a>).
          </p>

          <p className="text-lg leading-relaxed mb-12">
            Esta no es una transformación superficial. <strong>Ahora eres una nueva criatura</strong>; las cosas viejas pasaron y todas son hechas nuevas (<a href="https://www.biblegateway.com/passage/?search=2+Corintios+5%3A17&version=RVR1960" target="_blank" rel="noopener noreferrer"><strong>2 Corintios 5:17</strong></a>). Tu identidad ya no está definida por tus errores pasados, sino por quien Dios dice que eres.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Un Regalo de Gracia, No de Obras</h2>
          
          <p className="text-lg leading-relaxed mb-6">
            Aquí viene una de las verdades más liberadoras del evangelio: la salvación y el nuevo nacimiento son un <strong>regalo gratuito de Dios</strong>. No puedes ganarlo con esfuerzos humanos, reglas religiosas o buenas obras. Simplemente no es posible.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            El apóstol Pablo lo expresó perfectamente: <em>"Porque por gracia sois salvos por medio de la fe; y esto no de vosotros, pues es don de Dios; no por obras, para que nadie se jacte"</em> (<a href="https://www.biblegateway.com/passage/?search=Efesios+2%3A8-9&version=RVR1960" target="_blank" rel="noopener noreferrer"><strong>Efesios 2:8-9</strong></a>).
          </p>

          <p className="text-lg leading-relaxed mb-12">
            Entonces, ¿cuál es el requisito? La salvación se recibe por medio de la <strong>fe en Jesucristo</strong> y el arrepentimiento de los pecados (<a href="https://www.biblegateway.com/passage/?search=Hechos+3%3A19&version=RVR1960" target="_blank" rel="noopener noreferrer"><strong>Hechos 3:19</strong></a>). Es así de simple, y así de profundo.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Las Dos Naturalezas: El Conflicto Interior</h2>
          
          <p className="text-lg leading-relaxed mb-6">
            Seamos honestos: aunque has nacido de nuevo en el espíritu, todavía conservas tu naturaleza vieja (la carne). Esto crea una lucha interna que todo cristiano genuino experimenta. No estás solo en esta batalla.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            La Escritura describe esta realidad: <em>"Porque los que son de la carne piensan en las cosas de la carne; pero los que son del Espíritu, en las cosas del Espíritu"</em> (<a href="https://www.biblegateway.com/passage/?search=Romanos+8%3A5&version=RVR1960" target="_blank" rel="noopener noreferrer"><strong>Romanos 8:5</strong></a>).
          </p>

          <p className="text-lg leading-relaxed mb-12">
            Pero aquí está la buena noticia: <strong>ahora tienes el poder del Espíritu Santo</strong> para hacer morir las obras de la carne y vivir para Dios (<a href="https://www.biblegateway.com/passage/?search=Romanos+8%3A13&version=RVR1960" target="_blank" rel="noopener noreferrer"><strong>Romanos 8:13</strong></a>). La victoria no depende de tu fuerza, sino de Su poder obrando en ti.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Alimentando tu Nueva Vida</h2>
          
          <p className="text-lg leading-relaxed mb-6">
            Piensa en un bebé recién nacido. Necesita leche constantemente para crecer y desarrollarse. De la misma manera, como un "recién nacido" en Cristo, debes tener hambre y sed de la <strong>leche espiritual pura</strong>, que es la Palabra de Dios.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Pedro nos exhorta: <em>"Desead, como niños recién nacidos, la leche espiritual no adulterada, para que por ella crezcáis para salvación"</em> (<a href="https://www.biblegateway.com/passage/?search=1+Pedro+2%3A2&version=RVR1960" target="_blank" rel="noopener noreferrer"><strong>1 Pedro 2:2</strong></a>).
          </p>

          <p className="text-lg leading-relaxed mb-12">
            Y no estás solo en este proceso de crecimiento. El Espíritu Santo, que ahora vive en ti, te enseñará todas las cosas y te guiará a la verdad (<a href="https://www.biblegateway.com/passage/?search=Juan+14%3A26&version=RVR1960" target="_blank" rel="noopener noreferrer"><strong>Juan 14:26</strong></a>). Él es tu maestro interno, tu consolador, y tu guía constante.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Tu Nueva Vida Comienza Ahora</h2>
          
          <p className="text-lg leading-relaxed mb-6">
            El nuevo nacimiento no es el final del camino; es el punto de partida hacia una <strong>vida con propósito y libertad</strong>. Tu seguridad no depende de tus sentimientos cambiantes o de tus circunstancias, sino de las <strong>promesas inamovibles de la Biblia</strong>.
          </p>

          <p className="text-lg leading-relaxed mb-12">
            ¡Regocíjate, porque ahora tienes una relación eterna con tu Creador! Eres Su hijo, Su obra maestra, y Él tiene planes maravillosos para tu vida. Bienvenido a la familia de Dios.
          </p>

        </article>
      </div>
    </div>
  );
}
