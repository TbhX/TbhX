import React, { useState } from 'react';
import { Calculator, Building } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { DetailCard } from './ui/DetailCard';

export default function RevenueDetails() {
  const { language } = useLanguage();
  const [isRevenueVisible, setIsRevenueVisible] = useState(false);
  const [isInvestmentVisible, setIsInvestmentVisible] = useState(false);

  const revenueCalc = {
    fr: {
      title: "Détail du CA Prévisionnel",
      gaming: "Revenus Gaming",
      gamingDetails: [
        "40 PC × 3€/heure (prix moyen)",
        "12 heures d'utilisation moyenne/jour",
        "30 jours × 12 mois",
        "Taux d'occupation moyen : 30%*"
      ],
      gamingTotal: "≈ 470K€/an",
      additional: "Revenus Additionnels",
      additionalDetails: [
        "Ventes (boissons, snacks) : ≈ 200K€/an",
        "Événements & tournois : ≈ 180K€/an",
        "Services annexes : ≈ 150K€/an"
      ],
      total: "CA Total estimé : 1-2M€ sur 3 ans",
      note: "* Le taux d'occupation est une estimation prudente basée sur des études de marché",
      showDetails: "Voir le détail"
    },
    en: {
      title: "Projected Revenue Details",
      gaming: "Gaming Revenue",
      gamingDetails: [
        "40 PCs × €3/hour (average price)",
        "12 hours average use/day",
        "30 days × 12 months",
        "Average occupancy rate: 30%*"
      ],
      gamingTotal: "≈ €470K/year",
      additional: "Additional Revenue",
      additionalDetails: [
        "Sales (drinks, snacks): ≈ €200K/year",
        "Events & tournaments: ≈ €180K/year",
        "Additional services: ≈ €150K/year"
      ],
      total: "Estimated total revenue: €1-2M over 3 years",
      note: "* Occupancy rate is a conservative estimate based on market studies",
      showDetails: "Show details"
    }
  };

  const investmentDetails = {
    fr: {
      title: "Détail du Potentiel d'Investissement",
      sources: [
        "Subvention Innov'up (Région IDF) : jusqu'à 3M€"
      ],
      support: "Soutien institutionnel",
      supportDetails: [
        "Paris-Saclay Développement",
        "BPI France",
        "CCI Essonne",
        "Communauté Paris-Saclay"
      ]
    },
    en: {
      title: "Investment Potential Details",
      sources: [
        "Innov'up Grant (IDF Region): up to €3M"
      ],
      support: "Institutional Support",
      supportDetails: [
        "Paris-Saclay Development",
        "BPI France",
        "CCI Essonne",
        "Paris-Saclay Community"
      ]
    }
  };

  const text = language === 'fr' ? revenueCalc.fr : revenueCalc.en;
  const investment = language === 'fr' ? investmentDetails.fr : investmentDetails.en;

  return (
    <div className="space-y-6 mt-8">
      <DetailCard title={text.title} icon={Calculator}>
        <button
          onClick={() => setIsRevenueVisible(!isRevenueVisible)}
          className="text-violet-400 hover:text-violet-300 transition-colors mb-4 w-full text-left flex items-center gap-2"
        >
          <span>{isRevenueVisible ? '▼' : '▶'}</span>
          <span>{text.showDetails}</span>
        </button>
        
        {isRevenueVisible && (
          <div className="space-y-4 animate-fade-in">
            <div>
              <h5 className="text-lg font-medium text-violet-400 mb-2">{text.gaming}</h5>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                {text.gamingDetails.map((detail, index) => (
                  <li key={index} className="pl-2">{detail}</li>
                ))}
              </ul>
              <p className="text-white font-semibold mt-2">{text.gamingTotal}</p>
            </div>
            
            <div>
              <h5 className="text-lg font-medium text-violet-400 mb-2">{text.additional}</h5>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                {text.additionalDetails.map((detail, index) => (
                  <li key={index} className="pl-2">{detail}</li>
                ))}
              </ul>
            </div>
            
            <div className="pt-4 border-t border-gray-700">
              <p className="text-xl font-bold text-white">{text.total}</p>
              <p className="text-sm text-gray-400 mt-2">{text.note}</p>
            </div>
          </div>
        )}
      </DetailCard>

      <DetailCard title={investment.title} icon={Building}>
        <button
          onClick={() => setIsInvestmentVisible(!isInvestmentVisible)}
          className="text-violet-400 hover:text-violet-300 transition-colors mb-4 w-full text-left flex items-center gap-2"
        >
          <span>{isInvestmentVisible ? '▼' : '▶'}</span>
          <span>{text.showDetails}</span>
        </button>
        
        {isInvestmentVisible && (
          <div className="space-y-4 animate-fade-in">
            <div>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                {investment.sources.map((source, index) => (
                  <li key={index} className="pl-2">{source}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h5 className="text-lg font-medium text-violet-400 mb-2">{investment.support}</h5>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                {investment.supportDetails.map((detail, index) => (
                  <li key={index} className="pl-2">{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </DetailCard>
    </div>
  );
}