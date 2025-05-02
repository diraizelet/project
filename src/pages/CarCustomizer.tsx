import React, { useState } from 'react';
import CarViewer from '../components/CarViewer';
import CustomizationPanel from '../components/CustomizationPanel';
import { CustomizationProvider } from '../context/CustomizationContext';
import { cars } from '../data/cars';

const CarCustomizer: React.FC = () => {
  const [selectedCar, setSelectedCar] = useState(cars[0]);
  
  return (
    <CustomizationProvider>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-[70%] order-2 lg:order-1">
            <CarViewer selectedCar={selectedCar} />
          </div>
          <div className="w-full lg:w-[30%] order-1 lg:order-2">
            <CustomizationPanel 
              cars={cars} 
              selectedCar={selectedCar} 
              onSelectCar={setSelectedCar} 
            />
          </div>
        </div>
      </div>
    </CustomizationProvider>
  );
};

export default CarCustomizer;