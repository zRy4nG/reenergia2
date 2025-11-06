'use client';

import Navbar from './Navbar';
import React, { useState } from 'react';
import { Appliance, SimulationResult } from '../types/appliance';
import ApplianceList from './ApplianceList';
import ApplianceForm from './ApplianceForm';
import Results from './Results';

const EnergySimulator: React.FC = () => {
  const [appliances, setAppliances] = useState<Appliance[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [tariff, setTariff] = useState<number>(0.7547);

  const predefinedAppliances: Appliance[] = [
    { id: '1', name: 'Ar Condicionado', description: 'Ar condicionado 12000 BTU', quantity: 1, dailyUsage: 8, power: 1200 },
    { id: '2', name: 'Geladeira', description: 'Geladeira frost free', quantity: 1, dailyUsage: 24, power: 150 },
    { id: '3', name: 'TV LED', description: 'TV 55 polegadas', quantity: 1, dailyUsage: 6, power: 100 },
    { id: '4', name: 'Computador', description: 'Desktop com monitor', quantity: 1, dailyUsage: 8, power: 300 },
    { id: '5', name: 'Lâmpada LED', description: 'Lâmpada 9W', quantity: 1, dailyUsage: 5, power: 9 },
    { id: '6', name: 'Microondas', description: 'Microondas 1000W', quantity: 1, dailyUsage: 0.5, power: 1000 },
    { id: '7', name: 'Máquina de Lavar', description: 'Máquina 10kg', quantity: 1, dailyUsage: 1, power: 1000 },
  ];

  const calculateApplianceConsumption = (appliance: Appliance): Appliance => {
    const kWhPerMonth = (appliance.power * appliance.dailyUsage * 30 * appliance.quantity) / 1000;
    const costPerMonth = kWhPerMonth * tariff;
    
    return {
      ...appliance,
      kWhPerMonth: Number(kWhPerMonth.toFixed(2)),
      costPerMonth: Number(costPerMonth.toFixed(2))
    };
  };

  const addAppliance = (appliance: Appliance) => {
    const applianceWithCalc = calculateApplianceConsumption(appliance);
    setAppliances(prev => [...prev, applianceWithCalc]);
    setShowForm(false);
  };

  const removeAppliance = (id: string) => {
    setAppliances(prev => prev.filter(appliance => appliance.id !== id));
  };

  const updateAppliance = (id: string, updates: Partial<Appliance>) => {
    setAppliances(prev => prev.map(appliance => {
      if (appliance.id === id) {
        const updated = { ...appliance, ...updates };
        return calculateApplianceConsumption(updated);
      }
      return appliance;
    }));
  };

  const calculateResults = (): SimulationResult => {
    const totalConsumption = appliances.reduce((sum, appliance) => 
      sum + (appliance.kWhPerMonth || 0), 0
    );
    const totalCost = appliances.reduce((sum, appliance) => 
      sum + (appliance.costPerMonth || 0), 0
    );

    return {
      totalConsumption: Number(totalConsumption.toFixed(2)),
      totalCost: Number(totalCost.toFixed(2)),
      tariff
    };
  };

  const results = calculateResults();

  return (
    <div className="max-w-[80%] mx-auto p-6 bg-gray-50 min-h-screen mt-20">
        <Navbar />
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Simulador de Consumo de Energia
      </h1>

      {/* Lista de aparelhos pré-definidos */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Aparelhos Disponíveis</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          {predefinedAppliances.map(appliance => (
            <div
              key={appliance.id}
              className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer"
              onClick={() => addAppliance({
                ...appliance,
                id: Date.now().toString() // Novo ID para evitar duplicatas
              })}
            >
              <h3 className="font-medium text-gray-800">{appliance.name}</h3>
              <p className="text-sm text-gray-600">{appliance.description}</p>
              <p className="text-sm text-gray-500">
                {appliance.power}W • {appliance.dailyUsage}h/dia
              </p>
            </div>
          ))}
        </div>
        
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          + Adicionar Aparelho Personalizado
        </button>
      </div>

      {/* Formulário para aparelho personalizado */}
      {showForm && (
        <ApplianceForm
          onAdd={addAppliance}
          onCancel={() => setShowForm(false)}
        />
      )}

      {/* Lista de aparelhos adicionados */}
      <ApplianceList
        appliances={appliances}
        onRemove={removeAppliance}
        onUpdate={updateAppliance}
      />

      {/* Resultados */}
      {appliances.length > 0 && (
        <Results
          results={results}
          appliances={appliances}
          onTariffChange={setTariff}
        />
      )}
    </div>
  );
};

export default EnergySimulator;