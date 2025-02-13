import { FC } from 'react';

type ButtonProps = {
  onClick?: () => void;
  href?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
};

const baseClasses = 'px-4 py-2 rounded-lg font-semibold transition duration-300';
const variants = {
  primary: 'bg-red-600 text-white hover:bg-red-700',
  secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
};

const Button: FC<ButtonProps> = ({ onClick, href, children, variant = 'primary', className }) => {
  const classes = `${baseClasses} ${variants[variant]} ${className || ''}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }
  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;
