'use client'

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "O que são energias renováveis?",
      answer: "Energias renováveis são fontes de energia que se regeneram naturalmente e não se esgotam com o uso, como solar, eólica, hídrica e biomassa. Elas são essenciais para um futuro sustentável."
    },
    {
      question: "Elas funcionam em dias nublados?",
      answer: "Sim! Embora a eficiência diminua em dias nublados, os painéis solares ainda geram energia. Além disso, sistemas de energia renovável podem incluir baterias para armazenamento."
    },
    {
      question: "É muito caro instalar?",
      answer: "O investimento inicial pode ser significativo, mas os custos têm diminuído drasticamente. A economia na conta de luz e incentivos governamentais tornam o retorno do investimento atrativo."
    },
    {
      question: "Posso vender o excedente?",
      answer: "Sim! No Brasil, através do sistema de compensação de energia elétrica, você pode injetar energia excedente na rede e receber créditos em sua conta de luz."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white/80">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#555555] mb-4">
            F.A.Q.
          </h2>
          <p className="text-xl text-[#555555]">
            Perguntas que nos fazem frequentemente
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#F5F7F2] rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between focus:outline-none"
              >
                <h3 className="text-lg md:text-xl font-semibold text-[#1B5E20] pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-[#4CAF50]" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-[#4CAF50]" />
                  )}
                </div>
              </button>
              
              <div className={`transition-all duration-300 ease-in-out ${
                openIndex === index 
                  ? 'max-h-96 opacity-100' 
                  : 'max-h-0 opacity-0'
              } overflow-hidden`}>
                <div className="px-6 pb-6">
                  <p className="text-[#555555] leading-relaxed text-base md:text-lg">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;