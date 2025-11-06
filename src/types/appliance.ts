export interface Appliance {
  id: string;
  name: string;
  description: string;
  quantity: number;
  dailyUsage: number; // horas por dia
  power: number; // watts
  costPerMonth?: number;
  kWhPerMonth?: number;
}

export interface SimulationResult {
  totalConsumption: number;
  totalCost: number;
  tariff: number;
}