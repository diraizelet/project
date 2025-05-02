import React, { useState } from 'react';
import { bodyKits, wheels, spoilers } from '../data/parts';
import { useCustomization } from '../context/CustomizationContext';

const PartsSelector: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'wheels' | 'bodyKits' | 'spoilers'>('wheels');
  const { wheels: selectedWheels, setWheels, bodyKit, setBodyKit, spoiler, setSpoiler } = useCustomization();
  
  const renderCategoryContent = () => {
    switch (activeCategory) {
      case 'wheels':
        return (
          <div className="grid grid-cols-2 gap-3">
            {wheels.map((wheel) => (
              <button
                key={wheel.id}
                onClick={() => setWheels(wheel)}
                className={`p-2 rounded-lg transition-colors ${
                  selectedWheels?.id === wheel.id 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-700 hover:bg-gray-600'
                }`}
              >
                <div className="aspect-square overflow-hidden rounded-md mb-2">
                  <img src={wheel.thumbnail} alt={wheel.name} className="w-full h-full object-cover" />
                </div>
                <div className="text-sm font-medium">{wheel.name}</div>
                <div className="text-xs text-gray-400">${wheel.price}</div>
              </button>
            ))}
          </div>
        );
      case 'bodyKits':
        return (
          <div className="grid grid-cols-1 gap-3">
            {bodyKits.map((kit) => (
              <button
                key={kit.id}
                onClick={() => setBodyKit(kit)}
                className={`p-2 rounded-lg transition-colors ${
                  bodyKit?.id === kit.id 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-700 hover:bg-gray-600'
                }`}
              >
                <div className="aspect-video overflow-hidden rounded-md mb-2">
                  <img src={kit.thumbnail} alt={kit.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm font-medium">{kit.name}</div>
                    <div className="text-xs text-gray-400">${kit.price}</div>
                  </div>
                  {kit.hot && (
                    <span className="px-2 py-1 bg-red-500 text-white text-xs rounded-full">HOT</span>
                  )}
                </div>
              </button>
            ))}
          </div>
        );
      case 'spoilers':
        return (
          <div className="grid grid-cols-2 gap-3">
            {spoilers.map((item) => (
              <button
                key={item.id}
                onClick={() => setSpoiler(item)}
                className={`p-2 rounded-lg transition-colors ${
                  spoiler?.id === item.id 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-700 hover:bg-gray-600'
                }`}
              >
                <div className="aspect-square overflow-hidden rounded-md mb-2">
                  <img src={item.thumbnail} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="text-sm font-medium">{item.name}</div>
                <div className="text-xs text-gray-400">${item.price}</div>
              </button>
            ))}
          </div>
        );
      default:
        return null;
    }
  };
  
  return (
    <div className="p-4">
      <div className="flex mb-4 gap-2">
        <button
          onClick={() => setActiveCategory('wheels')}
          className={`flex-1 py-2 px-3 rounded-md transition-colors ${
            activeCategory === 'wheels' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
          }`}
        >
          Wheels
        </button>
        <button
          onClick={() => setActiveCategory('bodyKits')}
          className={`flex-1 py-2 px-3 rounded-md transition-colors ${
            activeCategory === 'bodyKits' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
          }`}
        >
          Body Kits
        </button>
        <button
          onClick={() => setActiveCategory('spoilers')}
          className={`flex-1 py-2 px-3 rounded-md transition-colors ${
            activeCategory === 'spoilers' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
          }`}
        >
          Spoilers
        </button>
      </div>
      
      {renderCategoryContent()}
      
      <div className="mt-6 p-4 bg-gray-700/50 rounded-lg">
        <h4 className="font-medium mb-2">Your Build</h4>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-400">Wheels:</span>
            <span>{selectedWheels ? `${selectedWheels.name} ($${selectedWheels.price})` : 'Stock'}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Body Kit:</span>
            <span>{bodyKit ? `${bodyKit.name} ($${bodyKit.price})` : 'Stock'}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Spoiler:</span>
            <span>{spoiler ? `${spoiler.name} ($${spoiler.price})` : 'None'}</span>
          </div>
          <div className="flex justify-between pt-2 border-t border-gray-600 font-medium">
            <span>Total:</span>
            <span>${
              (selectedWheels?.price || 0) + 
              (bodyKit?.price || 0) + 
              (spoiler?.price || 0)
            }</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartsSelector;