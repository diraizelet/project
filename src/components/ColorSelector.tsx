import React from 'react';
import { useCustomization } from '../context/CustomizationContext';
import { colors, finishes } from '../data/colors';

const ColorSelector: React.FC = () => {
  const { color, setColor, finish, setFinish } = useCustomization();
  
  return (
    <div className="p-4">
      <h3 className="text-lg font-medium mb-4">Paint Color</h3>
      
      <div className="grid grid-cols-5 gap-2 mb-6">
        {colors.map((c) => (
          <button
            key={c.id}
            onClick={() => setColor(c)}
            className={`w-full aspect-square rounded-full transition-transform ${
              color.id === c.id ? 'ring-2 ring-white scale-110' : 'hover:scale-105'
            }`}
            style={{ backgroundColor: c.value }}
            aria-label={c.name}
          />
        ))}
      </div>
      
      <h3 className="text-lg font-medium mb-4 mt-6">Finish</h3>
      
      <div className="space-y-2">
        {finishes.map((f) => (
          <button
            key={f.id}
            onClick={() => setFinish(f)}
            className={`w-full p-3 rounded-md transition-colors ${
              finish.id === f.id 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
            }`}
          >
            <div className="flex items-center">
              <div className="w-6 h-6 rounded-full mr-3" style={{ 
                backgroundColor: color.value,
                filter: f.id === 'matte' ? 'brightness(0.9) saturate(0.9)' : 
                        f.id === 'metallic' ? 'brightness(1.1) saturate(1.1)' : 'none'
              }} />
              <span>{f.name}</span>
            </div>
          </button>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-gray-700/50 rounded-lg">
        <div className="flex justify-between mb-2">
          <span className="text-gray-400">Current selection:</span>
          <span className="font-medium">{color.name} {finish.name}</span>
        </div>
        <div className="w-full h-12 rounded-md" style={{ 
          backgroundColor: color.value,
          filter: finish.id === 'matte' ? 'brightness(0.9) saturate(0.9)' : 
                  finish.id === 'metallic' ? 'brightness(1.1) saturate(1.1)' : 'none'
        }} />
      </div>
    </div>
  );
};

export default ColorSelector;