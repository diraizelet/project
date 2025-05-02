import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, ArrowRight, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import { useCustomization } from '../context/CustomizationContext';
import { Car } from '../types';

interface CarViewerProps {
  selectedCar: Car;
}

const CarViewer: React.FC<CarViewerProps> = ({ selectedCar }) => {
  const { color, wheels, bodyKit, spoiler } = useCustomization();
  const [viewAngle, setViewAngle] = useState(0);
  const [zoom, setZoom] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef(0);
  const isDraggingRef = useRef(false);
  
  const angles = [0, 45, 90, 135, 180, 225, 270, 315];
  
  // Get the car image based on current angle and customizations
  const getCarImage = () => {
    // In a real implementation, this would return different angle views
    // For now, we'll simulate with the base image and color overlay
    return selectedCar.baseImage;
  };
  
  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 0.1, 1.5));
  };
  
  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 0.1, 0.7));
  };
  
  const handleResetView = () => {
    setViewAngle(0);
    setZoom(1);
  };
  
  const handleMouseDown = (e: React.MouseEvent) => {
    if (containerRef.current) {
      startXRef.current = e.clientX;
      isDraggingRef.current = true;
    }
  };
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDraggingRef.current) {
      const deltaX = e.clientX - startXRef.current;
      
      if (Math.abs(deltaX) > 50) {
        const direction = deltaX > 0 ? -1 : 1;
        setViewAngle(prev => {
          const newIndex = (angles.indexOf(prev) + direction + angles.length) % angles.length;
          return angles[newIndex];
        });
        startXRef.current = e.clientX;
      }
    }
  };
  
  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };
  
  const handleTouchStart = (e: React.TouchEvent) => {
    if (containerRef.current) {
      startXRef.current = e.touches[0].clientX;
      isDraggingRef.current = true;
    }
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDraggingRef.current) {
      const deltaX = e.touches[0].clientX - startXRef.current;
      
      if (Math.abs(deltaX) > 50) {
        const direction = deltaX > 0 ? -1 : 1;
        setViewAngle(prev => {
          const newIndex = (angles.indexOf(prev) + direction + angles.length) % angles.length;
          return angles[newIndex];
        });
        startXRef.current = e.touches[0].clientX;
      }
    }
  };
  
  const handleTouchEnd = () => {
    isDraggingRef.current = false;
  };
  
  const rotateLeft = () => {
    setViewAngle(prev => {
      const newIndex = (angles.indexOf(prev) - 1 + angles.length) % angles.length;
      return angles[newIndex];
    });
  };
  
  const rotateRight = () => {
    setViewAngle(prev => {
      const newIndex = (angles.indexOf(prev) + 1) % angles.length;
      return angles[newIndex];
    });
  };
  
  useEffect(() => {
    const container = containerRef.current;
    
    if (container) {
      container.addEventListener('mouseleave', handleMouseUp);
      
      return () => {
        container.removeEventListener('mouseleave', handleMouseUp);
      };
    }
  }, []);
  
  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-xl">
      <div className="p-4 border-b border-gray-700 flex justify-between items-center">
        <h2 className="text-xl font-semibold">{selectedCar.name}</h2>
        <div className="flex space-x-2">
          <button
            onClick={handleZoomOut}
            className="p-2 rounded-full hover:bg-gray-700 transition-colors"
            aria-label="Zoom out"
          >
            <ZoomOut className="h-5 w-5" />
          </button>
          <button
            onClick={handleZoomIn}
            className="p-2 rounded-full hover:bg-gray-700 transition-colors"
            aria-label="Zoom in"
          >
            <ZoomIn className="h-5 w-5" />
          </button>
          <button
            onClick={handleResetView}
            className="p-2 rounded-full hover:bg-gray-700 transition-colors"
            aria-label="Reset view"
          >
            <RotateCcw className="h-5 w-5" />
          </button>
        </div>
      </div>
      
      <div
        ref={containerRef}
        className="relative w-full aspect-video cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="w-full h-full flex items-center justify-center transition-transform duration-300"
          style={{ transform: `scale(${zoom})` }}
        >
          <div className="relative">
            {/* Base car image */}
            <img
              src={getCarImage()}
              alt={selectedCar.name}
              className="max-w-full h-auto transition-transform duration-300"
              style={{ transform: `rotate(${viewAngle}deg)` }}
            />
            
            {/* Color overlay (in a real implementation, this would be better handled) */}
            <div
              className="absolute inset-0 mix-blend-multiply transition-colors duration-300"
              style={{ backgroundColor: color.value, opacity: 0.8 }}
            />
            
            {/* Show wheels, body kits, and other parts based on selections */}
            {wheels && (
              <img
                src={wheels.image}
                alt="Wheels"
                className="absolute inset-0 max-w-full h-auto transition-transform duration-300"
                style={{ transform: `rotate(${viewAngle}deg)` }}
              />
            )}
            
            {bodyKit && (
              <img
                src={bodyKit.image}
                alt="Body Kit"
                className="absolute inset-0 max-w-full h-auto transition-transform duration-300"
                style={{ transform: `rotate(${viewAngle}deg)` }}
              />
            )}
            
            {spoiler && (
              <img
                src={spoiler.image}
                alt="Spoiler"
                className="absolute inset-0 max-w-full h-auto transition-transform duration-300"
                style={{ transform: `rotate(${viewAngle}deg)` }}
              />
            )}
          </div>
        </div>
        
        {/* Rotation controls */}
        <button
          onClick={rotateLeft}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800/70 hover:bg-gray-700 p-2 rounded-full backdrop-blur-sm transition-colors"
          aria-label="Rotate left"
        >
          <ArrowLeft className="h-6 w-6" />
        </button>
        
        <button
          onClick={rotateRight}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800/70 hover:bg-gray-700 p-2 rounded-full backdrop-blur-sm transition-colors"
          aria-label="Rotate right"
        >
          <ArrowRight className="h-6 w-6" />
        </button>
        
        {/* View angle indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1">
          {angles.map((angle, index) => (
            <button
              key={angle}
              onClick={() => setViewAngle(angle)}
              className={`w-2 h-2 rounded-full transition-colors ${
                viewAngle === angle ? 'bg-blue-500' : 'bg-gray-500 hover:bg-gray-400'
              }`}
              aria-label={`View angle ${angle} degrees`}
            />
          ))}
        </div>
      </div>
      
      <div className="p-4 border-t border-gray-700 flex justify-between">
        <div>
          <p className="text-sm text-gray-400">Drag to rotate | Scroll to zoom</p>
        </div>
        <div className="flex space-x-2">
          <button
            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-md transition-colors"
          >
            Save Design
          </button>
          <button
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md transition-colors"
          >
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarViewer;