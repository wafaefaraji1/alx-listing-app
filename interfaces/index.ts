export interface CardProps {
  image: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  onButtonClick: () => void;
  buttonText?: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger' | 'success';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  location: string;
  amenities: string[];
}

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}