import { PropsWithChildren, ComponentPropsWithRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends PropsWithChildren<ComponentPropsWithRef<'button'>> {
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ className, children, ...props }) => (
  <button
    className={twMerge(
      `w-full rounded-full bg-green-500 border border-transparent px-3 py-3 disabled:cursor-not-allowed disabled:opacity-50 text-black font-bold hover:opacity-75 transition`,
      className
    )}
    {...props}
  >
    {children}
  </button>
);

export default Button;
