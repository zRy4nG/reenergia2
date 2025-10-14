import React from 'react';
import { Leaf, ExternalLink } from 'lucide-react';

const Footer = () => {
  const linkCategories = [
    {
      title: "Sites confiáveis sobre energia renovável",
      links: [
        { text: "Guia sobre transição energética", href: "https://nossaenergia.petrobras.com.br/w/transicao-energetica/tudo-sobre-transicao-energetica-o-que-e-qual-a-importancia-principais-beneficios-e-mais?gad_source=1&gad_campaignid=20943803028&gbraid=0AAAAAqvyogN-H0zE7rCdiUjo8UseD_T8_&gclid=Cj0KCQjw6bfHBhDNARIsAIGsqLh3ccG0SHu2DjtDzUjmCF9-Th9S6QJNeFmm2s5B_37dDORhF3NouWgaAq71EALw_wcB" },
        { text: "Enel", href: "https://www.enelgreenpower.com/pt" },
        { text: "Fontes renováveis de energia", href: "https://brasilescola.uol.com.br/geografia/fontes-renovaveis-energia.htm" },
      ]
    },
    {
      title: "Ferramentas para cálculos e estimativas",
      links: [
        { text: "Simulador de consumo", href: "https://enel-ce.simuladordeconsumo.com.br/" },
      ]
    },
    {
      title: "Outros",
      links: [
        // { text: "Link", href: "#" },
        // { text: "Link", href: "#" },
        // { text: "Link", href: "#" },
        // { text: "Link", href: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-[#1B5E20] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Leaf className="w-8 h-8 text-[#4CAF50]" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              O futuro é renovável e começa com a sua escolha
            </h2>
          </div>
          <div className="w-24 h-1 bg-[#4CAF50] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {linkCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-6 text-[#4CAF50]">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="group flex items-center justify-center md:justify-start gap-2 text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-[#4CAF50] pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Leaf className="w-6 h-6 text-[#4CAF50]" />
              <span className="font-semibold">ReEnergia</span>
            </div>
            <p className="text-gray-300 text-center md:text-right">
              © 2025 - Construindo um futuro sustentável
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer;
