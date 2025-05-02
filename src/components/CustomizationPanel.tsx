import React, { useState } from 'react';
import { Palette, Car as CarIcon, Wrench, Activity } from 'lucide-react';
import { useCustomization } from '../context/CustomizationContext';
import ColorSelector from './ColorSelector';
import PartsSelector from './PartsSelector';
import CarSelector from './CarSelector';
import { Car } from '../types';

interface CustomizationPanelProps {
  cars: Car[];
  selectedCar: Car;
  onSelectCar: (car: Car) => void;
}

const CustomizationPanel: React.FC<CustomizationPanelProps> = ({ 
  cars, 
  selectedCar, 
  onSelectCar 
}) => {
  const [activeTab, setActiveTab] = useState<'car' | 'color' | 'parts' | 'performance'>('car');
  
  const renderTabContent = () => {
    switch (activeTab) {
      case 'car':
        return <CarSelector cars={cars} selectedCar={selectedCar} onSelectCar={onSelectCar} />;
      case 'color':
        return <ColorSelector />;
      case 'parts':
        return <PartsSelector />;
      case 'performance':
        return (
          <div className="p-4 text-center">
            <p className="text-gray-400">Performance tuning coming soon!</p>
          </div>
        );
      default:
        return null;
    }
  };
  
  return (
    <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl">
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-xl font-semibold">Customize Your Car</h2>
      </div>
      
      <div className="border-b border-gray-700">
        <div className="flex">
          <button
            onClick={() => setActiveTab('car')}
            className={`flex flex-col items-center justify-center p-4 flex-1 transition-colors ${
              activeTab === 'car' ? 'bg-blue-600 text-white' : 'hover:bg-gray-700 text-gray-300'
            }`}
          >
            <CarIcon className="h-5 w-5 mb-1" />
            <span className="text-sm">Car</span>
          </button>
          
          <button
            onClick={() => setActiveTab('color')}
            className={`flex flex-col items-center justify-center p-4 flex-1 transition-colors ${
              activeTab === 'color' ? 'bg-blue-600 text-white' : 'hover:bg-gray-700 text-gray-300'
            }`}
          >
            <Palette className="h-5 w-5 mb-1" />
            <span className="text-sm">Paint</span>
          </button>
          
          <button
            onClick={() => setActiveTab('parts')}
            className={`flex flex-col items-center justify-center p-4 flex-1 transition-colors ${
              activeTab === 'parts' ? 'bg-blue-600 text-white' : 'hover:bg-gray-700 text-gray-300'
            }`}
          >
            <Wrench className="h-5 w-5 mb-1" />
            <span className="text-sm">Parts</span>
          </button>
          
          <button
            onClick={() => setActiveTab('performance')}
            className={`flex flex-col items-center justify-center p-4 flex-1 transition-colors ${
              activeTab === 'performance' ? 'bg-blue-600 text-white' : 'hover:bg-gray-700 text-gray-300'
            }`}
          >
            <Activity className="h-5 w-5 mb-1" />
            <span className="text-sm">Tuning</span>
          </button>
        </div>
      </div>
      
      <div className="max-h-[60vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
        {renderTabContent()}
      </div>
      
      <div className="p-4 border-t border-gray-700">
        <button
          className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-md font-medium transition-colors"
        >
          Complete Build
        </button>
      </div>
    </div>
  );
};

export default CustomizationPanel;