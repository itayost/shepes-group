// File: src/components/ui/Icon.tsx

import * as LucideIcons from 'lucide-react';
import { LucideProps } from 'lucide-react';

interface IconProps extends LucideProps {
  name: string;
  fallback?: React.ReactNode;
}

/**
 * Dynamic Icon Component for Lucide React
 * Renders a Lucide icon by name
 * 
 * @example
 * <Icon name="Home" className="w-6 h-6 text-[#D4AF37]" />
 * <Icon name="Phone" size={32} />
 */
export const Icon = ({ name, fallback, ...props }: IconProps) => {
  const IconComponent = LucideIcons[name as keyof typeof LucideIcons] as React.ComponentType<LucideProps>;
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in Lucide icons`);
    return <>{fallback || null}</>;
  }
  
  return <IconComponent {...props} />;
};

// Preset icon sizes for consistency
export const iconSizes = {
  xs: 16,
  sm: 20,
  md: 24,
  lg: 32,
  xl: 40,
  '2xl': 48,
} as const;

// Wrapper components for specific use cases - Updated for black & gold theme
export const FeatureIcon = ({ name, ...props }: IconProps) => (
  <div className="inline-flex items-center justify-center w-12 h-12 bg-[#D4AF37]/20 text-[#D4AF37] rounded-lg">
    <Icon name={name} size={iconSizes.md} {...props} />
  </div>
);

export const ServiceIcon = ({ name, ...props }: IconProps) => (
  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#B8860B] text-black rounded-full">
    <Icon name={name} size={iconSizes.lg} {...props} />
  </div>
);

export const StatIcon = ({ name, color = 'primary', ...props }: IconProps & { color?: string }) => {
  const colorClasses = {
    primary: 'bg-[#D4AF37]/20 text-[#D4AF37]',
    green: 'bg-green-900/20 text-green-400',
    blue: 'bg-blue-900/20 text-blue-400',
    purple: 'bg-purple-900/20 text-purple-400',
    gold: 'bg-[#FFD700]/20 text-[#FFD700]',
  };

  return (
    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${colorClasses[color as keyof typeof colorClasses] || colorClasses.primary}`}>
      <Icon name={name} size={iconSizes.lg} {...props} />
    </div>
  );
};

// Button with icon component - Updated for black & gold theme
interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: string;
  children: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export const IconButton = ({ 
  icon, 
  children, 
  iconPosition = 'left', 
  className = '',
  ...props 
}: IconButtonProps) => {
  return (
    <button 
      className={`inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#FFD700] ${className}`}
      {...props}
    >
      {iconPosition === 'left' && <Icon name={icon} size={iconSizes.sm} />}
      {children}
      {iconPosition === 'right' && <Icon name={icon} size={iconSizes.sm} />}
    </button>
  );
};

export default Icon;