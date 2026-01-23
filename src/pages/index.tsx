import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Auto-load all from public/images/
    const loadImages = async () => {
      const res = await fetch('/images/'); // Dir listing stub; replace with your list
      // Or hardcode your uploaded names here post-upload
      setImages(['matriarch.png', 'oracle.jpg', 'violet.jpg', 'sovereign.jpg', 'gate.jpg', 'river.jpg', 'fire.jpg']);
    };
    loadImages();
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 to-black text-white">
      {/* Hero: First image */}
      {images[0] && (
        <section className="py-20 text-center">
          <Image src={`/images/${images[0]}`} alt="Hero" width={400} height={400} className="mx-auto w-96 h-96 rounded-full object-cover shadow-2xl" />
          <h1 className="text-6xl font-black mt-8 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">Prime Forge Genesis</h1>
        </section>
      )}
      {/* Thumbs: Next 3 */}
      <section className="py-16 bg-black/30">
        <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
          {images.slice(1,4).map((img, i) => (
            <Image key={i} src={`/images/${img}`} alt={`Thumb ${i+1}`} width={128} height={128} className="w-32 h-32 rounded-2xl object-cover shadow-xl hover:scale-110 transition" />
          ))}
        </div>
      </section>
      {/* Cards: Next 3 */}
      <section className="py-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {images.slice(4,7).map((img, i) => (
          <div key={i} className="space-y-4">
            <Image src={`/images/${img}`} alt={`Card ${i+1}`} width={400} height={250} className="w-full h-64 rounded-3xl object-cover shadow-2xl hover:shadow-glow" />
            <h3 className="text-2xl font-bold">Journey {i+1}</h3>
          </div>
        ))}
      </section>
    </main>
  );
            }
