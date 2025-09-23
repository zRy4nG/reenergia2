import React from 'react';
import { Leaf, ExternalLink } from 'lucide-react';

const Footer = () => {
  const linkCategories = [
    {
      title: "Sites confiáveis sobre energia renovável",
      links: [
        { text: "Link", href: "#" },
        { text: "Link", href: "#" },
        { text: "Link", href: "#" },
        { text: "Link", href: "#" }
      ]
    },
    {
      title: "Ferramentas para cálculos e estimativas",
      links: [
        { text: "Link", href: "#" },
        { text: "Link", href: "#" },
        { text: "Link", href: "#" },
        { text: "Link", href: "#" }
      ]
    },
    {
      title: "Outros",
      links: [
        { text: "Link", href: "#" },
        { text: "Link", href: "#" },
        { text: "Link", href: "#" },
        { text: "Link", href: "#" }
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