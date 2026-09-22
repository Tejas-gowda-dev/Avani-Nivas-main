import React from 'react';
import { COMPANY_INFO } from '../data/company';
import { ScrollReveal } from './ScrollReveal';
import { ShieldCheck, Users, Receipt, Hammer, Clock, CheckCircle2 } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-[#0B2545]" />,
  Users: <Users className="w-5 h-5 text-[#0B2545]" />,
  Receipt: <Receipt className="w-5 h-5 text-[#0B2545]" />,
  Hammer: <Hammer className="w-5 h-5 text-[#0B2545]" />,
  Clock: <Clock className="w-5 h-5 text-[#0B2545]" />
};

export const TrustSection: React.FC = () => {
  return (
    <section id="trust-foundation-section" className="py-20 bg-[#F5F2EC] border-y border-[#EAE4DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Verified Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pb-16 border-b border-[#D8D1C5]">
          {COMPANY_INFO.stats.map((stat, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.08} className="flex flex-col space-y-1">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#252525] font-serif">
                {stat.value}
              </span>
              <span className="text-sm font-bold text-[#252525]">{stat.label}</span>
              <span className="text-xs text-[#7C7469]">{stat.caption}</span>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
