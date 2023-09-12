import React from 'react';

import { twMerge } from 'tailwind-merge';
import { ComponentPropsWithRef } from 'react';

interface InputProps extends ComponentPropsWithRef<'input'> {
  className?: string;
}

const Input: React.FC<InputProps> = ({ className, ...props }) => {
  return (
    <input
      className={twMerge(
        `flex w-full rounded-md bg-neutral-700 border border-transparent px-3 py-3 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 disabled:cursor-not-allowed disabled:bg-opacity-50 focus:outline-none`,
        className
      )}
      {...props}
    />
  );
};

export default Input;
