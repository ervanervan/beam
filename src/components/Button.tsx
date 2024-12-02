import { cva } from "class-variance-authority";
import React, { ButtonHTMLAttributes, ReactNode } from "react";

const classes = cva(
  "px-6 h-11 rounded-xl gap-1 flex items-center justify-center font-medium text-sm whitespace-nowrap",
  {
    variants: {
      variant: {
        primary:
          "bg-primary-500 text-text-whitePrimary hover:bg-primary-500/90",
        secondary:
          "bg-secondary-50 text-text-blackPrimary hover:bg-secondary-50/90",
        tertiary:
          "bg-tertiary-700 text-text-whitePrimary hover:bg-tertiary-700/90",
      },
      size: {
        sm: "h-10",
      },
    },
  }
);

export default function Button(
  props: {
    variant: "primary" | "secondary" | "tertiary";
    size?: "sm";
    icon?: ReactNode;
    iconPosition?: "left" | "right";
  } & ButtonHTMLAttributes<HTMLButtonElement>
) {
  const {
    variant,
    className,
    size,
    icon,
    children,
    iconPosition = "left",
    ...otherProps
  } = props;
  return (
    <button className={classes({ variant, size, className })} {...otherProps}>
      {icon && iconPosition === "left" && <span>{icon}</span>}
      {children}
      {icon && iconPosition === "right" && <span>{icon}</span>}
    </button>
  );
}
