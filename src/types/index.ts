export interface Car {
  id: string;
  name: string;
  category: string;
  year: number;
  baseImage: string;
  thumbnail: string;
}

export interface Color {
  id: string;
  name: string;
  value: string;
}

export interface Finish {
  id: string;
  name: string;
}

export interface Wheel {
  id: string;
  name: string;
  price: number;
  image: string;
  thumbnail: string;
}

export interface BodyKit {
  id: string;
  name: string;
  price: number;
  image: string;
  thumbnail: string;
  hot?: boolean;
}

export interface Spoiler {
  id: string;
  name: string;
  price: number;
  image: string;
  thumbnail: string;
}