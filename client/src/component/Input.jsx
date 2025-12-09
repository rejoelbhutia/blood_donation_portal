import { forwardRef } from 'react';

// Wrap your component in forwardRef
const Input = forwardRef(({ type = "text", placeholder, className = "", ...props }, ref) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      // Pass all props (like onChange, onBlur, name) from register
      {...props}
      // Assign the forwarded ref to the input element
      ref={ref}
      // Using the styles from your password input for consistency
      className={`w-[350px] border-t-0 border-r-0 border-l-0 lg:w-[500px] border pl-8 pb-2 text-2xl outline-none ${className}`}
    />
  );
});

export default Input;