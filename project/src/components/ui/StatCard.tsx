import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  description: string;
}

export function StatCard({ icon: Icon, value, label, description }: StatCardProps) {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-100 transition-opacity" />
      <div className="relative p-8 rounded-2xl bg-gray-900 border border-gray-800 hover:border-violet-500 transition-all">
        <Icon className="w-10 h-10 text-violet-500 mb-4" />
        <div className="text-3xl font-bold text-white mb-2">{value}</div>
        <div className="text-lg font-medium text-violet-400 mb-2">{label}</div>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
}