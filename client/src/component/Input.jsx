import React, { forwardRef } from 'react';

const Input = forwardRef(({ className = "", ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={`w-[350px] border-t-0 border-r-0 border-l-0 lg:w-[500px] border pl-8 pb-2 text-2xl outline-none ${className}`}
      {...props}
    />
  );
});

Input.displayName = "Input";

export default Input;
