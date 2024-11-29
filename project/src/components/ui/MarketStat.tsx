import React from 'react';

interface MarketStatProps {
  value: string;
  label: string;
  detail: string;
}

export function MarketStat({ value, label, detail }: MarketStatProps) {
  return (
    <div className="text-center">
      <div className="text-3xl font-bold text-violet-500 mb-2">{value}</div>
      <div className="text-lg font-medium text-white mb-1">{label}</div>
      <p className="text-gray-400 text-sm">{detail}</p>
    </div>
  );
}