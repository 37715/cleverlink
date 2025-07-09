import React from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Eye,
  Activity,
  PieChart
} from 'lucide-react';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

const Dashboard = () => {
  const metrics = [
    {
      icon: TrendingUp,
      label: 'growth',
      value: '247%',
      description: 'revenue increase'
    },
    {
      icon: Users,
      label: 'clients',
      value: '1.2k',
      description: 'active users'
    },
    {
      icon: Eye,
      label: 'visibility',
      value: '85%',
      description: 'market reach'
    },
    {
      icon: Activity,
      label: 'efficiency',
      value: '92%',
      description: 'automation rate'
    }
  ];

  return (
    <section className="py-20 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-ultra-light mb-6 text-white">
            results
          </h2>
          <div className="w-12 h-px bg-white mx-auto mb-8"></div>
          <p className="text-xl text-zinc-400 max-w-xl mx-auto font-ultra-light">
            <span className="font-ultra-light">discover what drives results and what doesn't to boost your business performance</span>
          </p>
        </ScrollReveal>
        
        {/* Simple metrics grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <ScrollReveal
              key={index}
              delay={index * 0.1}
              className="bg-zinc-900/50 border border-zinc-800 p-6 transition-all duration-500 hover:translate-y-[-4px] hover:bg-zinc-900/70 hover:scale-105 cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <metric.icon className="w-5 h-5 text-white transition-transform duration-300 hover:scale-110" strokeWidth={1} />
              </div>
              <div className="text-2xl font-ultra-light text-white mb-1">{metric.value}</div>
              <div className="text-sm font-light text-white mb-1">{metric.label}</div>
              <div className="text-xs text-zinc-400 font-ultra-light">{metric.description}</div>
            </ScrollReveal>
          ))}
        </div>

        {/* Simple dashboard preview */}
        <ScrollReveal delay={0.3} className="max-w-4xl mx-auto">
          <div className="bg-zinc-900 border border-zinc-800 overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-zinc-800">
              <div className="font-heading font-light text-white tracking-wider">cleverlink dashboard</div>
              <div className="text-zinc-400 text-sm font-ultra-light">real-time analytics</div>
            </div>
            
            {/* Content area - simplified */}
            <div className="p-6">
              <div className="grid grid-cols-3 gap-6 mb-6">
                <div className="border border-zinc-800 p-4 bg-zinc-900/50 transition-all duration-300 hover:scale-105 hover:bg-zinc-900/70 cursor-pointer">
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart3 className="w-4 h-4 text-white transition-transform duration-300 hover:scale-110" strokeWidth={1} />
                    <span className="text-sm font-light text-white">analytics</span>
                  </div>
                  <div className="text-lg font-ultra-light text-white">94.2%</div>
                  <div className="text-xs text-zinc-400 font-ultra-light">performance</div>
                </div>
                
                <div className="border border-zinc-800 p-4 bg-zinc-900/50 transition-all duration-300 hover:scale-105 hover:bg-zinc-900/70 cursor-pointer">
                  <div className="flex items-center gap-2 mb-2">
                    <PieChart className="w-4 h-4 text-white transition-transform duration-300 hover:scale-110" strokeWidth={1} />
                    <span className="text-sm font-light text-white">insights</span>
                  </div>
                  <div className="text-lg font-ultra-light text-white">127</div>
                  <div className="text-xs text-zinc-400 font-ultra-light">data points</div>
                </div>
                
                <div className="border border-zinc-800 p-4 bg-zinc-900/50 transition-all duration-300 hover:scale-105 hover:bg-zinc-900/70 cursor-pointer">
                  <div className="flex items-center gap-2 mb-2">
                    <Activity className="w-4 h-4 text-white transition-transform duration-300 hover:scale-110" strokeWidth={1} />
                    <span className="text-sm font-light text-white">automation</span>
                  </div>
                  <div className="text-lg font-ultra-light text-white">24/7</div>
                  <div className="text-xs text-zinc-400 font-ultra-light">monitoring</div>
                </div>
              </div>
              
              {/* Simple visualization area */}
              <div className="border border-zinc-800 p-6 h-32 flex items-center justify-center bg-zinc-900/30">
                <div className="text-center">
                  <div className="text-sm text-zinc-400 font-ultra-light mb-2">ai-powered analytics</div>
                  <div className="w-32 h-1 bg-zinc-800 mx-auto">
                    <div className="w-3/4 h-1 bg-white"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Dashboard;