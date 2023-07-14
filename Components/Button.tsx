import React, { forwardRef, useRef } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps 
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps> (({
    className,
    children,
    disabled,
    type = "button",
    ...props
}, ref) => {
    return (
        <button
          type={type}
          ref={ref}
          disabled={disabled}
          {...props}
          className={twMerge(`
            bg-green-500
            py-3
            px-5
            rounded-full
            border
            border-transparent
            disabled:cursor-not-allowed
            disabled:opacity-50
            text-black
            font-bold
            hover:opacity-75
            transition
            font-medium
            `,
            className
        )}>
            {children}
        </button>
    )
})

Button.displayName = "Button"

 export default Button