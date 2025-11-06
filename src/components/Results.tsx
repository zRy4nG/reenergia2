import React from 'react';
import { SimulationResult, Appliance } from '../types/appliance';
import { generatePDF } from '../utils/pdfGenerator';

interface ResultsProps {
  results: SimulationResult;
  appliances: Appliance[];
  onTariffChange: (tariff: number) => void;
}

const Results: React.FC<ResultsProps> = ({ results, appliances, onTariffChange }) => {
  const handleGeneratePDF = () => {
    // Adiciona um pequeno delay para garantir que o estado está atualizado
    setTimeout(() => {
      generatePDF(results, appliances);
    }, 100);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-6">Total Estimado do Cômodo</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-100">
          <div className="text-2xl font-bold text-blue-600 mb-2">
            {results.totalConsumption} kWh
          </div>
          <div className="text-gray-600 font-medium">Consumo</div>
        </div>
        
        <div className="text-center p-4 bg-green-50 rounded-lg border border-green-100">
          <div className="text-2xl font-bold text-green-600 mb-2">
            R$ {results.totalCost.toFixed(2)}
          </div>
          <div className="text-gray-600 font-medium">Custo</div>
        </div>
        
        <div className="text-center p-4 bg-yellow-50 rounded-lg border border-yellow-100">
          <div className="text-sm mb-2 text-gray-600 font-medium">Tarifa (R$/kWh)</div>
          <input
            type="number"
            value={results.tariff}
            onChange={(e) => onTariffChange(Number(e.target.value))}
            step="0.0001"
            min="0"
            className="w-full text-center bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500 text-lg font-bold text-yellow-700"
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
        <div className="text-sm text-gray-500">
          {appliances.length} aparelho(s) cadastrado(s)
        </div>
        <button
          onClick={handleGeneratePDF}
          className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all font-medium shadow-md hover:shadow-lg flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Baixar Relatório em PDF
        </button>
      </div>

      {appliances.length > 0 && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <h3 className="font-semibold text-gray-700 mb-2">Dica:</h3>
          <p className="text-sm text-gray-600">
            O relatório em PDF inclui todos os aparelhos, cálculos detalhados e metodologia utilizada. 
            Ideal para análise e compartilhamento.
          </p>
        </div>
      )}
    </div>
  );
};

export default Results;