import React, { useState } from 'react';
import { Appliance } from '../types/appliance';

interface ApplianceFormProps {
  onAdd: (appliance: Appliance) => void;
  onCancel: () => void;
}

const ApplianceForm: React.FC<ApplianceFormProps> = ({ onAdd, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    quantity: 1,
    dailyUsage: 0,
    power: 0
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || formData.dailyUsage <= 0 || formData.power <= 0) {
      alert('Preencha todos os campos obrigatórios');
      return;
    }

    const appliance: Appliance = {
      id: Date.now().toString(),
      name: formData.name,
      description: formData.description,
      quantity: formData.quantity,
      dailyUsage: formData.dailyUsage,
      power: formData.power
    };

    onAdd(appliance);
    setFormData({
      name: '',
      description: '',
      quantity: 1,
      dailyUsage: 0,
      power: 0
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'name' || name === 'description' ? value : Number(value)
    }));
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4">Adicionar Aparelho Personalizado</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nome do Aparelho *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Descrição
          </label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Quantidade *
          </label>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            min="1"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Uso Diário (horas) *
          </label>
          <input
            type="number"
            name="dailyUsage"
            value={formData.dailyUsage}
            onChange={handleChange}
            min="0"
            step="0.5"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Potência (Watts) *
          </label>
          <input
            type="number"
            name="power"
            value={formData.power}
            onChange={handleChange}
            min="0"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="md:col-span-2 flex gap-4 mt-4">
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium"
          >
            Adicionar Aparelho
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors font-medium"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplianceForm;