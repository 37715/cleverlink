import React from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Eye, 
  Target, 
  Settings, 
  Home,
  PieChart,
  Activity,
  Bell,
  Search,
  MoreHorizontal
} from 'lucide-react';

const Dashboard = () => {
  return (
    <section className="py-20 px-6 bg-[#1F1B2E]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#8A3FFC]/20 text-[#8A3FFC] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-[#8A3FFC] rounded-full"></span>
            v4.8 Beta is available to download
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Revolutionizing the<br />
            Future of Data Tracking
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Discover what drives results and what doesn't to boost your search traffic.
          </p>
          <button className="bg-gradient-to-r from-[#8A3FFC] to-[#A855F7] text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300">
            Take Free Trial
          </button>
        </div>
        
        {/* Dashboard Mockup */}
        <div className="relative max-w-6xl mx-auto">
          <div className="bg-[#0F0B1A] rounded-2xl border border-[#8A3FFC]/20 overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-[#8A3FFC]/10">
              <div className="flex items-center gap-4">
                <div className="text-[#8A3FFC] font-bold text-xl">GAWAR</div>
                <div className="text-gray-400 text-sm">Pages / Dashboard</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-gray-400 text-sm">Welcome back, John</div>
                <div className="w-8 h-8 bg-[#8A3FFC] rounded-full"></div>
              </div>
            </div>
            
            <div className="flex">
              {/* Sidebar */}
              <div className="w-64 bg-[#0A0612] p-6 border-r border-[#8A3FFC]/10">
                <nav className="space-y-2">
                  <div className="text-[#8A3FFC] font-semibold mb-4">MAIN MENU</div>
                  <div className="flex items-center gap-3 text-[#8A3FFC] bg-[#8A3FFC]/10 px-3 py-2 rounded-lg">
                    <Home className="w-4 h-4" />
                    <span className="text-sm">Dashboard</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400 px-3 py-2 hover:text-white transition-colors">
                    <BarChart3 className="w-4 h-4" />
                    <span className="text-sm">Overview</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400 px-3 py-2 hover:text-white transition-colors">
                    <Activity className="w-4 h-4" />
                    <span className="text-sm">Analytics</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400 px-3 py-2 hover:text-white transition-colors">
                    <PieChart className="w-4 h-4" />
                    <span className="text-sm">Reports</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400 px-3 py-2 hover:text-white transition-colors">
                    <Settings className="w-4 h-4" />
                    <span className="text-sm">Settings</span>
                  </div>
                  
                  <div className="text-gray-500 font-semibold mb-4 mt-8">ACCOUNT PAGES</div>
                  <div className="flex items-center gap-3 text-gray-400 px-3 py-2 hover:text-white transition-colors">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">Profile</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400 px-3 py-2 hover:text-white transition-colors">
                    <span className="text-sm">Sign In</span>
                  </div>
                </nav>
              </div>
              
              {/* Main Content */}
              <div className="flex-1 p-6">
                {/* Top Stats */}
                <div className="grid grid-cols-4 gap-6 mb-8">
                  <div className="bg-[#1A1625] rounded-xl p-4 border border-[#8A3FFC]/10">
                    <div className="flex items-center justify-between mb-2">
                      <TrendingUp className="w-5 h-5 text-[#8A3FFC]" />
                      <span className="text-green-400 text-sm font-semibold">+5%</span>
                    </div>
                    <div className="text-white text-2xl font-bold">62%</div>
                    <div className="text-gray-400 text-sm">Today</div>
                  </div>
                  
                  <div className="bg-[#1A1625] rounded-xl p-4 border border-[#8A3FFC]/10">
                    <div className="flex items-center justify-between mb-2">
                      <Eye className="w-5 h-5 text-[#8A3FFC]" />
                      <span className="text-green-400 text-sm font-semibold">+3%</span>
                    </div>
                    <div className="text-white text-2xl font-bold">2.42k</div>
                    <div className="text-gray-400 text-sm">This week</div>
                  </div>
                  
                  <div className="bg-[#1A1625] rounded-xl p-4 border border-[#8A3FFC]/10">
                    <div className="flex items-center justify-between mb-2">
                      <Target className="w-5 h-5 text-[#8A3FFC]" />
                      <span className="text-red-400 text-sm font-semibold">-2%</span>
                    </div>
                    <div className="text-white text-2xl font-bold">53.4</div>
                    <div className="text-gray-400 text-sm">This week</div>
                  </div>
                  
                  <div className="bg-[#1A1625] rounded-xl p-4 border border-[#8A3FFC]/10">
                    <div className="flex items-center justify-between mb-2">
                      <Users className="w-5 h-5 text-[#8A3FFC]" />
                      <span className="text-green-400 text-sm font-semibold">+5%</span>
                    </div>
                    <div className="text-white text-2xl font-bold">$103</div>
                    <div className="text-gray-400 text-sm">This week</div>
                  </div>
                </div>
                
                {/* Charts Row */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                  {/* Visibility Chart */}
                  <div className="bg-[#1A1625] rounded-xl p-6 border border-[#8A3FFC]/10">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-white font-semibold">Visibility</h3>
                      <MoreHorizontal className="w-4 h-4 text-gray-400" />
                    </div>
                    <div className="text-gray-400 text-sm mb-4">Last 30 days</div>
                    
                    {/* Wave Chart */}
                    <div className="h-32 relative">
                      <svg className="w-full h-full" viewBox="0 0 300 120">
                        <defs>
                          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#8A3FFC" stopOpacity="0.8"/>
                            <stop offset="100%" stopColor="#8A3FFC" stopOpacity="0.1"/>
                          </linearGradient>
                        </defs>
                        <path
                          d="M0,80 Q75,20 150,60 T300,40 L300,120 L0,120 Z"
                          fill="url(#waveGradient)"
                        />
                        <path
                          d="M0,80 Q75,20 150,60 T300,40"
                          stroke="#8A3FFC"
                          strokeWidth="2"
                          fill="none"
                        />
                      </svg>
                    </div>
                  </div>
                  
                  {/* SEO Score */}
                  <div className="bg-[#1A1625] rounded-xl p-6 border border-[#8A3FFC]/10">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-white font-semibold">SEO Score</h3>
                      <MoreHorizontal className="w-4 h-4 text-gray-400" />
                    </div>
                    <div className="text-gray-400 text-sm mb-4">Based on your site</div>
                    
                    {/* Circular Progress */}
                    <div className="flex items-center justify-center h-32">
                      <div className="relative w-24 h-24">
                        <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                          <circle
                            cx="50"
                            cy="50"
                            r="40"
                            stroke="#2A2438"
                            strokeWidth="8"
                            fill="none"
                          />
                          <circle
                            cx="50"
                            cy="50"
                            r="40"
                            stroke="#8A3FFC"
                            strokeWidth="8"
                            fill="none"
                            strokeDasharray="251.2"
                            strokeDashoffset="62.8"
                            strokeLinecap="round"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-white text-xl font-bold">82%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* User Tracking */}
                  <div className="bg-[#1A1625] rounded-xl p-6 border border-[#8A3FFC]/10">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-white font-semibold">User Tracking</h3>
                      <MoreHorizontal className="w-4 h-4 text-gray-400" />
                    </div>
                    <div className="text-gray-400 text-sm mb-4">Active users</div>
                    
                    <div className="space-y-4">
                      <div className="text-white text-2xl font-bold">14 people</div>
                      <div className="text-gray-400 text-sm">1,485</div>
                      
                      {/* Score Circle */}
                      <div className="flex items-center justify-center mt-6">
                        <div className="relative w-20 h-20">
                          <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 100 100">
                            <circle
                              cx="50"
                              cy="50"
                              r="35"
                              stroke="#2A2438"
                              strokeWidth="6"
                              fill="none"
                            />
                            <circle
                              cx="50"
                              cy="50"
                              r="35"
                              stroke="#00D4AA"
                              strokeWidth="6"
                              fill="none"
                              strokeDasharray="220"
                              strokeDashoffset="22"
                              strokeLinecap="round"
                            />
                          </svg>
                          <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-white text-lg font-bold">9.3</span>
                            <span className="text-gray-400 text-xs">Score</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Bottom Chart */}
                <div className="bg-[#1A1625] rounded-xl p-6 border border-[#8A3FFC]/10">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-white font-semibold">Country Data View</h3>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#8A3FFC] rounded-full"></div>
                      <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                      <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Bar Chart */}
                  <div className="h-16 flex items-end justify-between gap-1">
                    {[40, 60, 30, 80, 45, 70, 35, 90, 55, 75, 40, 85, 50, 65, 45, 70, 35, 80, 60, 75].map((height, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-t from-[#8A3FFC] to-[#A855F7] rounded-t-sm flex-1 transition-all duration-300 hover:scale-105"
                        style={{ height: `${height}%` }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;