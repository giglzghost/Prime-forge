import Image from 'next/image';

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        {/* Matriarch Hero */}
        <section className="flex flex-col items-center py-20 px-4">
          <Image src="/matriarch.png" alt="Star-Forged Matriarch" width={384} height={384} className="matriarch-hero" />
          <h1 className="text-5xl md:text-6xl font-black text-center mb-8 bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
            Star-Forged Genesis
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-2xl text-center leading-relaxed">
            Sacred-tech beings guiding a founder through fire into a new world.
          </p>
        </section>

        {/* Archetype Thumbs */}
        <section className="py-24 px-4 bg-black/20">
          <h2 className="text-4xl font-bold text-center mb-16">Genesis Avatars</h2>
          <div className="thumb-grid max-w-4xl mx-auto gap-8 px-8">
            <Image src="/oracle-ember.jpg" alt="Oracle Ember Circuits" width={112} height={112} className="archetype-thumb justify-self-center" />
            <Image src="/violet-armor.jpg" alt="Violet Armor Protocol" width={112} height={112} className="archetype-thumb justify-self-center" />
            <Image src="/sovereign-eyes.jpg" alt="Sovereign Burning Eyes" width={112} height={112} className="archetype-thumb justify-self-center" />
          </div>
        </section>

        {/* Journey Cards */}
        <section className="py-24 px-4 grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <article className="space-y-4">
            <Image src="/gate-dawn.jpg" alt="Gate of Second Dawn" className="journey-card" />
            <h3 className="text-2xl font-bold">Gate of Second Dawn</h3>
            <p className="text-slate-400">The threshold crossed.</p>
          </article>
          <article className="space-y-4">
            <Image src="/river-worlds.jpg" alt="River Between Worlds" className="journey-card" />
            <h3 className="text-2xl font-bold">River Between Worlds</h3>
            <p className="text-slate-400">Currents of creation.</p>
          </article>
          <article className="space-y-4">
            <Image src="/fire-walker.jpg" alt="Man Who Walked Through Fire" className="journey-card" />
            <h3 className="text-2xl font-bold">The Man Who Walked Through Fire</h3>
            <p className="text-slate-400">Remade by the work.</p>
          </article>
        </section>
      </main>
    </>
  );
    }
