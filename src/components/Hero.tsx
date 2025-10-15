import React from 'react';
import Link from 'next/link';
import { ChevronRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://i.imgur.com/j0w2HdT.png"
          alt="Painéis solares e energia renovável"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Descubra qual <span className="text-[#4CAF50]">Energia Renovável</span> é ideal para você
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              Compare fontes, entenda os impactos e tome decisões conscientes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#calc" >
                <button className="bg-[#4CAF50] hover:bg-[#1B5E20] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Comece agora
                  <ChevronRight className="inline ml-2 w-5 h-5" />
                </button>
              </Link>

              <Link href="#faq">
                <button className="bg-gray-200 hover:bg-white text-[#4CAF50] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  <Play className="inline mr-2 w-5 h-5" />
                  Saiba Mais
                </button>
              </Link>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src="https://i.imgur.com/pJEwnIW.png"
                alt="Ilustração energia renovável"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
