import React from 'react';
import { Clock, Users, ShieldCheck, Sparkles } from 'lucide-react';

export const TrustSection: React.FC = () => {
  return (
    <section className="py-16 bg-[#F5F2EC] border-y border-[#ECE5DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              label: "Years Experience",
              value: "15+",
              icon: (
                <Clock className="w-12 h-12 text-[#0B2545] stroke-[1.6]" />
              ),
            },
            {
              label: "Satisfied Clients",
              value: "200+",
              icon: (
                <Users className="w-12 h-12 text-[#0B2545] stroke-[1.6]" />
              ),
            },
            {
              label: "Turnkey Accountability",
              value: "100%",
              icon: (
                <ShieldCheck className="w-12 h-12 text-[#0B2545] stroke-[1.6]" />
              ),
            },
            {
              label: "Care & Customization",
              value: "Elegance",
              icon: (
                <Sparkles className="w-12 h-12 text-[#0B2545] stroke-[1.6]" />
              ),
            },
          ].map(({ label, value, icon }) => (
            <div key={label} className="text-center space-y-3">
              <div className="flex justify-center">{icon}</div>
              <div className="text-xl font-bold text-gray-900">{value}</div>
              <div className="text-gray-700 font-normal">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
