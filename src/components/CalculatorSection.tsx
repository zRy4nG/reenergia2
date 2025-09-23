'use client'

import React, { useState } from 'react';
import { Calculator, MapPin, Zap, Home } from 'lucide-react';

const CalculatorSection = () => {
  const [formData, setFormData] = useState({
    location: '',
    consumption: '',
    area: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCalculate = () => {
    console.log('Calculando...', formData);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img 
                src="https://i.imgur.com/LYna9H6.png"
                className="w-[500px] rounded-2xl"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="bg-[#E8F5E9] rounded-3xl p-8 lg:p-10">
              <div className="text-center mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-[#1B5E20] mb-4">
                  Descubra a fonte ideal de energia renovável para Você
                </h2>
                <p className="text-[#4CAF50] text-lg">
                  Preencha os dados abaixo para uma análise personalizada
                </p>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-[#1B5E20] font-semibold">
                    <MapPin className="w-5 h-5" />
                    Localização
                  </label>
                  <select 
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full p-4 rounded-xl border-2 border-[#4CAF50] focus:border-[#1B5E20] focus:outline-none transition-colors duration-300 text-black"
                  >
                    <option value="">Selecione sua região</option>
                    <option value="norte">Norte</option>
                    <option value="nordeste">Nordeste</option>
                    <option value="centro-oeste">Centro-Oeste</option>
                    <option value="sudeste">Sudeste</option>
                    <option value="sul">Sul</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-[#1B5E20] font-semibold">
                    <Zap className="w-5 h-5" />
                    Consumo médio mensal
                  </label>
                  <input 
                    type="number"
                    name="consumption"
                    value={formData.consumption}
                    onChange={handleInputChange}
                    placeholder="Ex: 300 kWh"
                    className="w-full p-4 rounded-xl border-2 border-[#4CAF50] focus:border-[#1B5E20] focus:outline-none transition-colors duration-300 text-black"
                  />
                </div>

                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-[#1B5E20] font-semibold">
                    <Home className="w-5 h-5" />
                    Área disponível
                  </label>
                  <input 
                    type="number"
                    name="area"
                    value={formData.area}
                    onChange={handleInputChange}
                    placeholder="Ex: 50 m²"
                    className="w-full p-4 rounded-xl border-2 border-[#4CAF50] focus:border-[#1B5E20] focus:outline-none transition-colors duration-300 text-black"
                  />
                </div>

                <button 
                  onClick={handleCalculate}
                  className="w-full bg-[#4CAF50] hover:bg-[#1B5E20] text-white py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <Calculator className="inline mr-2 w-5 h-5" />
                  Calcular
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;