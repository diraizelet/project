import React from 'react';
import { Car } from '../types';

interface CarSelectorProps {
  cars: Car[];
  selectedCar: Car;
  onSelectCar: (car: Car) => void;
}

const CarSelector: React.FC<CarSelectorProps> = ({ cars, selectedCar, onSelectCar }) => {
  return (
    <div className="p-4">
      <h3 className="text-lg font-medium mb-4">Choose Your Car</h3>
      
      <div className="space-y-3">
        {cars.map((car) => (
          <button
            key={car.id}
            onClick={() => onSelectCar(car)}
            className={`w-full p-3 rounded-lg transition-all duration-200 ${
              selectedCar.id === car.id 
                ? 'bg-blue-600 text-white scale-[1.02]' 
                : 'bg-gray-700 hover:bg-gray-600'
            }`}
          >
            <div className="flex items-center">
              <div className="w-16 h-12 mr-3 rounded overflow-hidden">
                <img 
                  src={car.thumbnail} 
                  alt={car.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 text-left">
                <div className="font-medium">{car.name}</div>
                <div className="text-sm text-gray-400">{car.category}</div>
              </div>
            </div>
          </button>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-gray-700/50 rounded-lg">
        <h4 className="font-medium mb-3">Selected Model</h4>
        <div className="aspect-video mb-3 rounded-md overflow-hidden">
          <img 
            src={selectedCar.thumbnail} 
            alt={selectedCar.name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-400">Model:</span>
            <span>{selectedCar.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Type:</span>
            <span>{selectedCar.category}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Year:</span>
            <span>{selectedCar.year}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarSelector;