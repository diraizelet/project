import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Color, Finish, Wheel, BodyKit, Spoiler } from '../types';
import { colors, finishes } from '../data/colors';

interface CustomizationContextType {
  color: Color;
  setColor: (color: Color) => void;
  finish: Finish;
  setFinish: (finish: Finish) => void;
  wheels: Wheel | null;
  setWheels: (wheels: Wheel | null) => void;
  bodyKit: BodyKit | null;
  setBodyKit: (bodyKit: BodyKit | null) => void;
  spoiler: Spoiler | null;
  setSpoiler: (spoiler: Spoiler | null) => void;
}

const CustomizationContext = createContext<CustomizationContextType | undefined>(undefined);

export const CustomizationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [color, setColor] = useState<Color>(colors[0]);
  const [finish, setFinish] = useState<Finish>(finishes[0]);
  const [wheels, setWheels] = useState<Wheel | null>(null);
  const [bodyKit, setBodyKit] = useState<BodyKit | null>(null);
  const [spoiler, setSpoiler] = useState<Spoiler | null>(null);
  
  return (
    <CustomizationContext.Provider value={{
      color,
      setColor,
      finish,
      setFinish,
      wheels,
      setWheels,
      bodyKit,
      setBodyKit,
      spoiler,
      setSpoiler
    }}>
      {children}
    </CustomizationContext.Provider>
  );
};

export const useCustomization = () => {
  const context = useContext(CustomizationContext);
  
  if (context === undefined) {
    throw new Error('useCustomization must be used within a CustomizationProvider');
  }
  
  return context;
};