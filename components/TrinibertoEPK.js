import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export default function TrinibertoEPK() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <main className={`${isDarkMode ? "bg-[#1a1a1a] text-white" : "bg-white text-black"} font-sans transition-colors duration-500`}>
      {/* Toggle Theme */}
      <div className="fixed top-4 right-4 z-50">
        <Button variant="outline" onClick={toggleTheme}>
          {isDarkMode ? "Modo Claro" : "Modo Oscuro"}
        </Button>
      </div>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center bg-[url('/texture.jpg')] bg-cover bg-center">
        <h1 className="text-6xl font-bold tracking-wide mb-4">TRINIBERTO</h1>
        <p className="text-lg uppercase tracking-widest">DJ / Productor – Buenos Aires, Argentina</p>
        <div className="mt-6 flex gap-4">
          <Button variant="secondary" asChild>
            <a href="https://soundcloud.com/triniberto" target="_blank" rel="noopener noreferrer">Escuchar</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="mailto:trinibertomusic@gmail.com">Contactar</a>
          </Button>
        </div>
      </section>

      {/* Bio */}
      <section className="py-20 px-6 md:px-20 bg-[#121212]">
        <h2 className="text-3xl font-semibold mb-6">Bio</h2>
        <p className="text-lg leading-relaxed max-w-3xl">
          Triniberto es DJ y productor de Buenos Aires, activo desde principios del 2000 en la escena hip hop, electrónica y tropical del under local. Su recorrido se forjó en fiestas autogestivas, eventos independientes y festivales internacionales, donde fue desarrollando una identidad sólida y sin concesiones.
          <br /><br />
          Fue parte de ciclos pioneros como <strong>GOLDIE (2014)</strong>, que impulsó el trap antes de su masividad, y <strong>BAMBAATAA (2015)</strong>, una plataforma clave para el dancehall, los afrobeats y otros ritmos periféricos. Su sonido actual fusiona <strong>afrohouse, latin bass, baile funk, rare house y dancehall</strong>, en sesiones con narrativa, fuerza y baile.
        </p>
      </section>

      {/* Música / Estilo */}
      <section className="py-20 px-6 md:px-20 bg-[#1e1e1e]">
        <h2 className="text-3xl font-semibold mb-6">Estilo Musical</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          <li>Afrohouse</li>
          <li>Latin Bass</li>
          <li>Rare House</li>
          <li>Baile Funk</li>
          <li>Dancehall</li>
          <li>Drum and Bass</li>
        </ul>
        <blockquote className="italic text-lg border-l-4 border-orange-500 pl-4">
          “La pista como territorio de resistencia y goce.”
        </blockquote>
      </section>

      {/* Presentaciones Destacadas */}
      <section className="py-20 px-6 md:px-20 bg-[#121212]">
        <h2 className="text-3xl font-semibold mb-6">Presentaciones destacadas</h2>
        <ul className="space-y-4 text-lg">
          <li><strong>GOLDIE (2014)</strong> — Ciclo pionero del trap</li>
          <li><strong>BAMBAATAA (2015)</strong> — Ritmos afrodiaspóricos y dancehall</li>
          <li><strong>LES PIOLES (2018)</strong> — Fiesta queer autogestiva en CABA</li>
        </ul>
      </section>

      {/* Videos */}
      <section className="py-20 px-6 md:px-20 bg-[#1e1e1e]">
        <h2 className="text-3xl font-semibold mb-6">Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <iframe
            className="w-full aspect-video rounded-md shadow-lg"
            src="https://www.youtube.com/embed/eD0RCiu9yXc?start=1330"
            title="Set en vivo de Triniberto"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Galería */}
      <section className="py-20 px-6 md:px-20 bg-[#121212]">
        <h2 className="text-3xl font-semibold mb-6">Galería</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {["1vOS0p2ZwrRgBuQ_tA9A6le3eokPo_xrR", "1xzNrbz8apEwAS3qfIUEyuv7w8Mgb_GB_", "1jkDZkAKguuPIAW_0ZUd7v6mD8UY3CB5d"].map((id, idx) => (
            <a
              key={idx}
              href={`https://drive.google.com/uc?id=${id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`https://drive.google.com/uc?id=${id}`}
                alt={`Triniberto ${idx + 1}`}
                className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
              />
            </a>
          ))}
        </div>
      </section>

      {/* Contacto */}
      <section className="py-20 px-6 md:px-20 bg-[#1a1a1a] text-center">
        <h2 className="text-3xl font-semibold mb-4">Booking & Contacto</h2>
        <p className="mb-2">Disponible para DJ sets, curaduría musical, ciclos temáticos y producción de eventos.</p>
        <p className="mb-4">📩 trinibertomusic@gmail.com</p>
        <div className="flex justify-center gap-6">
          <Button variant="link" asChild>
            <a href="https://www.instagram.com/triniberto_/" target="_blank" rel="noopener noreferrer">Instagram</a>
          </Button>
          <Button variant="link" asChild>
            <a href="https://soundcloud.com/triniberto" target="_blank" rel="noopener noreferrer">SoundCloud</a>
          </Button>
          <Button variant="link" asChild>
            <a href="https://www.youtube.com/@triniberto_" target="_blank" rel="noopener noreferrer">YouTube</a>
          </Button>
        </div>
      </section>
    </main>
  );
}