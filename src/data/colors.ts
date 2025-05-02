import { Color, Finish } from '../types';

export const colors: Color[] = [
  { id: 'alpine-white', name: 'Alpine White', value: '#f5f5f5' },
  { id: 'jet-black', name: 'Jet Black', value: '#0f0f0f' },
  { id: 'racing-red', name: 'Racing Red', value: '#d81d1d' },
  { id: 'electric-blue', name: 'Electric Blue', value: '#0066cc' },
  { id: 'sunset-orange', name: 'Sunset Orange', value: '#f77e21' },
  { id: 'forest-green', name: 'Forest Green', value: '#234d32' },
  { id: 'midnight-purple', name: 'Midnight Purple', value: '#4b0082' },
  { id: 'gunmetal-gray', name: 'Gunmetal Gray', value: '#484848' },
  { id: 'silver-arrow', name: 'Silver Arrow', value: '#c0c0c0' },
  { id: 'ocean-teal', name: 'Ocean Teal', value: '#008080' }
];

export const finishes: Finish[] = [
  { id: 'gloss', name: 'Gloss' },
  { id: 'matte', name: 'Matte' },
  { id: 'metallic', name: 'Metallic' }
];