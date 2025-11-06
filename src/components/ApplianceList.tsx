import React from 'react';
import { Appliance } from '../types/appliance';

interface ApplianceListProps {
  appliances: Appliance[];
  onRemove: (id: string) => void;
  onUpdate: (id: string, updates: Partial<Appliance>) => void;
}

const ApplianceList: React.FC<ApplianceListProps> = ({ appliances, onRemove, onUpdate }) => {
  if (appliances.length === 0) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4">Aparelhos Adicionados</h2>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4">Descrição</th>
              <th className="text-left py-3 px-4">Quantidade</th>
              <th className="text-left py-3 px-4">Uso Diário (h)</th>
              <th className="text-left py-3 px-4">KWh/Mês</th>
              <th className="text-left py-3 px-4">Custo/Mês</th>
              <th className="text-left py-3 px-4">Ações</th>
            </tr>
          </thead>
          <tbody>
            {appliances.map(appliance => (
              <tr key={appliance.id} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-3 px-4">
                  <div>
                    <div className="font-medium">{appliance.name}</div>
                    <div className="text-sm text-gray-500">{appliance.description}</div>
                    <div className="text-sm text-gray-400">{appliance.power}W</div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <input
                    type="number"
                    value={appliance.quantity}
                    onChange={(e) => onUpdate(appliance.id, { quantity: Number(e.target.value) })}
                    min="1"
                    className="w-20 border border-gray-300 rounded px-2 py-1 text-center"
                  />
                </td>
                <td className="py-3 px-4">
                  <input
                    type="number"
                    value={appliance.dailyUsage}
                    onChange={(e) => onUpdate(appliance.id, { dailyUsage: Number(e.target.value) })}
                    min="0"
                    step="0.5"
                    className="w-24 border border-gray-300 rounded px-2 py-1 text-center"
                  />
                </td>
                <td className="py-3 px-4 font-medium">
                  {appliance.kWhPerMonth?.toFixed(2)}
                </td>
                <td className="py-3 px-4 font-medium text-green-600">
                  R$ {appliance.costPerMonth?.toFixed(2)}
                </td>
                <td className="py-3 px-4">
                  <button
                    onClick={() => onRemove(appliance.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors text-sm"
                  >
                    Remover
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplianceList;