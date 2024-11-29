import React from 'react';
import { LucideIcon } from 'lucide-react';

interface DetailCardProps {
  title: string;
  children: React.ReactNode;
  icon: LucideIcon;
}

export function DetailCard({ title, children, icon: Icon }: DetailCardProps) {
  return (
    <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800 hover:border-violet-500 transition-all duration-300">
      <div className="flex items-center gap-3 mb-4">
        <Icon className="w-6 h-6 text-violet-500" />
        <h4 className="text-xl font-semibold text-white">{title}</h4>
      </div>
      {children}
    </div>
  );
}