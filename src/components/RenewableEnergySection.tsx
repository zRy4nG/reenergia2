import React from 'react';
import Image from 'next/image';

const RenewableEnergySection = () => {
  const energyTypes = [
    {
      icon: 'https://i.imgur.com/Ym8AbOm.png',
      title: "Energia Solar",
      description: "Limpa, acessível, ideal para locais ensolarados.",
      color: "text-yellow-500"
    },
    {
      icon: 'https://i.imgur.com/XtTEe3v.png',
      title: "Eólica",
      description: "Gera energia com o vento, ideal para regiões altas/costeiras.",
      color: "text-blue-500"
    },
    {
      icon: 'https://i.imgur.com/MXLJIfp.png',
      title: "Hídrica",
      description: "Usa a força da água. Ampla no Brasil.",
      color: "text-blue-600"
    },
    {
      icon: 'https://i.imgur.com/OqdgubU.png',
      title: "Biomassa",
      description: "Reaproveita matéria orgânica.",
      color: "text-green-600"
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-[#F5F7F2]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B5E20] mb-6">
            O que são Energias Renováveis?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {energyTypes.map((energy, index) => {
            const image = energy.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="text-center">
                  <div className={`inline-flex p-4 rounded-full mb-6`}>
                    <Image
                        src={image}
                        width={130}
                        height={130}
                        alt="Picture of the author"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#1B5E20] mb-4">
                    {energy.title}
                  </h3>
                  <p className="text-[#555555] leading-relaxed">
                    {energy.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RenewableEnergySection;